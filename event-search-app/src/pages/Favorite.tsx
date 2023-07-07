import { Favorite as FavoriteType, useFavoriteContext } from "../context/FavoriteContext"
import { FaTrashAlt } from "react-icons/fa";
import { useState ,useEffect} from "react";
import "./Favorite.css"
export function Favorite(){
    const {getFavorite,removeFavorite}=useFavoriteContext();
    const [favoriteItems,setFavoriteItems]=useState<FavoriteType[]>(getFavorite());
    useEffect(() => {
        setFavoriteItems(getFavorite());
      }, [getFavorite]);
    const handleRemoveFavorite=(id:string)=>{
        removeFavorite(id);
    }
    return (
        <>
        {
            favoriteItems && favoriteItems.length>0?
            <div>
                <p className="favorite-title mx-auto text-center mt-5">List of your favorite events</p>
                    <div className="table-responsive mt-3">
                        <table className="table table-hover table-light text-center col-md-8 mx-auto">
                            <thead style={{borderBottom: "2px solid black"}}>
                                <tr className="tr-style">
                                    <th scope="col">#</th>
                                    <th scope="col">Date</th>
                                    <th scope="col">Event</th>
                                    <th scope="col">Category</th>
                                    <th scope="col">Venue</th>
                                    <th scope="col">Favorite</th>
                                </tr>
                            </thead>
                                <tbody>
                                    {
                                        favoriteItems.map((favoriteItem:FavoriteType,i:number)=>{
                                            return (
                                                <tr className="tr-style" key={i} style={{ borderTop: "3px solid #EDECEC" }}>
                                                    <th scope="row">{i+1}</th>
                                                    <td>{favoriteItem.date}</td>
                                                    <td>{favoriteItem.event}</td>
                                                    <td>{favoriteItem.category}</td>
                                                    <td>{favoriteItem.venue}</td>
                                                    <td>
                                                        <a onClick={()=>handleRemoveFavorite(favoriteItem.id)}>
                                                            <FaTrashAlt className="fa-regular" />
                                                        </a>
                                                    </td>
                                                </tr>
                                            );
                                        })
                                    }
                                </tbody>
                        </table>
                    </div>
            </div>
            :
            <div className="no-results mt-5 col-md-6 mx-auto">
                No favorite events to show
            </div>
                

        }
        
        </>
    );
}
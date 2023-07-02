import { CONNREFUSED } from 'dns';
import React, { useState } from 'react';
import { CONSTRAINTS } from '../constraints/constraints';
import Detail from './Detail';
import './ResultTable.css';
import {lastValueFrom} from "rxjs";
import { getGeneratedNameForNode } from 'typescript';
interface Item{
    id:string,
    date:string,
    time:string,
    icon:string,
    event:string,
    genre:string,
    venue:string
}

interface ResultTableProps{
    items:Item[]
}

interface ArtistListResponse{
    data: ArtistDetail
}

export interface EventDetail{
    id: string,
    name: string,
    date: string,
    artist: string,
    venue: string,
    genre: string,
    priceRange: string,
    status: string,
    buyTicketAt: string,
    seatmap: string
}

export interface ArtistDetail{
    name: string,
    artistImg:string,
    popularity:number,
    followers:string,
    spotifyUrl:string,
    albums: Array<string>
}

export interface VenueDetail{
    name:string,
    address:string,
    phoneNum: string,
    openHours: string,
    generalRule: string,
    childRule: string,
    lat:string,
    lng:string
}

const ResultTable: React.FC<ResultTableProps>= ({items}) =>{
    const [eventDetail,setEventDetail]=useState<EventDetail>({id:'',name:'',date:'',artist:'',venue:'',genre:'',priceRange:'',status:'',buyTicketAt:'',seatmap:''});
    const [artistDetail,setArtistDetail]=useState<ArtistDetail[]>([]);
    const [venueDetail, setVenueDetail]= useState<VenueDetail>({name:'',address:'',phoneNum: '',openHours: '',generalRule: '',childRule: '',lat:'',lng:''});
    const [isMusicArtist,setIsMusicArtist]=useState(false);
    const [showDetail, setShowDetail]=useState(false);

    const isMusicRelated=(genre:string):boolean=>{
        if(genre==""){
            return false;
          }
          let genres=genre.replace(' ','').split('|');
          if(genres[0].toLowerCase()=="music"){
            return true;
          }
          return false;
    }


    const getVenueDetail = async (venue:string)=>{
        const response= await fetch(`${CONSTRAINTS.SERVER_BASE_URL}/venueDetail/${venue}`);
        const res= await response.json();
        const geoRes= await fetch(`${CONSTRAINTS.GOOGLE_BASE_URL}address=${res.data.address}&key=${CONSTRAINTS.GOOGLE_TOKEN}`);
        const geoData=await geoRes.json();
        setVenueDetail({...res.data,lat:geoData.results[0].geometry.location.lat,lng:geoData.results[0].geometry.location.lng});
        setShowDetail(true);
        
    }

    const getArtistDetail=async (artists:Array<string>)=>{
        const promises: Promise<ArtistListResponse>[]= artists.map((artist)=>
            fetch(`${CONSTRAINTS.SERVER_BASE_URL}/searchArtist/${artist}`).then((response)=>(
                response.json())
            ));
        Promise.all(promises).then((responses:ArtistListResponse[])=>{
            const filteredResponses=responses.map((response)=>response.data).filter((response)=>
                response.name !== '' ||
                response.artistImg !== '' ||
                response.followers !== '' ||
                response.popularity !== 0 ||
                response.spotifyUrl !== '' ||
                response.albums.length > 0
            );
            setArtistDetail(filteredResponses);
        }).catch((error)=>{
            console.error("Error fetching Artist Detail: ", error);
        });
    }

    const handleItemClick= async (id:string)=>{
        try{
            const response= await fetch(`${CONSTRAINTS.SERVER_BASE_URL}/eventDetail/${id}`);
            const res= await response.json();
            setEventDetail(res.data);
            if(res.data.artist && isMusicRelated(res.data.genre)){
                setIsMusicArtist(true);
                const artists=res.data.artist.replace(' ','').split('|');
                getArtistDetail(artists);
            }
            getVenueDetail(res.data.venue);
            
        } catch(error){
            console.error("Error getting event detail: ",error);
        }
    }

    const handleBackButtonClick= (): void=>{
        setShowDetail(false);
    }

    return (
        <div className='mt-5'>
            { showDetail ?  
            <Detail onClick={handleBackButtonClick} eventDetailProps={eventDetail} artistDetailProps={artistDetail} venueDetailProps={venueDetail} isMusicArtist={isMusicArtist}/>
            :
                (
                    <div>
                    {items.length !==0 ? (
                    <div className='table-responsive mt-5'>
                        <table className='table table-striped table-dark text-center col-md-10 mx-auto'>
                            <thead>
                                <tr>
                                    <th scope='col'>Date/Time</th>
                                    <th scope='col'>Icon</th>
                                    <th scope='col'>Event</th>
                                    <th scope='col'>Genre</th>
                                    <th scope='col'>Venue</th>
                                </tr>
                            </thead>
                            <tbody>
                                {items.map((item)=>(
                                    <tr key={item.id} onClick={()=>handleItemClick(item.id)}>
                                        <td scope='row'>{item.date} <br /> {item.time}</td>
                                        <td> <img src={item.icon} alt="Image" style={{width:'80px',height:'80px'}}/></td>
                                        <td>{item.event}</td>
                                        <td>{item.genre}</td>
                                        <td>{item.event}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    ): 
                    <div className="no-results mt-5 mb-5 col-md-6 mx-auto">No result available</div>
                    }</div>
                    )}
                    </div>);
            
}

export default ResultTable;
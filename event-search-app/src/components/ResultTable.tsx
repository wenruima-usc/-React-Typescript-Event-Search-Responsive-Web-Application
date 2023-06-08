import { CONNREFUSED } from 'dns';
import React, { useState } from 'react';
import { CONSTRAINTS } from '../constraints/constraints';
import Detail from './Detail';
import './ResultTable.css';
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

const ResultTable: React.FC<ResultTableProps>= ({items}) =>{
    const [eventDetail,setEventDetail]=useState<EventDetail>({id:'',name:'',date:'',artist:'',venue:'',genre:'',priceRange:'',status:'',buyTicketAt:'',seatmap:''});
    const [showDetail, setShowDetail]=useState(false);


    const handleItemClick= async (id:string)=>{
        try{
            const response= await fetch(`${CONSTRAINTS.SERVER_BASE_URL}/eventDetail/${id}`);
            const res= await response.json();
            setEventDetail(res.data);
            setShowDetail(true);
        } catch(error){
            console.error("Error getting event detail: ",error);
        }
    }

    return (
        <div className='mt-5'>
            { showDetail ?  
            <Detail eventDetailProps={eventDetail}/>
            :(
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
            )}
            
        </div>
    );
}

export default ResultTable;
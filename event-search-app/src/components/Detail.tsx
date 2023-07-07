import React, { useState } from 'react';
import { ArtistDetail, EventDetail, VenueDetail } from './ResultTable';
import {Button} from "react-bootstrap";
import EventDetailComponent from './EventDetailComponent';
import './Detail.css';
import {FaChevronLeft,FaRegHeart,FaHeart} from 'react-icons/fa'
import {Tabs,Tab,Paper} from "@mui/material"
import TabPanel from './TabPanel';
import ArtistDetailComponent from './ArtistDetailComponent';
import VenueDetailComponent from './VenueDetailComponent';
import { useFavoriteContext } from '../context/FavoriteContext';
interface DetailProps{
    onClick: ()=>void;
    eventDetailProps: EventDetail,
    artistDetailProps: ArtistDetail[],
    venueDetailProps: VenueDetail
    isMusicArtist: boolean
}

const Detail: React.FC<DetailProps>= ({onClick,eventDetailProps,artistDetailProps, venueDetailProps,isMusicArtist}) =>{
    const {addToFavorite,removeFavorite,getFavorite,isFavorite}=useFavoriteContext();
    const [favorite,setFavorite]=useState(isFavorite(eventDetailProps.id));
    const [selectedTab, setSelectedTab]=useState(0);
    const tabs=[
        {label:'Events'},
        {label:'Artist/Teams'},
        {label:'Venue'}
    ];

    const handleTabChange= (event:React.SyntheticEvent,newValue:number)=>{
        setSelectedTab(newValue);
    };

    const handleAddToFavorite=()=>{
        const favoriteItem={
            id: eventDetailProps.id,
            date: eventDetailProps.date,
            event: eventDetailProps.name,
            category: eventDetailProps.genre,
            venue: eventDetailProps.venue
        };
        addToFavorite(favoriteItem);
        setFavorite(true);
        
    }

    const handleRemoveFavorite=()=>{
        removeFavorite(eventDetailProps.id);
        setFavorite(false);
    }


    return (
        <div className='mt-5'>
            <div className='col-md-10 mx-auto mt-5 detailTabs p-0' >
                <div>
                    <button type="button" className='btn btn-sm back mt-3' onClick={onClick}>
                    <FaChevronLeft></FaChevronLeft><span className="back">Back</span>
                    </button>
                    <div className="card-title pt-4">
                        <p>
                           <span style={{marginRight:'5px'}}>{eventDetailProps.name}</span>
                           {favorite?
                           <button type="button" className='btn btn-sm favorite p-0' onClick={handleRemoveFavorite}>
                                <FaHeart style={{color:'red'}}></FaHeart>
                            </button>
                            :
                            <button type="button" className='btn btn-sm favorite p-0' onClick={handleAddToFavorite}>
                                <FaRegHeart style={{color:'black'}}></FaRegHeart>
                            </button>
                            }
                            
                        </p>
                    </div>
                </div>
                <Paper square>
                    <Tabs value={selectedTab} onChange={handleTabChange} indicatorColor="primary" textColor="inherit" centered className='mat-tab-header' >
                        {tabs.map((tab,index)=>(
                            <Tab key={index} label={tab.label}/>
                        ))}
                    </Tabs>
                </Paper>
                    {tabs.map((tab,index)=>(
                        <TabPanel key={index} value={selectedTab} index={index}>
                            {index===0 && <EventDetailComponent eventDetailProps={eventDetailProps}></EventDetailComponent>}
                            {index===1 && ((isMusicArtist || artistDetailProps.length!=0 )? <ArtistDetailComponent artistDetailProps={artistDetailProps}></ArtistDetailComponent>
                             : 
                            <div className="no-results col-md-6 mx-auto" style={{fontSize:"18px",marginTop:"7rem",marginBottom:"7rem"}}>No music related artist details to show</div>)}
                            {index===2 && <VenueDetailComponent venueDetailProps={venueDetailProps}></VenueDetailComponent>}
                        </TabPanel>
                    ))}
            </div>
        </div>
    );


}
export default Detail;
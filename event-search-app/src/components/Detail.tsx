import React, { useState } from 'react';
import { ArtistDetail, EventDetail } from './ResultTable';
import {Button} from "react-bootstrap";
import EventDetailComponent from './EventDetailComponent';
import './Detail.css';
import {FaChevronLeft,FaRegHeart} from 'react-icons/fa'
import {Tabs,Tab,Paper} from "@mui/material"
import TabPanel from './TabPanel';
import ArtistDetailComponent from './ArtistDetailComponent';
interface DetailProps{
    onClick: ()=>void;
    eventDetailProps: EventDetail,
    artistDetailProps: ArtistDetail[],
    isMusicArtist: boolean
}

const Detail: React.FC<DetailProps>= ({onClick,eventDetailProps,artistDetailProps,isMusicArtist}) =>{
    const [selectedTab, setSelectedTab]=useState(0);
    const tabs=[
        {label:'Events'},
        {label:'Artist/Teams'},
        {label:'Venue'}
    ];

    const handleTabChange= (event:React.SyntheticEvent,newValue:number)=>{
        setSelectedTab(newValue);
    };


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
    
                            <button type="button" className='btn btn-sm favorite p-0' >
                                <FaRegHeart style={{color:'black'}}></FaRegHeart>
                            </button>
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
                            {index===2 && <div>Tab 2</div>}

                        </TabPanel>
                    ))}
                    {/* <Tabs indicatorColor="primary" textColor="inherit" centered className='mat-tab-header'>
                        <Tab key='0' label="Tab 1"></Tab>
                        <Tab key='1' label="Tab 2"></Tab>
                        <Tab key='2' label="Tab 3"></Tab>
                    </Tabs>  */}

            </div>
        </div>
    );


}
export default Detail;
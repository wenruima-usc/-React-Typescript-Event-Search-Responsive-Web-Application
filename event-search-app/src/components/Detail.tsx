import React from 'react';
import { EventDetail } from './ResultTable';
import {Button} from "react-bootstrap";
import './Detail.css';
import {FaChevronLeft,FaRegHeart} from 'react-icons/fa'
import {Tabs,Tab} from "@mui/material"

interface DetailProps{
    eventDetailProps: EventDetail
}

const Detail: React.FC<DetailProps>= ({eventDetailProps}) =>{

    return (
        <div className='mt-5'>
            <div className='col-md-8 mx-auto mt-5 detailTabs p-0' >
                <div>
                    <button type="button" className='btn btn-sm back mt-3'>
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
               <Tabs indicatorColor="primary" textColor="primary">
                    <Tab label="Tab 1"></Tab>
                    <Tab label="Tab 2"></Tab>
                    <Tab label="Tab 3"></Tab>
                </Tabs> 
            </div>
        </div>
    );


}
export default Detail;
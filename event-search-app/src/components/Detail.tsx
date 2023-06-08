import React from 'react';
import { EventDetail } from './ResultTable';
import {Button} from "react-bootstrap";
import './Detail.css';
interface DetailProps{
    eventDetailProps: EventDetail
}

const Detail: React.FC<DetailProps>= ({eventDetailProps}) =>{

    return (
        <div className='mt-5'>
            <div className='col-md-8 mx-auto mt-5 detailTabs p-0' >
                <div>
                    <Button type="button" className='btn-sm back mt-3'>
                    <i className="material-icons md-12 md-light align-items-center">chevron_left</i> <span className="back">Back</span>
                    </Button>
                </div>
            </div>
        </div>
    );


}
export default Detail;
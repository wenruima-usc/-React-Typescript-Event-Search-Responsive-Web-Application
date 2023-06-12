import React from 'react';
import { EventDetail } from './ResultTable';
interface eventDetailProps{
    eventDetailProps:EventDetail
}
const EventDetailComponent:React.FC<eventDetailProps>=({eventDetailProps})=>{
    return (
        <div>Event Detail</div>
    );
};

export default EventDetailComponent;
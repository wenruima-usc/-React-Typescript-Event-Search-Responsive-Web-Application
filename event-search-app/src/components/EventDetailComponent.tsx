import React from 'react';
import { EventDetail } from './ResultTable';
import "./EventDetailComponent.css";
import { Rowing } from '@mui/icons-material';
import { Col,Row } from 'react-bootstrap';
interface eventDetailProps{
    eventDetailProps:EventDetail
}
const EventDetailComponent:React.FC<eventDetailProps>=({eventDetailProps})=>{
    return (
        <Row className='mt-5  align-items-center'>
            <Col md={6}>
                <Row>
                    {eventDetailProps.date && 
                        <Col sm={12} className="mb-3 text-center align-items-center" style={{color: "white"}}>
                            <p className="entryName">Date</p>
                            <p className="entryValue">{eventDetailProps.date}</p>
                        </Col>
                    }
                    {eventDetailProps.artist && 
                        <Col sm={12} className="mb-3 text-center align-items-center" style={{color: "white"}}>
                            <p className="entryName">Artist/Team</p>
                            <p className="entryValue">{eventDetailProps.artist}</p>
                        </Col>
                    }
                    {eventDetailProps.venue && 
                        <Col sm={12} className="mb-3 text-center align-items-center" style={{color: "white"}}>
                            <p className="entryName">Venue</p>
                            <p className="entryValue">{eventDetailProps.venue}</p>
                        </Col>
                    }
                    {eventDetailProps.genre && 
                        <Col sm={12} className="mb-3 text-center align-items-center" style={{color: "white"}}>
                            <p className="entryName">Artist/Team</p>
                            <p className="entryValue">{eventDetailProps.artist}</p>
                        </Col>
                    }
                    {eventDetailProps.priceRange && 
                        <Col sm={12} className="mb-3 text-center align-items-center" style={{color: "white"}}>
                            <p className="entryName">Price Ranges</p>
                            <p className="entryValue">{eventDetailProps.priceRange}</p>
                        </Col>
                    }
                    {eventDetailProps.status && 
                        <Col sm={12} className="mb-3 text-center align-items-center" style={{color: "white"}}>
                            <p className="entryName">Ticket Status</p>
                            <div className="entryValue">
                                {eventDetailProps.status=="On Sale" && <div className='status onSaleStatus'>{eventDetailProps.status}</div>}
                                {eventDetailProps.status=="Off Sale" && <div className='status offSaleStatus'>{eventDetailProps.status}</div>}
                                {eventDetailProps.status=="Canceled" && <div className='status canceledStatus'>{eventDetailProps.status}</div>}
                                {eventDetailProps.status=="Postponed" && <div className='status postponedStatus'>{eventDetailProps.status}</div>}
                                {eventDetailProps.status=="Rescheduled" && <div className='status rescheduledStatus'>{eventDetailProps.status}</div>}
                            </div>
                        </Col>
                    }
                    {eventDetailProps.buyTicketAt && 
                        <Col sm={12} className="mb-3 text-center align-items-center" style={{color: "white"}}>
                            <p className="entryName">Buy Ticket At:</p>
                            <p className="entryValue">
                                <a href={eventDetailProps.buyTicketAt} style={{color: "#005FDB", textDecorationLine: "underline"}} target= "_blank">Ticketmaster</a>
                            </p>
                        </Col>
                    }
                </Row>
            </Col>
            <Col md={6} className="text-center">
                {eventDetailProps.seatmap && 
                    <img src={eventDetailProps.seatmap} style={{width: "350px"}}/>
                }
            </Col>
        </Row>
    );
};

export default EventDetailComponent;
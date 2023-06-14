import React from 'react';
import { EventDetail } from './ResultTable';
import "./EventDetailComponent.css";
import { Rowing } from '@mui/icons-material';
import { Col,Row } from 'react-bootstrap';
import {FaFacebookSquare,FaTwitter} from 'react-icons/fa'
interface eventDetailProps{
    eventDetailProps:EventDetail
}

const EventDetailComponent:React.FC<eventDetailProps>=({eventDetailProps})=>{
    const shareOnTwitter= ():void=>{
        const tweetText=`Check out ${eventDetailProps.name} on Ticketmaster: ${eventDetailProps.buyTicketAt}`;
        const tweetUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(tweetText)}`;
        window.open(tweetUrl, '_blank');
}

const shareOnFacebook=():void=>{
    const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${eventDetailProps.buyTicketAt}`;
    window.open(facebookUrl, '_blank');
}
    return (
        <>
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
                            <p className="entryName">Genres</p>
                            <p className="entryValue">{eventDetailProps.genre}</p>
                        </Col>
                    }
                    {eventDetailProps.priceRange && 
                        <Col sm={12} className="mb-3 text-center align-items-center" style={{color: "white"}}>
                            <p className="entryName">Price Ranges</p>
                            <p className="entryValue">{eventDetailProps.priceRange+" USD"}</p>
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
            <Col md={6} className="text-center justify-content-center align-items-center d-flex">
                {eventDetailProps.seatmap && 
                    <img src={eventDetailProps.seatmap} style={{width: "350px"}}/>
                }
            </Col>
        </Row>
        <Row className='mt-3'>
            <Col sm={12} className="text-center align-items-center" style={{color:"white",fontSize:"16px"}}>
                Share on:
                <button className='btn btn-sm' onClick={shareOnTwitter}>
                    <FaTwitter className="twitter-icon" size={32} />
                </button>
                <button className='btn btn-sm' onClick={shareOnFacebook}>
                    <FaFacebookSquare className="facebook-icon" size={32} />
                </button>
            </Col>
        </Row>
        </>
    );
};

export default EventDetailComponent;
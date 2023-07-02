import React ,{useEffect, useState} from 'react';
import { VenueDetail } from './ResultTable';
import "./VenueDetailComponent.css"
import {Row,Col,Button} from 'react-bootstrap';
import {FaAngleDown,FaAngleUp} from 'react-icons/fa';
import { GoogleMap, LoadScript, Marker, useLoadScript } from '@react-google-maps/api';
import { CONSTRAINTS } from '../constraints/constraints';
interface VenueDetailProps{
    venueDetailProps:VenueDetail
}
const VenueDetailComponent: React.FC<VenueDetailProps> = ({venueDetailProps})=>{
    const [openHourExpanded,setOpenHourExpanded]=useState(false);
    const [generalRuleExpanded,setGeneralRuleExpanded]=useState(false);
    const [childRuleExpanded,setChildRuleExpanded]=useState(false);
    const [showGoogleMap, setShowGoogleMap]=useState(false);

    const mapOptions={
        center: {lat:parseFloat(venueDetailProps.lat),lng: parseFloat(venueDetailProps.lng)}
    };
    const markerPosition={
        lat: parseFloat(venueDetailProps.lat),
        lng: parseFloat(venueDetailProps.lng)
    };

    const {isLoaded} = useLoadScript({
        googleMapsApiKey : CONSTRAINTS.GOOGLE_TOKEN,
    });

    

    return (
        <>
        <Row className="mt-5" style={{color:'white'}}>
            <Col md={6} className="text-center align-items-center">
                <Row>
                    {venueDetailProps.name && 
                        <Col sm={12} className="text-center align-items-center">
                            <p className='entryName'>Name</p>
                            <p>{venueDetailProps.name}</p>
                        </Col>
                    }
                </Row>

                <Row className='mt-2'>
                    {venueDetailProps.address && 
                        <Col sm={12} className="text-center align-items-center">
                            <p className='entryName'>Address</p>
                            <p>{venueDetailProps.address}</p>
                        </Col>
                    }
                </Row>

                <Row className='mt-2'>
                    {venueDetailProps.phoneNum && 
                        <Col sm={12} className="text-center align-items-center">
                            <p className='entryName'>Phone Number</p>
                            <p>{venueDetailProps.phoneNum}</p>
                        </Col>
                    }
                </Row>  
            </Col>
            <Col md={6} className="text-center align-items-center">
                <Row>
                    {venueDetailProps.openHours && 
                        <Col sm={12} className="text-center align-items-center">
                            <p className='entryName'>Open Hours</p>
                            {!openHourExpanded && 
                                <p>
                                    {venueDetailProps.openHours.slice(0,110)}
                                    <br></br>
                                    <button onClick={()=>setOpenHourExpanded(!openHourExpanded)} style={{backgroundColor:"transparent",border:"none",boxShadow:"none"}}>
                                        <span style={{color:"#6ECAE8",textDecorationColor:"#6ECAE8",textDecoration:"underline"}}>
                                            Show more
                                            <FaAngleDown style={{color:"white"}}></FaAngleDown>
                                        </span>
                                    </button>
                                </p>
                            }
                            {openHourExpanded && 
                                <p>
                                    {venueDetailProps.openHours}
                                    <br></br>
                                    <button onClick={()=>setOpenHourExpanded(!openHourExpanded)} style={{backgroundColor:"transparent",border:"none",boxShadow:"none"}}>
                                        <span style={{color:"#6ECAE8",textDecorationColor:"#6ECAE8",textDecoration:"underline"}}>
                                            Show less
                                            <FaAngleUp style={{color:"white"}}></FaAngleUp>
                                        </span>
                                    </button>
                                </p>
                            }
                        </Col>
                    }
                </Row>

                <Row className='mt-2'>
                    {venueDetailProps.generalRule && 
                        <Col sm={12} className="text-center align-items-center">
                            <p className='entryName'>General Rule</p>
                            {!generalRuleExpanded && 
                                <p>
                                    {venueDetailProps.generalRule.slice(0,110)}
                                    <br></br>
                                    <button onClick={()=>setGeneralRuleExpanded(!generalRuleExpanded)} style={{backgroundColor:"transparent",border:"none",boxShadow:"none"}}>
                                        <span style={{color:"#6ECAE8",textDecorationColor:"#6ECAE8",textDecoration:"underline"}}>
                                            Show more
                                            <FaAngleDown style={{color:"white"}}></FaAngleDown>
                                        </span>
                                    </button>
                                </p>
                            }
                            {generalRuleExpanded && 
                                <p>
                                    {venueDetailProps.generalRule}
                                    <br></br>
                                    <button onClick={()=>setGeneralRuleExpanded(!generalRuleExpanded)} style={{backgroundColor:"transparent",border:"none",boxShadow:"none"}}>
                                        <span style={{color:"#6ECAE8",textDecorationColor:"#6ECAE8",textDecoration:"underline"}}>
                                            Show less
                                            <FaAngleUp style={{color:"white"}}></FaAngleUp>
                                        </span>
                                    </button>
                                </p>
                            }
                        </Col>
                    }
                </Row>

                <Row className='mt-2'>
                    {venueDetailProps.childRule && 
                        <Col sm={12} className="text-center align-items-center">
                            <p className='entryName'>Child Rule</p>
                            {!childRuleExpanded && 
                                <p>
                                    {venueDetailProps.childRule.slice(0,110)}
                                    <br></br>
                                    <button onClick={()=>setChildRuleExpanded(!childRuleExpanded)} style={{backgroundColor:"transparent",border:"none",boxShadow:"none"}}>
                                        <span style={{color:"#6ECAE8",textDecorationColor:"#6ECAE8",textDecoration:"underline"}}>
                                            Show more
                                            <FaAngleDown style={{color:"white"}}></FaAngleDown>
                                        </span>
                                    </button>
                                </p>
                            }
                            {childRuleExpanded && 
                                <p>
                                    {venueDetailProps.childRule}
                                    <br></br>
                                    <button onClick={()=>setChildRuleExpanded(!childRuleExpanded)} style={{backgroundColor:"transparent",border:"none",boxShadow:"none"}}>
                                        <span style={{color:"#6ECAE8",textDecorationColor:"#6ECAE8",textDecoration:"underline"}}>
                                            Show less
                                            <FaAngleUp style={{color:"white"}}></FaAngleUp>
                                        </span>
                                    </button>
                                </p>
                            }
                        </Col>
                    }
                </Row>
            </Col>
        </Row>
        <Row className='mt-5 mb-3'>
            <Col sm={12} className="text-center align-items-center">
                <Button className="btn-danger" onClick={()=>setShowGoogleMap(true)} style={{fontSize:"18px"}}> 
                    Show venue on Google map
                </Button>
            </Col>
        </Row>
        {showGoogleMap && isLoaded &&
        <div  className={`modal fade ${showGoogleMap ? 'show' : ''}`} id="modal" tabIndex={-1} role="dialog" aria-labelledby='modalLabel' aria-hidden={!showGoogleMap} style={{ display: showGoogleMap ? 'block' : 'none' }}>
            <div className='modal-dialog' role="document">
                <div className="modal-content">
                    <div className='modal-header'>
                        <h5 className='modal-title' id="modalLabel" style={{fontSize:"20px",fontWeight:"bold"}}>
                            Event Venue
                        </h5>
                    </div>
                    <div className='modal-body'>
                        <Row>
                            <Col sm={12} className="my-google-map">
            
                                    <GoogleMap
                                        mapContainerClassName='map-container'
                                        center={mapOptions.center}
                                        zoom={15}
                                        mapContainerStyle={{width:"auto",height:"400px"}}
                                    >
                                    <Marker position={markerPosition}></Marker>
                                    </GoogleMap>
        
                            </Col>
                        </Row>
                    </div>
                    <div className="modal-footer" style={{justifyContent: "flex-start"}}>
                        <button type="button" className="btn btn-dark " onClick={()=>setShowGoogleMap(false)}>Close</button>
                    </div> 
                </div>
            </div>
        </div>
}
    </>
    );
}

export default VenueDetailComponent;
import React ,{useState} from 'react';
import { VenueDetail } from './ResultTable';
import "./VenueDetailComponent.css"
import {Row,Col} from 'react-bootstrap';
import {FaAngleDown,FaAngleUp} from 'react-icons/fa';
interface VenueDetailProps{
    venueDetailProps:VenueDetail
}
const VenueDetailComponent: React.FC<VenueDetailProps> = ({venueDetailProps})=>{
    const [openHourExpanded,setOpenHourExpanded]=useState(false);
    const [generalRuleExpanded,setGeneralRuleExpanded]=useState(false);
    const [childRuleExpanded,setChildRuleExpanded]=useState(false);


    return (
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
    );
}

export default VenueDetailComponent;
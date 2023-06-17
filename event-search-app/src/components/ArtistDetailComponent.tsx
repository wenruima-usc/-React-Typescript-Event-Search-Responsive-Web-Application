import React ,{useRef} from 'react';
import "./ArtistDetailComponent.css"
import { ArtistDetail } from './ResultTable';
import {Row,Col} from 'react-bootstrap';
import CircularProgress from "@mui/material/CircularProgress";
import { FaSpotify } from 'react-icons/fa';
import  Carousel  from 'react-bootstrap/Carousel';
interface ArtistDetailProps{
    artistDetailProps:ArtistDetail[]
}

const ArtistDetailComponent:React.FC<ArtistDetailProps>=({artistDetailProps})=>{
    const carouselRef=useRef<Carousel>(null);
    const handlePrev= ()=>{
        if(carouselRef.current){
            carouselRef.current.prev();
        }
    }
    return (
        <div id="carouselExampleControls" className="carousel slide carousel-container" data-ride="carousel">
            { artistDetailProps.length>1 && 
        <a href="#carouselExampleControls" className="carousel-control-prev" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            
        </a>
        } 
        {artistDetailProps.length>1 && 
        <a href="#carouselExampleControls" className='carousel-control-next' role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            
        </a>
        }
            <div className='carousel-inner'>
                {artistDetailProps.map((artistDetail,index)=>(
                    <div key={index} className={`carousel-item artist pl-5 pr-5 container-fluid ${index==0? 'active':''}`}>
                        <Row className="mt-3 ml-3 mr-3">
                            <Col md={3} className="text-center">
                                <img src={artistDetail.artistImg} alt="No image" style={{borderRadius:"50%",width:"120px",height:"120px"}}/>
                                <p className='mt-2'>{artistDetail.name}</p>
                            </Col>
                            <Col md={3} className="text-center">
                                <div className='pt-4'>
                                    <p>Popularity</p>
                                    <div>
                                        <div style={{color:"white",fontSize:"16px",paddingTop:"0.3rem"}} className="mx-auto mt-3">
                                            {artistDetail.popularity}
                                            <CircularProgress variant="determinate" value={artistDetail.popularity} color="primary" size={40} sx={{mx:'auto',display:"flex",top:'-30px'}}/>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col md={3} className="text-center">
                                <div className='pt-4'>
                                    <p>Followers</p>
                                    <p style={{color:"white"}}>{artistDetail.followers}</p>  
                                </div>
                            </Col>
                            <Col md={3} className="text-center">
                                <div className='pt-4'>
                                    <p>Spotify Link</p>
                                    <p><a href={artistDetail.spotifyUrl} target="_blank"><FaSpotify className="fa-3x" style={{ color: '#008400',fontSize:'2rem' }}/></a></p>
                                </div>
                            </Col>
                        </Row>
                        <Row className='mt-3 ml-3 mr-3'>
                            <Col md={4} sm={12} className="text-center" style={{fontSize:"14px"}}>Album featuring Pitbull</Col>
                        </Row>
                        <Row className='ml-3 mr-3 mb-5'>
                            {artistDetail.albums.map((album,i)=>(
                                <Col key={i} md={4} className="text-center pt-3">
                                    <img src={album} alt="No Image" style={{width:"150px",height:"150px"}}/>
                                </Col>
                            ))}
                        </Row>
                    </div>
                ))}
            </div>  
        </div>
    );
}

export default ArtistDetailComponent;
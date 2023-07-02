import React ,{useState} from 'react';
import "./ArtistDetailComponent.css"
import { ArtistDetail } from './ResultTable';
import {Row,Col} from 'react-bootstrap';
import CircularProgress from '@mui/joy/CircularProgress';
import { FaSpotify } from 'react-icons/fa';
import  Carousel  from 'react-bootstrap/Carousel';
interface ArtistDetailProps{
    artistDetailProps:ArtistDetail[]
}

const ArtistDetailComponent:React.FC<ArtistDetailProps>=({artistDetailProps})=>{
    const [activeIndex,setActiveIndex] = useState(0);

    const handleSelect = (selectedIndex:number) => {
        setActiveIndex(selectedIndex);
      };
    return (
    
            <Carousel  activeIndex={activeIndex} onSelect={handleSelect}>
        
                {artistDetailProps.map((artistDetail,index)=>(
                    <Carousel.Item key={index} className='artist pl-5 pr-5'>
                        <Row className="mt-3 ml-3 mr-3">
                            <Col md={3} className="text-center">
                                <img src={artistDetail.artistImg} alt="No image" style={{borderRadius:"50%",width:"120px",height:"120px"}}/>
                                <p className='mt-2'>{artistDetail.name}</p>
                            </Col>
                            <Col md={3} className="text-center">
                                <div className='pt-4'>
                                    <p>Popularity</p>
                                    <div>
                                        <div  className="mx-auto mt-3">
                                            <CircularProgress size="md" determinate value={artistDetail.popularity} variant="plain" color="danger">
                                                <div style={{color:'white',fontSize:'13px'}}>{artistDetail.popularity}</div>
                                            </CircularProgress>

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
                    </Carousel.Item>
                ))}
        
        </Carousel>   
    );
}

export default ArtistDetailComponent;
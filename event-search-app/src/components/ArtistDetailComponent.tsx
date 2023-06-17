import React from 'react';
import "./ArtistDetailComponent.css"
import { ArtistDetail } from './ResultTable';

interface ArtistDetailProps{
    artistDetailProps:ArtistDetail[]
}

const ArtistDetailComponent:React.FC<ArtistDetailProps>=({artistDetailProps})=>{
    return (
        <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
            <div className='carousel-inner'>
                {artistDetailProps.map((artistDetail)=>(
                    <div className="carousel-item artist pl-5 pr-5 container-fluid">
                        
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ArtistDetailComponent;
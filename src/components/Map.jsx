import React from 'react'
import { GoogleMap, LoadScript,Maker } from '@react-google-maps/api';
const Map = () => {
    const mapStyles ={
        height: "50vh",
        width:"100%",
    }
    const defaultCenter = {
        lat:194267261, lng:-99.1718796
    }
    
    return ( 
        <LoadScript googleMapsApiKey=''>
            <GoogleMap
                mapContainerStyle={mapStyles}
                zoom={9}
                center={defaultCenter}
            >
                <Maker position={defaultCenter} />
            </GoogleMap>
        </LoadScript>
    );
}
 
export default Map;
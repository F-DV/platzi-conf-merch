import React from 'react'
import { GoogleMap, LoadScript } from '@react-google-maps/api';
const Map = ({data}) => {
    const mapStyles ={
        height: "50vh",
        width:"100%",
    }
    const defaultCenter = {
        lat:data.lat, lng: data.lng
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
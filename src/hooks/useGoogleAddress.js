import {useState, useEffect} from 'react';
import axios from 'axios';

const GoogleAddress = address => {
    const [map ,setMap] = useState({});
    const API = 'Api...'

    useEffect(async () => {
        const response = await axios(API)
        setMap(response.data.results[0].geometry.location);

    },[]);
    return map;
}

export default GoogleAddress;
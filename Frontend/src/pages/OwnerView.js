import React, {useEffect, useRef, useState} from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Header from '../components/Header';
import VenueCard from '../components/VenueCard';

export default function OwnerView() {
    const navigate = useNavigate();
    const venues = useRef([])
    // const [updateVenues, setUpdateVenues] = useState(venues.current)
    useEffect(() => {
    }, [venues.current])
    axios.post("/viewvenues").then(res => {
        console.log(res.data['allvenues'])
        // setVenues(res.data['allvenues'])
        venues.current = res.data['allvenues']
        if (res.data.error) {
            alert(res.data.error)
        }
    }).catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
    })
    return (
    <div>
        <Header />
        <div className='flex flex-col items-center justify-center m-4'>
            <div className='flex'>
                <h4 className='mx-96'><b>Venue Owner View</b></h4>
                <button
                    className='bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded' 
                    onClick={e => navigate("/addvenue")}>Add Venue</button>
            </div>
            <div className='flex w-full'>
                {
                    venues.current.map(value => {
                        return (
                            <VenueCard key={value.name} name={value.name} description={value.info} address={value.address} sports={value.sports} timeslots={value.timeslots}/>
                        )
                    })
                }
            </div>
        </div>
    </div>
    )
}
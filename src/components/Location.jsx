import axios from 'axios';
import React, { useEffect } from 'react';
import { useState } from 'react';
import ResidenInfo from './ResidenInfo';
const Location = () => {

    const [location, setLocation] = useState({});
    const [searchLocationValue, setSearchLocationValue] = useState("");

    useEffect(() => {
        const locationRandom = Math.floor(Math.random() * 126) + 1;
        axios
            .get(`https://rickandmortyapi.com/api/location/${locationRandom}`)//Aqui consumimos la API principal//
            .then((res) => setLocation(res.data))
    }, []);



    const searchLocation = () => {
        axios
            .get(`https://rickandmortyapi.com/api/location/${searchLocationValue}`)
            .then((res) => setLocation(res.data));
    };



    return (
        <>
            <header className='headerRAndM'>
                <div className='headerRAndMConteiner'>
                    <input
                        value={searchLocationValue}
                        className='inputHeader'
                        type={"text"}
                        placeholder={"Insert the location number between 1 and 126"}
                        onChange={(e) => setSearchLocationValue(e.target.value)} />
                    <button className='buttonheader'
                        onClick={searchLocation}
                    ><i className="fi fi-ss-play"></i>
                    </button>
                </div>

            </header>

            <div className='location'>
                <h2>{location.name}</h2>
                <div className='dataLocation'>
                    <h4> Type:</h4>{location.type}
                    <h4> Dimension:</h4>{location.dimension}
                    <h4>Population:</h4>{location.residents?.length}
                </div>
            </div>
            <div className='carsItems'>
                {location.residents?.map((residentsUrl) => (
                    <ResidenInfo residentsUrl={residentsUrl} key={residentsUrl} /> //enviamos solo la parte del api que nos interesa, en este caso las url de los porsonajes por medio de residentUrl//
                ))}
            </div>
        </>


    );
};

export default Location;
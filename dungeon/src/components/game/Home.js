import React, { useState, useEffect } from 'react';
import Map from './Map';
import Inputs from './GameInputs';
import Info from './GameInfo';
import axios from 'axios';


function Home(props) {
    const [player, setPlayer] = useState("Rango")

    useEffect(() => {
        axios
            .post(`${props.backendUrl}/api/adv/init/`, {
                'Authorization': localStorage.getItem("key")
            })
    }, [])

    return (
        <React.Fragment>
            <div className="left">
                <Map />
            </div>
            <div className="right">
                <Info />
                <Inputs />
            </div>


        </React.Fragment>
    );
}

export default Home;

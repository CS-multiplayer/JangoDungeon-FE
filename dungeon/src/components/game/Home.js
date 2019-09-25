import React, { useState, useEffect } from 'react';
import Map from './Map';
import Inputs from './GameInputs';
import Info from './GameInfo';
import axios from 'axios';


function Home(props) {
    // const [player, setPlayer] = useState("Rango")
    const [currInfo, setCurrInfo] = useState()

    useEffect(() => {
        let auth = `token ${localStorage.getItem("key")}`
        let options = {
            'Content-Type': 'application/json',
            'Authorization': auth
        }
        console.log(options)
        axios
            .get(`${props.backendUrl}/api/adv/init/`, { headers: options })
            .then(res => {
                setCurrInfo(res.data)
            })
    }, [props.logedIn, props.backendUrl])
    console.log(currInfo)
    return (

        < React.Fragment >
            <div className="left">
                <Map />
            </div>
            <div className="right">
                <Info currInfo={currInfo} />
                <Inputs />
            </div>


        </React.Fragment >
    );
}

export default Home;

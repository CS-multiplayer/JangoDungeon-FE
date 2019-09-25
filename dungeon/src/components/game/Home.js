import React, { useState, useEffect } from 'react';
import Map from './Map';
import Inputs from './GameInputs';
import Info from './GameInfo';
import axios from 'axios';


function Home(props) {
    // const [player, setPlayer] = useState("Rango")
    const [currInfo, setCurrInfo] = useState()

    useEffect(() => {
        const auth = `token ${localStorage.getItem("key")}`
        const options = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': auth
            }
        }
        console.log(options)
        axios
            .get(`${props.backendUrl}/api/adv/init/`, options)
            .then(res => {
                setCurrInfo(res.data)
            })
    }, [props.logedIn, props.backendUrl])

    function useMove(direction) {
        const auth = `token ${localStorage.getItem("key")}`
        const options = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': auth
            }
        }
        console.log(direction)
        axios
            .post(`${props.backendUrl}/api/adv/move/`, { direction }, options)
            .then(res => {
                setCurrInfo(res.data)
            })
    }

    console.log(currInfo)
    return (

        < React.Fragment >
            <div className="left">
                <Map />
            </div>
            <div className="right">
                <Info currInfo={currInfo} />
                <Inputs useMove={useMove} />
            </div>


        </React.Fragment >
    );
}

export default Home;

import React, { useState, useEffect } from 'react';
import Map from './Map';
import Inputs from './GameInputs';
import Info from './GameInfo';
import axios from 'axios';
//"{\"id\": 1, \"n_to\": -1,\"s_to\": -1,\"e_to\": 2,\"w_to\": -1, \"x\": 0, \"y\": 0,}, {\"id\": 2,\"n_to\": 3,\"s_to\": -1,\"e_to\": -1, \"w_to\": 1,\"x\": 1, \"y\": 0,}"
const dummyData = [
    {
        id: 1,
        n_to: -1,
        s_to: -1,
        e_to: 2,
        w_to: -1,
        x: 0,
        y: 0,
    },
    {
        id: 2,
        n_to: 3,
        s_to: -1,
        e_to: -1,
        w_to: 1,
        x: 1,
        y: 0,
    },
    {
        id: 3,
        n_to: -1,
        s_to: 2,
        e_to: -1,
        w_to: -1,
        x: 1,
        y: 1,
    }
]

function Home(props) {
    const [currMap, setMap] = useState(dummyData)
    const [currInfo, setCurrInfo] = useState()

    useEffect(() => {
        const auth = `Token ${localStorage.getItem("key")}`
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
        const auth = `Token ${localStorage.getItem("key")}`
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
    const mapInfo = currInfo ? currInfo.room_id : 0;
    return (

        < React.Fragment >
            <div className="left">
                <Map currMap={currMap} setMap={setMap} logedIn={props.logedIn} backendUrl={props.backendUrl} playerID={mapInfo} />
            </div>
            <div className="right">
                <Info currInfo={currInfo} />
                <Inputs useMove={useMove} />
            </div>


        </React.Fragment >
    );
}

export default Home;

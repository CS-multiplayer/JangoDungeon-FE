import React, { useState, useEffect } from 'react';
import './Map.scss';
import axios from 'axios';

function Map(props) {

  useEffect(() => {
    const auth = `Token ${localStorage.getItem("key")}`
    const options = {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': auth
      }
    }
    axios
      .get(`${props.backendUrl}/api/adv/getallrooms/`, options)
      .then(res => {
        let arr = res.data.rooms.split('}, {')
        arr[arr.length - 1] = arr[arr.length - 1].split('}, ')[0]
        arr[0] = arr[0].split('{')[1]
        // console.log(arr)
        arr = arr.map((curr) => {
          let obj = {}
          let currArr = curr.split(", ")
          currArr.forEach(element => {
            let eleSplit = element.split(':')
            obj[eleSplit[0]] = eleSplit[1]
          });

          return obj
        })
        props.setMap(arr)
      })
  }, [props.logedIn, props.backendUrl])



  // const count = 15
  const grid = []
  for (let i = 0; i < 15; i++) {
    grid.push(null)
  }
  for (let i = 0; i < 15; i++) {
    grid[i] = [null, null, null, null, null, null, null, null, null,
      null, null, null, null, null, null,]
  }
  // console.log(props.currMap)
  for (let i = 0; i < props.currMap.length; i++) {
    let room = props.currMap[i]
    grid[room.y][room.x] = room
  }
  console.log(props.playerID)

  return (
    <React.Fragment>
      <h2>Map</h2>
      <div className='map-section'>
        {grid.map((y, i) => (<div id={i} className="y-div">{
          y.map((x, j) => {
            // render conditionals

            if (x === null) {
              return <div id={j} className='x-div'>{x}</div>
            }
            // console.log(x)
            // console.log(x.id, x.e_to)
            let newClass = 'room';
            // let playerClass = 'player'
            // let pathClassS = 'path';
            // let pathClassW = 'path';
            if (x.s_to > 0) newClass += ' south'
            if (x.w_to > 0) newClass += ' west'
            if (x.e_to > 0) newClass += ' east'
            if (x.n_to > 0) newClass += ' north'
            if (x.id == props.playerID) {
              newClass += ' inroom'
            }
            // console.log(newClass)
            return <div id={j} className={`x-div ${newClass}`}></div>

          })
        }</div>))
        }
      </div>
    </React.Fragment>
  );
}
export default Map;

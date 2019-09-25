import React, { useState } from 'react';

function GameInfo(props) {
  console.log('info', props.currInfo)
  // const { title, description } = props.currInfo ? props.currInfo : { title: '', description: '' }
  return (
    <div className="info">

      <h2>
        Room Info
        </h2>
      <div className="sections">
        <p className='title'>{props.currInfo && props.currInfo.title}</p>
        <p>{props.currInfo && props.currInfo.description}</p>
      </div>
    </div>
  );
}

export default GameInfo;

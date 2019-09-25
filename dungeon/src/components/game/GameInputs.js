import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp, faArrowDown, faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons'
function GameInputs(props) {

  return (
    <div className="inputs">
      N
          <div>
        <button onClick={() => props.useMove('n')}><FontAwesomeIcon icon={faArrowUp} size="lg" /></button>
      </div>
      <div className="left_right">
        W
        <button onClick={() => props.useMove('w')}><FontAwesomeIcon icon={faArrowLeft} size="lg" /></button>
        <button onClick={() => props.useMove('e')}><FontAwesomeIcon icon={faArrowRight} size="lg" /></button>
        E
          </div>
      <div>
        <button onClick={() => props.useMove('s')}><FontAwesomeIcon icon={faArrowDown} size="lg" /></button>
      </div>
      S
        </div>
  );
}

export default GameInputs;

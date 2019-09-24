import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp, faArrowDown, faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons'
function GameInputs() {

    return (
        <div className="inputs">
          N
          <div>
            <FontAwesomeIcon icon={faArrowUp} size="lg" />
          </div>
          <div className="left_right">
            W
            <FontAwesomeIcon icon={faArrowLeft} size="lg" />
            <FontAwesomeIcon icon={faArrowRight} size="lg" />
            E
          </div>
          <div>
            <FontAwesomeIcon icon={faArrowDown} size="lg" />
          </div>
          S
        </div>
    );
}

export default GameInputs;

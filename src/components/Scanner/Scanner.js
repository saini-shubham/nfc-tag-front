import React, { useContext } from 'react';
import './Scanner.css'
import Spinner from '../../spinner.gif';

import { useSelector, useDispatch } from "react-redux";
import { tagAction } from '../../store/tagSlice';

const Scanner = (props) => {
  const tagScanStatus= useSelector(state => state.tagDetails.tagScanStatus)
  const dispatch=useDispatch();
    return (
      <div className="scanner">
        <p className="scanner-exit" onClick={()=> dispatch(tagAction.setTagScanStatus(false))}>X</p>
        <div className="scanner-container">
          <img src={Spinner} alt="spinning log" className="scanner-image"/>
          <p className="scanner-text">
            Scanning...
          </p>
        </div>
      </div>
    );
};

export default Scanner;
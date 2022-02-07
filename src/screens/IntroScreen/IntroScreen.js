import React from 'react';
import './style.css'
import {useNavigate} from 'react-router-dom'
const IntroScreen = () => {
    const navigate = useNavigate();
    const handleClick =() => {
        navigate('/')
    }
  return  <div className="screen">
  <h1>Catch The Insect</h1>
  <button className="btn" id="start-btn" onClick={handleClick}>Let's Start</button>
</div>;
};

export default IntroScreen;

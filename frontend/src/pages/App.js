import React from 'react';
import MainPage from './mainPage';
import VideoPage from '../components/videoPage';
import logo from '../images/logo.png';
import '../style/App.css';
export default function App() {
  return (
    <>
      <div className="app">
        <div className="logo">
          <img className="logo__img" src={logo} alt="logo" />
          <span className="logo__text">WHATSAPP WEB</span>
        </div>
        <div className="main__page">
          <MainPage />
          <VideoPage />
        </div>
      </div>
    </>
  );
}

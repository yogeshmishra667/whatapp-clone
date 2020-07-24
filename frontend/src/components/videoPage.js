import React from 'react';
import { CssBaseline, Container } from '@material-ui/core';
import ReactPlayer from 'react-player/lazy';
//import imgVideo from '../images/video.jpg';

export default function videoPage() {
  return (
    <>
      <CssBaseline />
      <Container maxWidth="md" className="container video">
        <ReactPlayer
          className="player"
          controls="true"
          url="https://youtu.be/jdXwzneFBBU"
        />
      </Container>
    </>
  );
}

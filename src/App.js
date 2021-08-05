import React from 'react';
import './style.css';
import image from "./img2.jpg";
import video from "./nature.mp4";


function App() {
  return (
    <div className="body" style={{border:"solid 1px black", maxWidth:"100vw"}}>
    <div className="part1">
      <h1 className="titleRed">Haythem Smirani</h1>
      <img src={image} alt="src" className="img1"/>
      <img src="/img1.jpg" alt="public" className="img2"/>
      </div>
      <div className="part2">
      <video width="320" height="240" controls>
        <source src={video} type="video/mp4"/>
      </video>
    </div> 
    </div> 
  );
}

export default App;

import React from 'react';
import './App.css';
import BeltRed from './img/Belt_red.png';
import DisksYellow from './img/Disks_yellow.png';
import BeltGreen from './img/Belt_green.png';
import DisksGreen from './img/Disks_green.png';
import red_elv from './img/Red-ESC.png'
import yellow_elv from './img/display_yellow.png'
import green_elv from './img/Green-ELV.png'
import green_esc from './img/display_yellow.png'
import { useState } from 'react';

function App() {
  const [myClass, setMyClass] = useState(0);

  const handleImageHover = (event) => {
    const hoveredImage = event.target; // Get the hovered image element};
    const mapping = {
      "beltRed": "elvRed",
      "diskYellow": "elvYellow",
      "beltGreen": "elvGreen",
      "diskGreen": "escGreen",
    }


    console.log(hoveredImage);
    //const ele = 'he '+mapping[hoveredImage.className.split(" ")[1]];
    //hoveredImage.classList.add(styles.elvRedVisible);
    //mapping[hoveredImage.className.split(" ")[1]].style.visibility = "visible";
    //console.log("Hovered image:", mapping[hoveredImage.className.split(" ")[1]]);
    setMyClass(mapping[hoveredImage.className.split(" ")[1]])
    console.log("Check my class below")
    console.log(myClass)
  };
  const disks = [
    { src: BeltRed, alt: "Belt (Red)", className: "beltRed" },
    { src: DisksYellow, alt: "Disks (Yellow)", className: "diskYellow" },
    { src: BeltGreen, alt: "Belt (Green)", className: "beltGreen" },
    { src: DisksGreen, alt: "Disks (Green)", className: "diskGreen" },
  ];
  const elv = [
    { src: red_elv, alt: "Elv (Red)", className: "elvRed" },
    { src: yellow_elv, alt: "Elv (Yellow)", className: "elvYellow" },
    { src: green_elv, alt: "Elv (Green)", className: "elvGreen" },
    { src: green_esc, alt: "Elv (Green) 2", className: "escGreen" },
  ];
  return (
    <div className='container'>
      <div className='tiles-container'>
      <div className='tiles'>
        {disks.map((imageData) => (
          <img
            key={imageData.src} // Assign a unique key
            className={`tiles-img ${imageData.className}`}
            src={imageData.src}
            alt={imageData.alt}
            onMouseEnter={handleImageHover}
            onMouseLeave={handleImageHover}
          />
        ))}
      </div>
      </div>
      <div className='ImageContainer'>
        {elv.map((elv_obj) => (

          <img
            key={elv_obj.src}
            alt={elv_obj.alt}
            className={`display-img ${elv_obj.className} ${elv_obj.className === myClass ? 'attach' : ''
              }`}
            src={elv_obj.src}
          />
        ))}
      </div>
    </div>
  );
}

export default App;


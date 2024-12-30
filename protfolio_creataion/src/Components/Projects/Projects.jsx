import React from 'react'
import "./Projects.css";
import ReactCardSlider from "react-card-slider-component";

const data = [
  {
    image: "https://picsum.photos/200/300",
    title: "This is a title",
    description: "This is a description"
    // clickEvent: sliderClick
  },
  {
    image: "https://picsum.photos/600/500",
    title: "This is a second title",
    description: "This is a second description"
    // clickEvent: sliderClick
  },
 
];

const Projects = () => {
  return (
   <>
    <div className="glitch">
      <h1 className='heading'>Projects</h1>
    </div>
    
    
    </>
   
  )
}

export default Projects

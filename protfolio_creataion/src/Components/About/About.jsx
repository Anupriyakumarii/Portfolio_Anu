import image from "./../../assets/profile_img.png";
import "./About.css";
function About() {
  return (
    <>
      <div className="container">
        <div className="glitch">
          <h1>ABOUT ME</h1>
        </div>
        {/* <div className="glow">ABOUT</div> */}
        <div className="inner_card">
          <div className="image_scr">
            <img src={image} className="image_scr"></img>
          </div>
          <div className="About">
            <p></p>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;

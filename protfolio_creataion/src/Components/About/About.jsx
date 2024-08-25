import image from "./../../assets/profile_img.png";
import "./About.css";
function About() {
  return (
    <>
      <section className="container" id="About">
        <div className="glitch">
          <h1>ABOUT ME</h1>
          {/* <a href="#About">ABOUT ME</a> */}
        </div>
        <div className="inner_card">
          <div className="image_scr">
            <img src={image} className="image_scr"></img>
          </div>
          <p className="About">
              Over 2 years of experience as a Frontend Developer at Tata Consultancy Services (TCS), with a successful project deployment at Zebra Technologies which is a client location of TCS. Specialize in JavaScript, React, UI/UX design and CSS Framework.Demonstrated proficiency in developing high-performing, responsive user interfaces, optimizing code, and fostering effective collaboration in agile teams.
          </p> 
        </div>
      </section>
    </>
  );
}

export default About;

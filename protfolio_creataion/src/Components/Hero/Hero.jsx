import "./Hero.css";

const Hero = () => {
  return (
    // <div className="hero">
    //   <h1 className="intro">Hey, </h1>
    //   <p className="intro">I am Anupriya Kumari</p>
    //   <h1 className="profession">Frontend Developer</h1>
    //   {/* <p className="about">
    //     I am Frontend Developer with 2 years of Experience.
    //   </p> */}
    // </div>
    <div className="animated-title">
      <div className="text-top">
        <div>
          <span>Hey,</span>
          <span>I am Anupriya Kumari</span>
        </div>
      </div>
      <div className="text-bottom">
        <div>Frontend Developer</div>
      </div>
    </div>
  );
};

export default Hero;

// please take a look around
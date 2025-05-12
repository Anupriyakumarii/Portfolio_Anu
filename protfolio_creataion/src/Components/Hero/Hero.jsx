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
    // <div className="animated-title">
    //   <div className="text-top">
    //     <div>
    //       <span>Hey,</span>
    //       <span>I am Anupriya Kumari</span>
    //     </div>
    //   </div>
    //   <div className="text-bottom">
    //     <div>Frontend Developer</div>
    //   </div>
    // </div>
    <>
      <section className="hero">
        <div className="hero-content">
          <h1>Hi, I'm Anupriya</h1>
          <p>I build beautiful and responsive web interfaces with React.</p>
          <p>
            Frontend Developer crafting smooth and responsive user experiences
            with React.
          </p>
          <div className="hero-buttons">
            <a href="#projects" className="btn primary">
              View My Work
            </a>
            <a href="#contact" className="btn secondary">
              Contact Me
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;

import "./Hero.css";
import { Typewriter } from "react-simple-typewriter";
import { useState } from "react";

const Hero = () => {
  return (
    <>
      <section className="hero" id="home">
        <div className="hero-content">
          <h1>
            Hi, I'm <span className="highlight">Anupriya Kumari</span>{" "}
            <span role="img" aria-label="wave">
              👋
            </span>
          </h1>

          <h2 className="typewriter-text">
            <Typewriter
              words={[
                "Frontend Developer.",
                "React Enthusiast.",
                "UI/UX Focused.",
              ]}
              loop={0} // 0 = infinite
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </h2>
          <p className="description">
            I build sleek, responsive web interfaces with React — blending clean
            design, accessibility, and performance for modern user experiences.
          </p>

          <div className="hero-buttons">
            <a
              href="https://drive.google.com/file/d/13ooQd5rhtpitE_aIKfsL6avkAgh5qYkD/view?usp=sharing"
              download="Anupriya_Resume.pdf"
              target="_blank"
              className="btn primary"
            >
              Download Resume
            </a>
            <a href="#contact" className="btn secondary">
              Let's Connect
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;

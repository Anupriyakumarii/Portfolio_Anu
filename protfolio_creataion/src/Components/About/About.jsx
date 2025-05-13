import image from "./../../assets/profile_img.png";
import "./About.css";
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaGitAlt,
  FaNodeJs,
} from "react-icons/fa";

function About() {
  return (
    <>
      <section className="about-section" id="About">
        <div className="about-container">
          <div className="about-image">
            <img src={image} alt="Anupriya" />
          </div>
          <div className="about-content">
            <h2>👩‍💻 About Me</h2>
            <p>
              I’m a passionate <strong>Frontend Developer</strong> with over{" "}
              <strong>2 years</strong> of experience at{" "}
              <strong>Tata Consultancy Services (TCS)</strong>. I’ve
              successfully delivered scalable solutions for clients like{" "}
              <strong>Zebra Technologies</strong>.
            </p>
            <p>
              My expertise lies in building <strong>responsive</strong>,{" "}
              <strong>accessible</strong> user interfaces using{" "}
              <strong>React</strong>, <strong>JavaScript</strong>, and modern{" "}
              <strong>CSS frameworks</strong> like Tailwind and SASS. I thrive
              in <strong>agile teams</strong>, where I contribute clean,
              maintainable code and innovative UI/UX ideas.
            </p>
            <p>
              🚀 Let's build fast, elegant, and user-friendly applications
              together.
            </p>

            <div className="skills-section">
              <div className="skill">
                <FaHtml5 className="skill-icon html" />
                <span>HTML5</span>
              </div>
              <div className="skill">
                <FaCss3Alt className="skill-icon css" />
                <span>CSS3</span>
              </div>
              <div className="skill">
                <FaJsSquare className="skill-icon js" />
                <span>JavaScript</span>
              </div>
              <div className="skill">
                <FaReact className="skill-icon react" />
                <span>React</span>
              </div>
              <div className="skill">
                <FaNodeJs className="skill-icon node" />
                <span>Node.js</span>
              </div>
              <div className="skill">
                <FaGitAlt className="skill-icon git" />
                <span>Git</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;

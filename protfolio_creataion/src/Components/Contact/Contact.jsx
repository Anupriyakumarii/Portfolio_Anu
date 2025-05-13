// import React from "react";
// import "./Footer.css";
// import { FaInstagram } from "react-icons/fa6";
// import { FaXTwitter } from "react-icons/fa6";
// import { FaLinkedin } from "react-icons/fa";
// import { FaFacebook } from "react-icons/fa";
// import { FaGithub } from "react-icons/fa";

// const Footer = () => {
//   return (
//     <>
//       <footer className="footer_section" id="contact">
//         <div className="container_one">
//           <span className="social_network">
//             Get connected with us on social networks:
//           </span>
//         </div>
//         <div className="social_icons">
//           <FaInstagram color="white" className="icons_social" />
//           <FaXTwitter color="white" className="icons_social" />
//           <FaLinkedin color="white" className="icons_social" />
//           <FaGithub color="white" className="icons_social" />
//           <FaFacebook color="white" className="icons_social" />
//         </div>
//       </footer>
//     </>
//   );
// };

// export default Footer;

import React from "react";
import {
  FaInstagram,
  FaXTwitter,
  FaLinkedin,
  FaGithub,
  FaFacebook,
} from "react-icons/fa6";
import "./Contact.css";

const Contact = () => {
  return (
    <section id="Contact" className="contact_section">
      <div className="contact_container">
        <h2>Contact Me</h2>
        <p>
          Open to new opportunities, creative ideas, or tech discussions — let’s
          connect.
        </p>

        {/* Social Icons */}
        <div className="social_icons">
          <a
            href="https://www.linkedin.com/in/anupriya-kumari-1473171a5/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/Anupriyakumarii"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaXTwitter />
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook />
          </a>
        </div>

        {/* Contact Form */}
        <form
          className="contact_form"
          action="https://formspree.io/f/xzzrjrwj"
          method="POST"
        >
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="4"
            placeholder="Your Message"
            required
          ></textarea>
          <input
            type="hidden"
            name="_redirect"
            value="https://yourwebsite.com/thank-you"
          />

          <button type="submit">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;

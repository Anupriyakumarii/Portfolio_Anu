import React from 'react'
import "./Footer.css";
import { FaInstagram } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <>
    <footer className='footer_section'>
      <div className='container_one'>
        <span className='social_network'>Get connected with us on social networks:</span>
      </div>
      <div className='social_icons'>
        <FaInstagram color='white' className='icons_social'/>
        <FaXTwitter color='white' className='icons_social'/>
        <FaLinkedin color='white' className='icons_social'/>
        <FaGithub color='white' className='icons_social'/>
        <FaFacebook color='white' className='icons_social'/>
      </div>
    </footer>
    </>
    
  )
}

export default Footer;


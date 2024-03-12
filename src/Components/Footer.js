import React from 'react';
import {FaGithub, FaLinkedin} from "react-icons/fa";
import {GrMail} from "react-icons/gr";
import {SiLeetcode} from "react-icons/si"

const Footer = () => {
  return (
    <footer>
      <h4>Developed by Himanshu Yadav</h4>
      <h4>Copyright &copy; 2023 HY</h4>
      <div className='footerLinks'>
        <a href="https://github.com/Himanshuyadavv" target='_blank'><FaGithub/></a>
        <a href="https://www.linkedin.com/in/himanshuyadavv/" target='_blank'><FaLinkedin/></a>
        <a href='mailTo:himanshu05032003@gmail.com' target='_blank'><GrMail/></a>
        <a href="https://leetcode.com/HimanshuYadavv/" target="_blank"><SiLeetcode/></a>
      </div>
    </footer>
  )
}

export default Footer
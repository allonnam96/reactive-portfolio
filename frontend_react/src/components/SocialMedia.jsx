import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const SocialMedia = () => (
  <div className="app__social">
    <a
      href="https://github.com/allonnam96"
      target="_blank"
      rel="noopener noreferrer"
    >
      <div>
        <FaGithub />
      </div>
    </a>
    <a
      href="https://www.linkedin.com/in/allonnam/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <div>
        <FaLinkedin />
      </div>
    </a>
  </div>
);

export default SocialMedia;

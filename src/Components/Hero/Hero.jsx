import React, { useState, useEffect } from "react";
import "./Hero.css";
import pcImage from "../Assets/pc.png";
import resumePDF from "../Assets/Rohit_Resume.pdf";
import {
  FaInstagram,
  FaLinkedin,
  FaFacebook,
  FaGithub,
} from "react-icons/fa";

const words = [
  "Web Developer...",
  "Python Developer...",
  "UI/UX Designer...",
];

const Typewriter = () => {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [speed, setSpeed] = useState(150);

  useEffect(() => {
    const handleTyping = () => {
      const currentWord = words[wordIndex];
      if (isDeleting) {
        setText(currentWord.substring(0, text.length - 1));
        setSpeed(30);
      } else {
        setText(currentWord.substring(0, text.length + 1));
        setSpeed(100);
      }

      if (!isDeleting && text === currentWord) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % words.length);
      }
    };

    const timer = setTimeout(handleTyping, speed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, speed, wordIndex]);

  return <span className="typewriter-text">{text}</span>;
};

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-left">
        <h1>
          Hey👋, <br /> I'm Rohit
        </h1>
        <p className="hero-description">
          A Passionate <Typewriter />
        </p>

        {/* ✅ Download CV Link */}
        <a
          href={resumePDF}
          download="Rohit_Resume.pdf"
          className="download-cv-btn"
        >
          Download CV
        </a>

        <div className="social-icons">
          <FaInstagram
            className="social-icon"
            color="#E1306C"
            size={30}
            onClick={() =>
              window.open("https://www.instagram.com/rohitshinde_045?igsh=MWR5bGVtdDA2dHp1OQ== ")
            }
          />
          <FaLinkedin
            className="social-icon"
            color="#0A66C2"
            size={30}
            onClick={() =>
              window.open("https://www.linkedin.com/in/rohitshinde045")
            }
          />
          <FaFacebook
            className="social-icon"
            color="#1877F2"
            size={30}
            onClick={() =>
              window.open("https://www.facebook.com/profile.php?id=100049718962769")
            }
          />
          <FaGithub
            className="social-icon"
            color="#333"
            size={30}
            onClick={() =>
              window.open("https://github.com/iamro045")
            }
          />

        </div>
      </div>

      <div className="hero-right">
        <img src={pcImage} alt="Illustration of laptop with code" />
      </div>
    </section>
  );
};

export default Hero;

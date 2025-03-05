import React from "react";
import "./css/About.css";

const About: React.FC = () => {
  return (
    <div className="about-page">
      <h2>About Magandang Balita</h2>
      <br />
      <section className="about-description">
        <p>
          Magandang Balita is a simple website you can visit every morning to
          brighten your day with uplifting news from the Philippines, nothing
          more.
        </p>
      </section>
      <br />
      <section className="about-tech">
        <h2>Technology Used</h2>
        <img
          src="/src/assets/tech_stack.png"
          alt="Tech Stack"
          className="tech-stack-img"
        />
      </section>
    </div>
  );
};

export default About;

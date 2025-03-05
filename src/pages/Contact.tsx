import React from "react";
import "./css/Contact.css";

const Contact: React.FC = () => {
  return (
    <div className="contact-page">
      <section className="about-me">
        <h2>About Me</h2>
        <p>
          Hi, I'm Kevin, a Data Engineer with a passion for learning new things.
          Although I have no professional experience in web development, I've
          always been interested in creating websites. This project is my way of
          diving into front-end development with React and TypeScript.
          <br />
          <br /> Thank you for visiting my website! 😊
        </p>
      </section>
      <section className="contact">
        <h2>Contact</h2>
        <p>Feel free to reach out to me via:</p>
        <div className="contact-icons">
          <a
            href="mailto:kevinesg.dev@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            arial-label="Gmail"
          >
            <img src="/src/assets/icon_gmail.png" alt="Gmail icon" />
          </a>
          <a
            href="https://www.linkedin.com/in/kevinesg"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <img src="/src/assets/icon_linkedin.png" alt="LinkedIn icon" />
          </a>
          <a
            href="https://github.com/kevinesg"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <img src="/src/assets/icon_github.png" alt="GitHub Icon" />
          </a>
        </div>
      </section>
      <section className="donate">
        <h2>Donate</h2>
        <p>
          If you would like to support my work, you can donate via PayPal or
          InstaPay:
        </p>
        <div className="donate-links">
          <a
            href="https://www.paypal.com/paypalme/kevinesg"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/src/assets/icon_paypal.svg" alt="PayPal icon" />
          </a>
          <div className="qr-code">
            <img src="/src/assets/icon_instapay.png" alt="InstaPay QR Code" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;

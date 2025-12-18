import React from "react";
import { Container } from "react-bootstrap";
import { FaGithub } from "react-icons/fa";
import "../style/footer.css";

const Footer = () => {
  return (
    <footer className="footer-minimal">
      <Container className="footer-content">
        <span className="footer-left">
          © {new Date().getFullYear()} MC Films
        </span>

        <span className="footer-center">
          Powered by{" "}
          <a
            href="https://www.themoviedb.org/"
            target="_blank"
            rel="noreferrer"
          >
            TMDB
          </a>
        </span>
        <div>
          <a
            href="https://github.com/hengkizulfikri"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub size={23} />
          </a>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;

import React, { useState } from "react";
import { Navbar, Container, Nav, Image } from "react-bootstrap";
import { CgMenuRightAlt } from "react-icons/cg";
import { FaTimes } from "react-icons/fa";
import "../style/navigationBar.css";

const NavigationBar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Navbar variant="dark" className="custom-navbar">
        <Container>
          <Navbar.Brand href="/">
            <Image src="/movie.png" width="30" height="30" /> MC Films
          </Navbar.Brand>

          {/* Desktop Menu */}
          <Nav className="d-none d-md-flex">
            <Nav.Link href="#tentang">Tentang</Nav.Link>
            <Nav.Link href="#trending">Trending</Nav.Link>
            <Nav.Link href="#upcoming">Upcoming</Nav.Link>
          </Nav>

          {/* Mobile Toggle */}
          <div className="menu-toggle d-md-none" onClick={() => setOpen(!open)}>
            {open ? <FaTimes size={28} /> : <CgMenuRightAlt size={32} />}
          </div>
        </Container>
      </Navbar>

      {/* Mobile Slide Menu */}
      <div className={`mobile-menu ${open ? "active" : ""}`}>
        <a href="#tentang" onClick={() => setOpen(false)}>
          Tentang
        </a>
        <a href="#trending" onClick={() => setOpen(false)}>
          Trending
        </a>
        <a href="#upcoming" onClick={() => setOpen(false)}>
          Upcoming
        </a>
      </div>

      {/* Overlay */}
      {open && <div className="overlay" onClick={() => setOpen(false)}></div>}
    </>
  );
};

export default NavigationBar;

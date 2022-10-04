import Button from "react-bootstrap/Button";
import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function Navbarnew() {
  return (
    <Navbar collapseOnSelect expand="lg">
      <Navbar.Brand href="#home">
        <img
          src="./images/liquid-logo-02.png"
          width={200}
          height={150}
          alt="logo"
        ></img>{" "}
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#aboutus">About us</Nav.Link>
          <Nav.Link href="#nfts">NFTs </Nav.Link>
          <Nav.Link href="#perks">Perks </Nav.Link>
          <Nav.Link href="#team">Team </Nav.Link>
        </Nav>
        <Nav>
          <Button variant="light" className="btn-style">
            MINT
          </Button>{" "}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Navbarnew;

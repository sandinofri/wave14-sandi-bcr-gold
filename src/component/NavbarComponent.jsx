import React from "react";
import "../style/navbar.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';

const NavbarComponent = () => {
  return (
    <>
       {['lg'].map((expand) => (
        <Navbar key={expand} expand={expand} className="bg-transparent fixed-top mb-3">
          <Container className=" ps-0" >
            <Navbar.Brand href="#"><div className="logo"></div></Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  BCR
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 link-container">
                  <Nav.Link href="#action1">Our Services</Nav.Link>
                  <Nav.Link href="#action2">Why Us</Nav.Link>
                  <Nav.Link href="#action2">Testimonial</Nav.Link>
                  <Nav.Link href="#action2">FAQ</Nav.Link>
                 
                </Nav>
               
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
};

export default NavbarComponent;

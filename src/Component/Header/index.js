import React from 'react';
import { Navbar, Nav } from "react-bootstrap";
import { HeaderSection, Overlay, CoverText } from './style.js';



const Header = () => {
    return (
        <HeaderSection>
        <Overlay>
            <div className="container-fluid">

                <Navbar expand="lg">
                    <Navbar.Brand href="#home">
                        <img src="https://cdn-expa.aiesec.org/assets/images/aiesec-logo-white-blue.svg" 
                        className="aiesec-logo" alt="Aiesec Logo" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="#home">About us</Nav.Link>
                            <Nav.Link className="border-right-white" href="#">Help</Nav.Link>
                            <Nav.Link href="#">For Employers</Nav.Link>
                            <Nav.Link className="btn-nav-link" href="#">Search</Nav.Link>
                            <Nav.Link href="#">Sign Up</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>

                <CoverText>
                    <p>Your experience begins here...</p>
                </CoverText>
            </div>
        </Overlay>
    </HeaderSection>
    )
}

export default Header;
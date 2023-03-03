import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Navigation = () => {
    return (
        <Navbar bg="light" variant="light">
        <Container>
          <Nav className="m-auto">
            <Nav.Link href="/">About</Nav.Link>
            <Nav.Link href="/portfolio">Portfolio</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
            <Nav.Link href="/resume">Resume</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
        // <div>
        //     <ul>
        //         <li><a href="/">About</a></li>
        //         <li><a href="/portfolio">Portfolio</a></li>
        //         <li><a href="/contact">Contact</a></li>
        //         <li><a href="/resume">Resume</a></li>
        //     </ul>
        // </div>
    )
}

  export default Navigation;
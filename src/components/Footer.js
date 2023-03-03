import React from 'react';
import Nav from 'react-bootstrap/Nav';

const Footer = () => {
    return (
      <Nav className="fixed-bottom d-flex justify-content-center" activeKey="/about">
        <Nav.Item>
          <Nav.Link href="https://github.com/VisualViolet" target="_blank">Github</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="https://www.linkedin.com/in/savannah-b-miller/" target="_blank">LinkedIn</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="https://twitter.com/floralgathering" target="_blank">Twitter</Nav.Link>
        </Nav.Item>
      </Nav>
    )
  };

  export default Footer;
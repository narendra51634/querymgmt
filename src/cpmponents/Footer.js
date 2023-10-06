import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Footer() {
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container >
                <p className='center'>Copyright @ 2023</p>
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#link">Link</Nav.Link>
            </Container>
        </Navbar>

    );

}


export default Footer;
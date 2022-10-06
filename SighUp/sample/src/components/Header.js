import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
const Header = () => {
    return (
        <div>
            <Navbar bg="light" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">HDFC LIFE</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#features">Features</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    )
}
export default Header
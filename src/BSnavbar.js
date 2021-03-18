import React from 'react'
import Navbar from "react-bootstrap/Navbar"
import Nav from 'react-bootstrap/Nav'
import 'bootstrap/dist/css/bootstrap.min.css'

const BSnavbar = () => {
    const style = {backgroundColor:"#393e46", boxShadow: "0 25px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"}
    return (
        <>
            <Navbar bg="" variant="" expand="lg" fixed="top" style={{color:"#00adb5",backgroundColor:"#393e46",}}>
              <Navbar.Brand href="#home" style={{color:'#00adb5'}} >React-Bootstrap</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav"  />
              <Navbar.Collapse id="basic-navbar-nav"  >
                <Nav className="mr-auto"  >
                  <Nav.Link href="#home"  style={{color:"#00adb5",}} >Home</Nav.Link>
                  <Nav.Link href="#link"  style={{color:"#00adb5",}} >Link</Nav.Link>
                  
                </Nav>
              </Navbar.Collapse>
            </Navbar>
            
        </>
    )
}

export default BSnavbar

import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Nav,Navbar} from 'react-bootstrap';


class Navbarmenu extends Component{
    render(){
        return(
        <Navbar className="color-nav" collapseOnSelect expand="lg">
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
        <Nav.Link href="#features"></Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link href="#about" onclick="myFunction()">About</Nav.Link>
    
          <Nav.Link href="#skills">Skills</Nav.Link>
        </Nav>
        </Navbar.Collapse>
        </Navbar> 
        )
    };
}

export default Navbarmenu
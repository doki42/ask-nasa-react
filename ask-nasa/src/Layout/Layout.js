import {GetPic} from "../services/ApiRequest";
import {Container, Nav, Navbar, NavLink} from "react-bootstrap";
import NavbarCollapse from "react-bootstrap/NavbarCollapse";


export function Layout(){
    return (
        <div>
            <Navmenu/>
            <div>
                <GetPic/>
            </div>
        </div>
    )
}

function Navmenu(){
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="/">Home</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <NavbarCollapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                    <NavLink href="/">Home</NavLink>
                        <NavLink href="#Gallery">Gallery</NavLink>
                    </Nav>
                </NavbarCollapse>

            </Container>
        </Navbar>
    )
}
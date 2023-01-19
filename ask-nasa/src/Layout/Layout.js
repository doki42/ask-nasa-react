import {Container, Nav, Navbar} from "react-bootstrap";
import NavbarCollapse from "react-bootstrap/NavbarCollapse";
import {Outlet} from "react-router-dom";


export function Layout(){
    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Container fluid={"md"}>
                    <Navbar.Brand href="/">Home</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <NavbarCollapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href='/'>Home</Nav.Link>
                            <Nav.Link href='/Gallery'>Gallery</Nav.Link>
                        </Nav>
                    </NavbarCollapse>

                </Container>
            </Navbar>
            <div>
                <Outlet/>
            </div>
        </div>
    )
}


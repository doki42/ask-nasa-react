import {Container, Nav, Navbar} from "react-bootstrap";
import NavbarCollapse from "react-bootstrap/NavbarCollapse";
import {Outlet, Link} from "react-router-dom";


export function Layout(){
    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Container fluid={"md"}>
                    <Navbar.Brand to="/">Home</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <NavbarCollapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Link to='/'>Home</Link>
                            <Link to='/Gallery'>Gallery</Link>
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


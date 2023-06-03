import { Container, Nav,Navbar as NavbarBS } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./NavBar.css";
export function NavBar(){
    return (
        <Container>
            <Nav>
                <Nav.Link to="/search" as={NavLink} className="nav-link">
                    Search
                </Nav.Link>
                <Nav.Link to="/favorites" as={NavLink} className="nav-link">
                    Favorites
                </Nav.Link>
            </Nav>
        </Container>
    );
}
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Buttons from "../Button/Button";
import Logo from "../../assets/images/Logo.jpg";

function NavScroll() {
  return (
    <Navbar expand="lg">
      <Container>
        <img src={Logo} alt="Logo" />
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse className="ms-5" id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="#action1">Crytocurrency</Nav.Link>
            <Nav.Link href="#action2"> Exchanges</Nav.Link>
            <Nav.Link href="#action2"> Watchlist</Nav.Link>
            <Nav.Link href="#action3"> NFT</Nav.Link>
            <Nav.Link href="#action4"> Portfolio</Nav.Link>
            <NavDropdown title="Product" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Buttons text="Log In" />
          <Buttons text="Sing Up" color="color" />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScroll;

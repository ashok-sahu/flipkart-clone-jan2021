import React from "react";
import { Nav, Navbar, Container } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../redux/actions";

const Header = ({ history }) => {
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const handlelogout = () => {
    dispatch(logout());
  };
  const renderLoggedInLinks = () => {
    return (
      <Nav>
        <li className="nav-item">
          <span
            className="nav-link"
            onClick={handlelogout}
            style={{ cursor: "pointer" }}
          >
            LogOut
          </span>
        </li>
      </Nav>
    );
  };

  const renderNonLoggedInLinks = () => {
    return (
      <Nav>
        <li className="nav-item">
          <NavLink to="/signin" className="nav-link">
            SignIn
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/signup" className="nav-link">
            SignUp
          </NavLink>
        </li>
      </Nav>
    );
  };

  return (
    <Navbar
      collapseOnSelect
      fixed="top"
      expand="lg"
      bg="dark"
      variant="dark"
      style={{ zIndex: 1 }}
    >
      <Container fluid>
        <Link to="/" className="navbar-brand">
          Admin Dashboard
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto"></Nav>
          {auth.authenticate ? renderLoggedInLinks() : renderNonLoggedInLinks()}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;

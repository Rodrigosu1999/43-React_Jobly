import React, {useContext} from "react";
import "../styles/NavBar.css";
import { NavLink } from "react-router-dom";
import { Navbar, Nav, NavItem } from "reactstrap";
import ItemsContext from "./ItemsContext";

//A different Nav Bar will display to the user if he/she is logged in or not.
//Logged in: All app features will be in the user's reach
// Logged out: The user will only be able to log in or register
function NavBar() {
  const { token, currUser } = useContext(ItemsContext);
  

  return (
    <div>
      <Navbar expand="md">
        <NavLink exact to="/" className="navbar-brand">
          Jobly
        </NavLink>
        {token ? (
          <Nav className="ml-auto" navbar>
          <NavItem>
            <NavLink to="/companies">Companies</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/jobs">Jobs</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/profile">{currUser.username}</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/logout">Logout</NavLink>
          </NavItem>
        </Nav>
        ) : (
          <Nav className="ml-auto" navbar>
          <NavItem>
            <NavLink to="/login">Login</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/register">Register</NavLink>
          </NavItem>
        </Nav>
        )}
      </Navbar>
    </div>
  );
}

export default NavBar;

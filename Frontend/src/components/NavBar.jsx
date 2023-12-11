import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router-dom";
import "../assets/style/demo.css";

const NavBar = ({ searchText, SetSearchText }) => {
  return (
    <>
      {
        <Navbar bg="dark" variant="dark" className="nav">
          <Container>
            <Nav className="me-auto">
              <NavLink
                to="/show"
                className="text-decoration-none text-light mx-5"
              >
                Show Data
              </NavLink>
            </Nav>
            <Nav className="me-auto">
              <NavLink
                to="/chat"
                className="text-decoration-none text-light mx-5"
              >
                Chatbot
              </NavLink>
            </Nav>
            <form class="d-flex">
              <input
                class="form-control me-2"
                type="search"
                placeholder="Search Something.."
                aria-label="Search"
                value={searchText}
                onChange={(e) => SetSearchText(e.target.value)}
              />
            </form>
          </Container>
        </Navbar>
      }
    </>
  );
};

export default NavBar;

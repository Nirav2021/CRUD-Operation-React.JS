import React from "react";
import { Link, Outlet } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Navbar } from "react-bootstrap";

function Navigation(props) {
  return (
    <div className="navigation">
      <Navbar className="navigation-title">
        <Container>
          <Link className="navbar-brand">Basic CRUD with React.JS</Link>
        </Container>
      </Navbar>
      <Outlet />
    </div>
  );
}

export default Navigation;

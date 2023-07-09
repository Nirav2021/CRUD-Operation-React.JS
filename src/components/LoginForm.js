import React, { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

import classes from "./css/LoginForm.module.css";
import Wrapper from "./Helpers/Wrapper";
import Footer from "./Footer";

function LoginForm(props) {
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const navigate = useNavigate();

  function loginHandler(event) {
    event.preventDefault();

    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    var users = JSON.parse(localStorage.getItem("users"));

    const userExists = users.filter(
      (u) => u.email === enteredEmail && u.password === enteredPassword
    );

    if (userExists.length > 0) {
      emailInputRef.current.value = "";
      passwordInputRef.current.value = "";

      navigate("/dashboard");
    } else {
      alert("Invalid credentials");
    }
  }

  return (
    <Wrapper>
      <Container className={classes.myContainer}>
        <Row>
          <Col>
            <h1 className="text-center mt-3 mb-3">Login Page</h1>
            <Form onSubmit={loginHandler}>
              <Form.Group className="mt-3 mb-3" controlId="formBasicEmail">
                <Form.Label>Email Address</Form.Label>
                <Form.Control
                  required
                  type="email"
                  placeholder="Please Enter Email Address"
                  ref={emailInputRef}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  required
                  type="password"
                  placeholder="Please Enter Password"
                  ref={passwordInputRef}
                />
              </Form.Group>
              <Button type="submit" variant="primary">
                Login
              </Button>
              <Link as={Link} to="/register" className="text-end register-link">
                Don't have an account? <b>Click here to Register</b>
              </Link>
            </Form>
          </Col>
        </Row>
      </Container>
      <br />
      <Footer />
    </Wrapper>
  );
}

export default LoginForm;

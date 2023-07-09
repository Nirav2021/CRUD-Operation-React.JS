import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

import classes from "./css/RegistrationForm.module.css";
import Footer from "./Footer";
import Wrapper from "./Helpers/Wrapper";

function RegistrationForm(props) {
  const [enteredFirstname, setEnteredFirstname] = useState("");
  const [enteredLastname, setEnteredLastname] = useState("");
  const [enteredPhone, setEnteredPhone] = useState("");
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  const [enteredConfirmedPassword, setEnteredConfirmedPassword] = useState("");

  var users = JSON.parse(localStorage.getItem("users"));

  function firstnameChangeHandler(event) {
    setEnteredFirstname(event.target.value);
  }

  function lastnameChangeHandler(event) {
    setEnteredLastname(event.target.value);
  }

  function phoneChangeHandler(event) {
    setEnteredPhone(event.target.value);
  }
  function emailChangeHandler(event) {
    setEnteredEmail(event.target.value);
  }

  function passwordChangeHandler(event) {
    setEnteredPassword(event.target.value);
  }

  function confirmPasswordChangeHandler(event) {
    setEnteredConfirmedPassword(event.target.value);
  }

  function resetForm() {
    setEnteredFirstname("");
    setEnteredLastname("");
    setEnteredPhone("");
    setEnteredEmail("");
    setEnteredPassword("");
    setEnteredConfirmedPassword("");
  }

  const navigate = useNavigate();

  function registrationHandler(event) {
    event.preventDefault();

    //CREATE
    let usersCount = Math.random();
    // let usersCount = Math.random().toFixed(10);//to generate random number upto 10 decimal place

    if (users === null) {
      users = [];
      // usersCount = 0;
    }
    // else {
    //   usersCount = users.length;
    // }

    const user = {
      id: usersCount,
      firstname: enteredFirstname,
      lastname: enteredLastname,
      phone: enteredPhone,
      email: enteredEmail,
      password: enteredPassword,
    };

    const userExists = users.filter((u) => u.email === enteredEmail);

    if (enteredPassword === enteredConfirmedPassword) {
      if (userExists.length === 0) {
        users = [...users, user];
        localStorage.setItem("users", JSON.stringify(users));
        resetForm();
        alert("Registered Successfully");
        navigate("/");
      } else {
        alert("Registeration Failed");
      }
    }
  }

  return (
    <Wrapper>
      <Container className={classes.myContainer}>
        <Row>
          <Col>
            <h1 className="text-center mt-3 mb-3">Create a new account</h1>
            <Form onSubmit={registrationHandler}>
              <Form.Group className="mt-3 mb-3" controlId="formFirstName">
                <Form.Label>First Name</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Enter First Name"
                  value={enteredFirstname}
                  onChange={firstnameChangeHandler}
                />
              </Form.Group>

              <Form.Group className="mt-3 mb-3" controlId="formLastName">
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Enter Last Name"
                  value={enteredLastname}
                  onChange={lastnameChangeHandler}
                />
              </Form.Group>

              <Form.Group className="mt-3 mb-3" controlId="formPhone">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control
                  required
                  type="number"
                  placeholder="Enter Phone Number"
                  value={enteredPhone}
                  onChange={phoneChangeHandler}
                />
              </Form.Group>

              <Form.Group className="mt-3 mb-3" controlId="formBasicEmail">
                <Form.Label>Email Address</Form.Label>
                <Form.Control
                  required
                  type="email"
                  placeholder="Enter Email Address"
                  value={enteredEmail}
                  onChange={emailChangeHandler}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  required
                  type="password"
                  placeholder="Enter Password"
                  value={enteredPassword}
                  onChange={passwordChangeHandler}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control
                  required
                  type="password"
                  placeholder="Re-Enter Password"
                  value={enteredConfirmedPassword}
                  onChange={confirmPasswordChangeHandler}
                />
              </Form.Group>

              <Button type="submit" variant="primary">
                Register
              </Button>

              <Link as={Link} to="/" className="text-end login-link">
                Already have an account? <b> Click here to Login</b>
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

export default RegistrationForm;

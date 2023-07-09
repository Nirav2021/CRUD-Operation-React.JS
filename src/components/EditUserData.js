import React from "react";
// import { Link, useLocation, useNavigate, useParams } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
// import classes from "./css/EditUserData.module.css";
import "./css/EditUserData.css";

import Wrapper from "./Helpers/Wrapper";
import CSSTransition from "react-transition-group/CSSTransition";

const animationTiming = {
  enter: 400,
  exit: 1000,
};
function EditUserData(props) {
  return (
    <Wrapper>
      <CSSTransition
        mountOnEnter
        unmountOnExit
        in={props.show}
        timeout={animationTiming}
        classNames={{
          enter: "",
          enterActive: "ModalOpen",
          exit: "",
          exitActive: "ModalClosed",
        }}
      >
        <Container className="Modal editContainer border border-warning rounded-5">
          <Row>
            <Col>
              <h1 className="text-start mt-4 mb-4">Edit User Data</h1>
              <Form onSubmit={props.onSubmit} className="text-start">
                <Form.Group className="mt-3 mb-3" controlId="formFirstName">
                  <Form.Label>First Name</Form.Label>
                  <Form.Control
                    type="text"
                    defaultValue={props.defaultValueFirst}
                    ref={props.refFirst}
                  ></Form.Control>
                </Form.Group>

                <Form.Group className="mt-3 mb-3" controlId="formLastName">
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control
                    type="text"
                    defaultValue={props.defaultValueLast}
                    ref={props.refLast}
                  ></Form.Control>
                </Form.Group>

                <Form.Group className="mt-3 mb-3" controlId="formPhone">
                  <Form.Label>Phone Number</Form.Label>
                  <Form.Control
                    type="number"
                    defaultValue={props.defaultValuePhone}
                    ref={props.refPhone}
                  ></Form.Control>
                </Form.Group>

                <Button
                  type="submit"
                  variant="primary"
                  className="btn btn-warning"
                >
                  UPDATE
                </Button>
                <hr />
                <Button
                  variant="primary"
                  className="btn btn-success"
                  onClick={props.onClick}
                >
                  BACK
                </Button>
              </Form>
            </Col>
          </Row>
        </Container>
      </CSSTransition>
    </Wrapper>
  );
}
export default EditUserData;

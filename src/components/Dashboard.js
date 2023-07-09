import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Table, Button } from "react-bootstrap";
import classes from "./css/Dashboard.module.css";

import Wrapper from "./Helpers/Wrapper";
import EditUserData from "./EditUserData";
import Backdrop from "./Helpers/Backdrop";

function Dashboard(props) {
  const [initialState, newState] = useState(false);
  const [users, setUsers] = useState(JSON.parse(localStorage.getItem("users")));
  const navigate = useNavigate();
  const firstnameInputRef = useRef();
  const lastnameInputRef = useRef();
  const phoneInputRef = useRef();

  //Current date and time
  const now = new Date();
  const day = now.getDate();
  const month = now.getMonth() + 1;
  const year = now.getFullYear();
  const hour = now.getHours();
  const minute = now.getMinutes();
  const second = now.getSeconds();

  //DELETE
  function deleteUserHandler(id) {
    users.splice(id, 1);
    localStorage.setItem("users", JSON.stringify(users));
    setUsers([...users]);
  }

  //EDIT
  function editUserHandler(i) {
    window.myid = i; // it means var myid = i;
    window.firstname = users[i].firstname;
    window.lastname = users[i].lastname;
    window.phone = users[i].phone;
    newState(true);
  }

  let userid = window.myid;

  //UPDATE
  function updateDataHandler(event) {
    event.preventDefault();
    const newFirstname = firstnameInputRef.current.value;
    const newLastname = lastnameInputRef.current.value;
    const newPhone = phoneInputRef.current.value;
    //
    const newData = users.map((x) => {
      // console.log(x.id);
      if (x.id === users[userid].id) {
        return {
          ...x,
          firstname: newFirstname,
          lastname: newLastname,
          phone: newPhone,
        };
      }
      return x;
    });

    localStorage.setItem("users", JSON.stringify(newData));
    setUsers(JSON.parse(localStorage.getItem("users")));

    newState(false);
    alert("Updated Successfully");
  }

  //LOGOUT
  function logoutHandler() {
    navigate("/");
  }

  //BACK
  function dashboardViewHandler() {
    // navigate("/dashboard");
    newState(false);
  }
  return (
    <Wrapper>
      <Container className={`mt-4 ${classes.myContainer}`}>
        <h2 className="text-start text-center mt-3 mb-3">
          List of users (Last updated on {day}/{month}/{year} {hour}:{minute}:
          {second})
        </h2>

        <Table responsive bordered className="table-striped">
          <thead>
            <tr>
              <th>ID</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Phone Number</th>
              <th>Email</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody className="align-middle">
            {/* READ */}
            {users.map((item, i) => (
              <tr key={i}>
                <td>{i + 1}</td>
                <td>{item.firstname}</td>
                <td>{item.lastname}</td>
                <td>{item.phone}</td>
                <td>{item.email}</td>
                <td>
                  <Button
                    variant="primary"
                    className="m-1 btn btn-warning"
                    onClick={() => editUserHandler(i)}
                  >
                    Edit
                  </Button>
                  <Button
                    variant="danger"
                    className="m-1"
                    onClick={() => deleteUserHandler(i)}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
        <Button
          className="button-fix"
          variant="danger"
          onClick={() => logoutHandler()}
        >
          Logout
        </Button>
      </Container>

      <EditUserData
        show={initialState}
        onSubmit={updateDataHandler}
        defaultValueFirst={window.firstname}
        refFirst={firstnameInputRef}
        defaultValueLast={window.lastname}
        refLast={lastnameInputRef}
        defaultValuePhone={window.phone}
        refPhone={phoneInputRef}
        onClick={() => dashboardViewHandler()}
      />
      {initialState ? <Backdrop show /> : null}
    </Wrapper>
  );
}

export default Dashboard;

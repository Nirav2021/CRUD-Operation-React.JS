import React from "react";
import { Container } from "react-bootstrap";
// import classes from "./css/Footer.module.css";
import Wrapper from "./Helpers/Wrapper";

function Footer() {
  return (
    <Wrapper>
      <footer className="footer-color">
        <Container>
          <p>Made for Evolvision Technologies @2023</p>
        </Container>
      </footer>
    </Wrapper>
  );
}
export default Footer;

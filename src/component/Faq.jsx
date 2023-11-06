import React from "react";
import "../style/faq.css";
import { Container, Row, Col } from "react-bootstrap";
import { Accordion } from "react-bootstrap";
import { faq } from "../data/index";

const Faq = () => {
  return (
    <>
      <section className="faq" id="faq">
        <Container className=" faq-container">
          <Row>
            <Col lg="6">
              <h1>Frequently Asked Question</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
            </Col>
            <Col lg="6">
              <Accordion>
                {faq.map((data) => (
                  <Accordion.Item eventKey={data.id}>
                    <Accordion.Header>{data.header}</Accordion.Header>
                    <Accordion.Body>{data.desc}</Accordion.Body>
                  </Accordion.Item>
                ))}
              </Accordion>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Faq;

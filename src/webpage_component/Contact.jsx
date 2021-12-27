import React from "react";
import "./style.css";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Form, Button } from "react-bootstrap";
import emailjs from "emailjs-com";

const Contact = () => {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "gmail",
        "mywebsite_contact_page",
        e.target,
        "user_ZZHUyeeMX1AmQhztiqhC3"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();

    alert("sent");
  }
  return (
    <>
      <div id="contact_webpage">
        <div id="webpage_body">
          <div className="container">
            <h1 className="contact_heading">Contact</h1>
            <p className="contact_subline">For all enquiries, please email me using the form below.</p>
            <h3 className="form_upline">How can I help you?</h3>
            <Form onSubmit={sendEmail}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter name"
                  name="name"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  name="email"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Subject</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="subject"
                  name="subject"
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>Message</Form.Label>
                <Form.Control as="textarea" name="message" rows={3} />
              </Form.Group>
              <Button variant="primary" type="submit">
                Send Message
              </Button>
            </Form>
          </div>
        </div>
      </div>
    </>
  );
};
export default Contact;

import React, { useState } from "react";
import {
  Button,
  Card,
  Col,
  Container,
  Form,
  FormGroup,
  Row,
} from "react-bootstrap";

const Login = (props) => {
  const [creds, setCreds] = useState({ email: "", password: "" });
  const [validated, setValidated] = useState(false);
  const handleSubmit = (event) => {
    console.log("here");
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      setValidated(true);
      event.stopPropagation();
    } else {
      // props.login(email, password);

      if (props.auth) {
        window.location.href = "/";
      }
    }
  };
  return (
    <Container style={{ height: "95%" }} className="mt-4 mb-0" fluid>
      <Row className="justify-content-center align-items-center h-100">
        <Col md={5}>
          <Card>
            <Card.Body>
              <Form
                noValidate
                validated={validated}
                onSubmit={handleSubmit}
                className="w-100"
              >
                <Row>
                  <Col>
                    <FormGroup>
                      <Form.Label className="lead">Email ID</Form.Label>
                      <Form.Control
                        onChange={({ target: { value: email } }) =>
                          setCreds({ ...creds, email })
                        }
                        value={creds.email}
                        type="email"
                        required
                      />
                      <Form.Control.Feedback type="invalid">
                        Email ID is invalid
                      </Form.Control.Feedback>
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <FormGroup>
                      <Form.Label className="lead">Password</Form.Label>
                      <Form.Control
                        onChange={({ target: { value: password } }) =>
                          setCreds({ ...creds, password })
                        }
                        value={creds.password}
                        type="password"
                        required
                      />
                      <Form.Control.Feedback type="invalid">
                        Password is required
                      </Form.Control.Feedback>
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Button type="submit" size="lg" block variant="info">
                      LOGIN
                    </Button>
                  </Col>
                </Row>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;

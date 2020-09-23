import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { signin, authenticate, isAuthenticated } from "../auth/Index.js";
import { Jumbotron, Form, Button, Container, Col, Row } from "react-bootstrap";
import { Fade } from "react-reveal";

class Signin extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      error: "",
      redirectTo: false,
      loading: false,
    };
  }

  handleChange = (name) => (event) => {
    this.setState({ error: "" });
    this.setState({ [name]: event.target.value });
  };

  clickSubmit = (event) => {
    event.preventDefault();
    this.setState({ loading: true });
    const { email, password } = this.state;
    const user = {
      email,
      password,
    };
    console.log(user);

    signin(user).then((data) => {
      if (data.error) {
        this.setState({ error: data.error, loading: false });
      } else {
        authenticate(data, () => {
          this.setState({ redirectTo: true });
        });
      }
    });
  };

  signinForm = (email, password) => (
    <Fade top>
      <Container>
        <Row>
          <Col>
            <form style={{ fontFamily: "IBM Plex Serif" }}>
              <br />
              <Form>
                <Form.Group controlId="formGroupEmail">
                  <Form.Label>Email Address</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder=""
                    onChange={this.handleChange("email")}
                    value={email}
                  />
                </Form.Group>

                <Form.Group controlId="formGroupPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder=""
                    onChange={this.handleChange("password")}
                    value={password}
                  />
                </Form.Group>
                <Button
                  size="lg"
                  onClick={this.clickSubmit}
                  style={{ backgroundColor: "#6e6e6dff", border: "none" }}
                >
                  Submit
                </Button>
              </Form>
            </form>
          </Col>
        </Row>
      </Container>
    </Fade>
  );

  render() {
    const { email, password, error, redirectTo, loading } = this.state;
    if (redirectTo) {
      return <Redirect to={`/user/${isAuthenticated().user._id}`} />;
    }

    return (
      <div>
        <Jumbotron
          style={{
            height: "90vh",
            textAlign: "center",
            backgroundColor: "transparent",
          }}
        >
          <br />
          <h1>Sign In</h1>

          <div style={{ display: error ? "" : "none" }}>{error}</div>

          {loading ? (
            <div>
              <h2>Loading...</h2>
            </div>
          ) : (
            ""
          )}
          {this.signinForm(email, password)}
        </Jumbotron>
      </div>
    );
  }
}

export default Signin;

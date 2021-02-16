import React, { useState } from "react";
import { Container, Form, Button, Row, Col } from "react-bootstrap";
import { Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Layout, FormControl } from "../../components";
import { login } from "../../redux/actions";

const Signin = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const userLogin = (e) => {
    e.preventDefault();
    const user = {
      email,
      password,
    };
    dispatch(login(user));
  };

  if (auth.authenticate) {
    return <Redirect to="/" />;
  }

  return (
    <Layout>
      <Container>
        <Row style={{ marginTop: "100px" }}>
          <Col md={{ span: 6, offset: 3 }}>
            <Form onSubmit={userLogin}>
              <FormControl
                id="email"
                control="input"
                type="email"
                placeholder="Enter Your Email"
                label="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <FormControl
                id="password"
                control="input"
                type="password"
                placeholder="Enter Your Password"
                label="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};

export default Signin;

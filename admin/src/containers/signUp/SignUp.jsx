import React, { useState, useEffect } from "react";
import { Container, Button, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { Layout, FormControl } from "../../components";
import { Formik } from "../../hooks/useForm";
import { signup } from "../../redux/actions";

const SignUp = ({ history }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const auth = useSelector((state) => state.auth);
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!user.loading) {
      setFirstName("");
      setLastName("");
      setEmail("");
      setPassword("");
    }
  }, [user.loading]);

  const userSignup = (e) => {
    e.preventDefault();

    const user = {
      firstName,
      lastName,
      email,
      password,
    };

    dispatch(signup(user));
  };

  if (auth.authenticate) {
    return <Redirect to={`/`} />;
  }

  if (user.loading) {
    return <p>Loading...!</p>;
  }

  return (
    <Layout>
      <Container>
        {user.message}
        <Row style={{ marginTop: "100px" }}>
          <Col md={{ span: 6, offset: 3 }}>
            <Formik onSubmit={userSignup}>
              <Row>
                <Col md={6}>
                  <FormControl
                    id="firstName"
                    control="input"
                    type="text"
                    placeholder="First Name.."
                    name="firstName"
                    label="First Name"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                </Col>
                <Col md={6}>
                  <FormControl
                    id="lastName"
                    control="input"
                    type="text"
                    placeholder="Last Name.."
                    label="Last Name"
                    name="lastName"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </Col>
              </Row>
              <FormControl
                id="email"
                control="input"
                type="email"
                placeholder="Enter Your Email"
                label="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                name="email"
              />
              <FormControl
                id="password"
                control="input"
                type="password"
                placeholder="Enter Your Password"
                label="Password"
                value={password}
                name="password"
                onChange={(e) => setPassword(e.target.value)}
              />
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Formik>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};

export default SignUp;

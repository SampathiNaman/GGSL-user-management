import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import axios from "axios";
import { Form } from "react-bootstrap";
import { colors } from "../../styles/theme";
import { Background, StyledCard, LogoFrame, Logo, Title, LoginButton, ErrorMessage } from "./styledComponents";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const token = Cookies.get("authToken");
    if (token) {
      navigate("/users-list", { replace: true });
    }
  }, [navigate]);

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError("Email and Password are required.");
      return;
    }

    setError("");
    setLoading(true);

    try {
      const response = await axios.post("https://reqres.in/api/login", {
        email,
        password,
      });
      const { token } = response.data;
      Cookies.set("authToken", token);
      setLoading(false);
      navigate("/users-list", { replace: true });

    } catch (err) {
      setLoading(false);
      setError("Invalid email or password. Please try again.");
    }
  };

  return (
    <Background>
      <StyledCard>
        <LogoFrame>
          <Logo>UM</Logo>
        </LogoFrame>  
        <Title>Login to Your Account</Title>

        <Form onSubmit={handleLogin} className="mt-3">
          <Form.Group controlId="formEmail" className="mb-3">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{ borderColor: colors.accent}}
              required
            />
          </Form.Group>

          <Form.Group controlId="formPassword" className="mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{ borderColor: colors.accent}}
              required
            />
          </Form.Group>

          <LoginButton
            type="submit"
            variant="primary"
            disabled={loading}
            style = {{width: "100%"}}
          >
            {loading ? "Logging in..." : "Log In"}
          </LoginButton>

        {error && <ErrorMessage>{error}</ErrorMessage>}

        </Form>
      </StyledCard>
    </Background>
  );
}

export default Login;

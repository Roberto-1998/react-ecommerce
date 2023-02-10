import styled from "styled-components";
import { mobile } from "../responsive";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginError, loginSuccess } from "../redux/userRedux";
import { users } from "../data";
import { Link as LinkReact } from "react-router-dom";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/6984650/pexels-photo-6984650.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
      center/cover;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  padding: 20px;
  width: 25%;
  background-color: white;
  ${mobile({
    width: "75%",
  })}
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0;
  padding: 10px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  cursor: pointer;
  color: white;
  margin-bottom: 10px;
`;

const Link = styled(LinkReact)`
  margin: 5px 0;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
  color: black;
`;

const ErrorText = styled.p`
  color: red;
`;

const Login = () => {
  const [userName, setUserName] = useState("");
  const [password, setPasword] = useState("");
  const dispatch = useDispatch();

  const error = useSelector((state) => state.user.error);

  const handleClick = (e) => {
    e.preventDefault();

    let findUser = users.find(
      (user) => user.username === userName && user.password === password
    );

    if (findUser) {
      dispatch(loginSuccess(findUser));
    } else {
      dispatch(loginError("Something went wrong..."));
    }
  };

  return (
    <Container>
      <Wrapper>
        <Title>SIGN IN</Title>
        <Form>
          <Input
            placeholder="Username"
            onChange={(e) => setUserName(e.target.value)}
          />
          <Input
            placeholder="Password"
            type="password"
            onChange={(e) => setPasword(e.target.value)}
          />
          {error && <ErrorText>{error}</ErrorText>}
          <Button onClick={handleClick}>LOGIN</Button>
          <Link>DO NOT REMEMBER THE PASSWORD?</Link>
          <Link to={"/register"}>CREATE A NEW ACCOUNT</Link>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;

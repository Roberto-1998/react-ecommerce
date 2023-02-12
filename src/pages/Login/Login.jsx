import { useDispatch, useSelector } from "react-redux";

import useCreateLoginForm from "../../hooks/useCreateLoginForm";
import { useNavigate } from "react-router-dom";
import {
  Button,
  Container,
  ErrorText,
  Form,
  Input,
  Link,
  Title,
  Wrapper,
} from "./Login.styled";
import { loginError, loginSuccess } from "../../redux/userRedux";

const Login = () => {
  const {
    register,
    setError,
    formState: { isValid },
    reset,
    handleSubmit,
  } = useCreateLoginForm();
  const dispatch = useDispatch();
  const users = useSelector((state) => state.user.allUsers);
  const error = useSelector((state) => state.user.error);
  const navigate = useNavigate();

  const onSubmit = (data) => {
    const { username, passwordOne } = data;

    let findUser = users.find(
      (user) => user.username === username && user.passwordOne === passwordOne
    );

    if (findUser) {
      dispatch(loginSuccess(findUser));
      navigate("/", { replace: true });
      reset();
    } else {
      setError("root", { message: "Something went wrong..." });
      dispatch(loginError("Something went wrong..."));
    }
  };

  return (
    <Container>
      <Wrapper>
        <Title>SIGN IN</Title>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Input placeholder="username" {...register("username")} />
          <Input
            placeholder="Password"
            type="password"
            {...register("passwordOne")}
          />
          {!isValid && <ErrorText>{error}</ErrorText>}
          <Button type="submit">LOGIN</Button>
          <Link>DO NOT REMEMBER THE PASSWORD?</Link>
          <Link to={"/register"}>CREATE A NEW ACCOUNT</Link>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;

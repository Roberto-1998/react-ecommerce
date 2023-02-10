import styled from "styled-components";
import { mobile } from "../responsive";
import useCreateForm from "../hooks/useCreateForm";
import { users } from "../data";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginSuccess } from "../redux/userRedux";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/6984661/pexels-photo-6984661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
      center;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  padding: 20px;
  width: 40%;
  background-color: white;
  ${mobile({
    width: "75%",
  })}
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
  ${mobile({
    fontSize: "20px",
  })}
`;
const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
  ${mobile({
    flexDirection: "column",
  })}
`;

const InputBox = styled.div`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0 0;
`;

const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  cursor: pointer;
  color: white;
`;

const ErrorText = styled.p`
  color: red;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
`;

const Register = () => {
  const {
    register,
    formState: { errors },
    reset,
    handleSubmit,
  } = useCreateForm();

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const onSubmit = (data) => {
    let user = { ...data };

    users.push(user);

    dispatch(loginSuccess(user));

    navigate("/", { replace: true });

    reset();
  };

  return (
    <Container>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <InputBox>
            <Input placeholder="Name" {...register("name")} />
            {errors.name && <ErrorText>{errors.name.message}</ErrorText>}
          </InputBox>

          <InputBox>
            <Input placeholder="Last Name" {...register("lastName")} />
            {errors.lastName && (
              <ErrorText>{errors.lastName.message}</ErrorText>
            )}
          </InputBox>

          <InputBox>
            <Input placeholder="Email" {...register("email")} />
            {errors.email && <ErrorText>{errors.email.message}</ErrorText>}
          </InputBox>

          <InputBox>
            <Input placeholder="Username" {...register("username")} />
            {errors.username && (
              <ErrorText>{errors.username.message}</ErrorText>
            )}
          </InputBox>

          <InputBox>
            <Input placeholder="Password" {...register("passwordOne")} />
            {errors.passwordOne && (
              <ErrorText>{errors.passwordOne.message}</ErrorText>
            )}
          </InputBox>

          <InputBox>
            <Input
              placeholder="Confirm Password"
              {...register("passwordTwo")}
            />
            {errors.passwordTwo && (
              <ErrorText>{errors.passwordTwo.message}</ErrorText>
            )}
          </InputBox>

          <Agreement>
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </Agreement>
          <Button>CREATE</Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;

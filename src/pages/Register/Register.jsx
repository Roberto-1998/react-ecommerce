import useCreateForm from "../../hooks/useCreateForm";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { register as registerUser } from "../../redux/userRedux";
import {
  Agreement,
  Button,
  Container,
  ErrorText,
  Form,
  Input,
  InputBox,
  Title,
  Wrapper,
} from "./Register.styled";

const Register = () => {
  const {
    register,
    formState: { errors },
    reset,
    handleSubmit,
    setError,
  } = useCreateForm();

  const users = useSelector((state) => state.user.allUsers);

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const onSubmit = (data) => {
    let user = { ...data };

    console.log(user);

    let isUserRegistered = users.find(
      (item) => item.username === user.username
    );

    if (isUserRegistered) {
      setError(
        "username",
        { type: "focus", message: "Username is already taken" },
        { shouldFocus: true }
      );
    } else {
      dispatch(registerUser(user));
      navigate("/", { replace: true });
      reset();
    }
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

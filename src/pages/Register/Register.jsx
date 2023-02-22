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
import { useTranslation } from "react-i18next";

const Register = () => {
  const {
    register,
    formState: { errors },
    reset,
    handleSubmit,
    setError,
  } = useCreateForm();

  const users = useSelector((state) => state.user.allUsers);

  const [t] = useTranslation("register");

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
        <Title>{t("create")}</Title>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <InputBox>
            <Input placeholder={t("name")} {...register("name")} />
            {errors.name && <ErrorText>{errors.name.message}</ErrorText>}
          </InputBox>

          <InputBox>
            <Input placeholder={t("last")} {...register("lastName")} />
            {errors.lastName && (
              <ErrorText>{errors.lastName.message}</ErrorText>
            )}
          </InputBox>

          <InputBox>
            <Input placeholder={t("email")} {...register("email")} />
            {errors.email && <ErrorText>{errors.email.message}</ErrorText>}
          </InputBox>

          <InputBox>
            <Input placeholder={t("username")} {...register("username")} />
            {errors.username && (
              <ErrorText>{errors.username.message}</ErrorText>
            )}
          </InputBox>

          <InputBox>
            <Input placeholder={t("password")} {...register("passwordOne")} />
            {errors.passwordOne && (
              <ErrorText>{errors.passwordOne.message}</ErrorText>
            )}
          </InputBox>

          <InputBox>
            <Input placeholder={t("confirm")} {...register("passwordTwo")} />
            {errors.passwordTwo && (
              <ErrorText>{errors.passwordTwo.message}</ErrorText>
            )}
          </InputBox>

          <Agreement>
            {t("privacy")} <b>{t("policy")}</b>
          </Agreement>
          <Button>{t("createBtn")}</Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;

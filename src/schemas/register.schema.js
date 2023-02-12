import * as Yup from "yup";

export const registerSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),

  lastName: Yup.string().required("Last name is required"),

  email: Yup.string()
    .required("Email is required")
    .email("Email should be valid"),

  username: Yup.string().required("Username is required"),

  passwordOne: Yup.string().required("Password is required"),

  passwordTwo: Yup.string().oneOf(
    [Yup.ref("passwordOne"), null],
    "Passwords must match"
  ),
});

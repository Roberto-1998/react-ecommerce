import * as Yup from "yup";
import { users } from "../data";

export const registerSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),

  lastName: Yup.string().required("Last name is required"),

  email: Yup.string()
    .required("Email is required")
    .email("Email should be valid"),

  username: Yup.string()
    .required("Username is required")
    .test("is-uniqued", "This username is already taken", (value, context) => {
      let user = users.find((user) => user.username === value);

      if (user) {
        return false;
      }
      return true;
    }),

  passwordOne: Yup.string().required("Password is required"),

  passwordTwo: Yup.string().oneOf(
    [Yup.ref("passwordOne"), null],
    "Passwords must match"
  ),
});

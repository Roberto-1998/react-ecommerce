import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerSchema } from "../schemas/register.schema";

const initValues = {
  name: "",
  lastName: "",
  email: "",
  username: "",
  passwordOne: "",
  passwordTwo: "",
};

const useCreateForm = () => {
  const methods = useForm({
    resolver: yupResolver(registerSchema),
    defaultValues: initValues,
  });

  return methods;
};

export default useCreateForm;

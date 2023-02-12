import { useForm } from "react-hook-form";

const initValues = {
  username: "",
  passwordOne: "",
};

const useCreateLoginForm = () => {
  const methods = useForm({
    defaultValues: initValues,
  });

  return methods;
};

export default useCreateLoginForm;

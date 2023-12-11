import * as yup from "yup";
const getCharacterValidationError = (str) => {
  return `Your password must have at least 1 ${str} character`;
};
const validationSchema = yup.object().shape({
  firstname: yup.string().min(2),
  lastname: yup.string().min(2),
  email: yup.string().required("Enter Your Email").email("Enter a valid email"),
  password: yup
    .string()
    .required("Enter Your  password")
    // .min(8, "Password must have at least 8 characters")
    // .matches(/[0-9]/, getCharacterValidationError("digit"))
    // .matches(/[a-z]/, getCharacterValidationError("lowercase"))
    // .matches(/[A-Z]/, getCharacterValidationError("uppercase")),
    ,
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Passwords does not match"),
});
export default validationSchema;
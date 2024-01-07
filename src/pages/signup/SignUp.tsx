import s from "./SignUp.module.scss";
import RegisterForm from "./register-form/register-form";
const SignUp = () => {
  return (
    <div className={s.SignUp}>
      <RegisterForm />
    </div>
  );
};

export default SignUp;

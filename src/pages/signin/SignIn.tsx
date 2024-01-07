import s from "./SignIn.module.scss";
import { FC } from "react";
import SignInForm from "./signin-form/signin-form";

const SignIn: FC = () => {
  return (
    <div className={s.SignIn}>
      <SignInForm />
    </div>
  );
};

export default SignIn;

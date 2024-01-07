import s from "./signin-form.module.scss";
import { Button, Typography } from "@mui/material";
import { TextField } from "@mui/material";
import {
  Controller,
  SubmitHandler,
  useForm,
  useFormState,
} from "react-hook-form";
import { loginValidation, passwordValidation } from "./validation";
import { NavLink } from "react-router-dom";

interface ISignInForm {
  login: string;
  password: string;
}

const SignInForm = () => {
  const { handleSubmit, control } = useForm<ISignInForm>();
  const { errors } = useFormState({
    control,
  });
  const onSubmit: SubmitHandler<ISignInForm> = (data: any) => console.log(data);

  return (
    <div className={s.SignInForm}>
      {" "}
      <div className={s.authForm_wrap}>
        <Typography variant="h4" component="div">
          Войдите
        </Typography>
        <Typography
          className={s.authForm__subtitle}
          variant="subtitle1"
          component="div"
          gutterBottom
        >
          Чтобы получить доступ
        </Typography>
        <form className={s.authForm_form} onSubmit={handleSubmit(onSubmit)}>
          <Controller
            control={control}
            name="login"
            rules={loginValidation}
            render={({ field }) => (
              <TextField
                label="Логин"
                onChange={(e) => field.onChange(e)}
                value={field.value}
                fullWidth={true}
                size="small"
                margin="normal"
                className={s.authForm__input}
                error={!!errors.login?.message}
                helperText={errors.login?.message}
              />
            )}
          />
          <Controller
            control={control}
            name={"password"}
            rules={passwordValidation}
            render={({ field }) => (
              <TextField
                label="Логин"
                type="password"
                onChange={(e) => field.onChange(e)}
                value={field.value}
                fullWidth={true}
                size="small"
                margin="normal"
                className={s.authForm__input}
                error={!!errors.password?.message}
                helperText={errors.password?.message}
              />
            )}
          />

          <Button
            type="submit"
            variant="contained"
            fullWidth
            disableElevation
            sx={{
              marginTop: 2,
            }}
          >
            Войти
          </Button>
          <div className={s.signup}>
            Нет учётной записи?{" "}
            <NavLink className={s.signup_link} to={"/signup"}>
              Зарегистрироваться
            </NavLink>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignInForm;

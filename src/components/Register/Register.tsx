import { Input } from "@mui/material";
import s from "./Register.module.scss";
import { FC, useState } from "react";
import { useDispatch } from "react-redux";
import { loginSuccess } from "@/features/authSlice";

const Register: FC = () => {
  const dispatch = useDispatch();
  const [username, setUsername] = useState("");
  const [error, setError] = useState<string | null>(null);

  const checkUsernameUniqueness = (username: string): boolean => {
    return true;
  };

  const validateUsername = (username: string): string | null => {
    if (!username) return "Введите логин";
    if (username.length < 3) return "Имя пользователя должно содержать не менее 3 символов";
    const validUsernameRegex = /^[a-zA-Z0-9.-@]+$/;
    if (validUsernameRegex.test(username)) return "Имя пользователя может содержать только буквы и цифры";
  };

  const handleRegister = () => {
    const usernameError = validateUsername(username);
    if (usernameError) {
      setError(usernameError);
      return;
    }
    const isUsernameUnique = checkUsernameUniqueness(username);
    if (!isUsernameUnique) {
      setError("Имя пользователя уже занято");
      return;
    }
    localStorage.setItem("username", username);
    dispatch(loginSuccess(username));
  };

  return (
    <div>
      <h2>Регистрация</h2>
      <input
        type="text"
        placeholder="Имя пользователя"
        value={username}
        onChange={(e) => {
          setUsername(e.target.value);
          setError(null);
        }}
      />
      {error && <div style={{ color: "red" }}>{error}</div>}
      <button onClick={handleRegister}>Зарегистрироваться</button>
    </div>
  );
};

export default Register;

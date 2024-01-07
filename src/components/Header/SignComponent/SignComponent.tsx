import { Button } from "@mui/material";
import { NavLink } from "react-router-dom";
import s from "./SignComponent.module.scss";
const SignComponent = () => {
  return (
    <div className={s.SignIn}>
      <div className={s.buttons} style={{ display: "flex", marginRight: "15px" }}>
        <Button sx={{ my: 2, color: "white", display: "block" }}>
          <NavLink className={s.link} to="/signin">
            Войти
          </NavLink>
        </Button>
        <Button sx={{ my: 2, color: "white", display: "block" }}>
          <NavLink className={s.link} to="/signup">
            Регистрация
          </NavLink>
        </Button>
      </div>
    </div>
  );
};

export default SignComponent;

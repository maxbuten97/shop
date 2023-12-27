import s from "./App.module.scss";
import { NavLink, Outlet } from "react-router-dom";
import "./normalize.scss";
import Header from "../Header/Header";

export const App = () => {
  // if(__PLATFORM__ === 'desktop') {
  // 	return <div>DESKTOP PLATFORM</div>
  // }
  // if(__PLATFORM__ === 'mobile') {
  // 	return <div>MOBILE PLATFORM</div>
  // }

  // if(__ENV__ === 'development') {
  // 	addDevTools()
  // }

  return (
    <div className={s.App}>
      <Header />
      <Outlet />
    </div>
  );
};

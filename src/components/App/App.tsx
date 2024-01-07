import s from "./App.module.scss";
import { Outlet } from "react-router-dom";
import "./normalize.scss";
import Header from "../Header/Header";
import store from "@/store/store";
import { Provider } from "react-redux";
import { FC } from "react";

export const App: FC = () => {
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
    <Provider store={store}>
      <div className={s.App}>
        <Header />
        <Outlet />
      </div>
    </Provider>
  );
};

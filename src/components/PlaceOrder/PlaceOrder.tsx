import { FC } from "react";
import { Link } from "react-router-dom";
import s from "./PlaceOrder.module.scss";

const PlaceOrder: FC = () => {
  return (
    <div className={s.PlaceOrder}>
      <Link className={s.link} to="/checkout">
        Place order
      </Link>
    </div>
  );
};

export default PlaceOrder;

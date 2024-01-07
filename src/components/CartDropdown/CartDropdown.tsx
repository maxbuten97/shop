import { FC } from "react";
import PlaceOrder from "../PlaceOrder/PlaceOrder";
import { BsCart, BsX } from "react-icons/bs";
import { useTypedSelector } from "@/Hooks/useTypedSelector";
import { useOutside } from "@/Hooks/useOutside";
import s from "./CartDropdown.module.scss";

const CartDropdown: FC = () => {
  const { ref, isShow, setIsShow } = useOutside(false);
  const { cart } = useTypedSelector((state) => state);

  return (
    <>
      <button className={s.btn_dropdown} onClick={() => setIsShow(!isShow)}>
        {isShow ? <BsX /> : <BsCart />}
      </button>

      {isShow && (
        <div className={s.modal} style={{ minHeight: "45%" }} ref={ref}>
          {cart.length ? (
            <>
              {cart.map((product: any) => (
                <div key={`Cart item: ${product.id}`} className={s.card_wrap}>
                  <div className={s.card}>
                    <div className={s.card_img}>
                      <img
                        src={product.image}
                        alt={product.title}
                        width="33"
                        height="48"
                        className="rounded-lg"
                      />
                    </div>
                    <div className={s.card_title_wrap}>
                      <div className={s.card_title}>{product.title}</div>
                      <div className={s.card_price}>${product.price}</div>
                    </div>
                  </div>
                </div>
              ))}
              <PlaceOrder />
            </>
          ) : (
            <div>Cart is empty</div>
          )}
        </div>
      )}
    </>
  );
};

export default CartDropdown;

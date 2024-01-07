import { FC } from "react";
import s from "./ProductItem.module.scss";
import { Button } from "@mui/material";
import { useTypedSelector } from "@/Hooks/useTypedSelector";
import { IProduct } from "@/store/product/product.types";
import { useActions } from "@/Hooks/useActions";

const ProductItem: FC<{ product: IProduct }> = ({ product }) => {
  const { addItem } = useActions();
  const { cart } = useTypedSelector((state) => state);
  const isExistsInCart = cart.some((item) => item.id === product.id);
  return (
    <div>
      <div className={s.card} key={product.id}>
        <div className={s.img_wrap}>
          {/* Должен быть роут на карточку товара */}
          <img
            className={s.image_card}
            src={product.image}
            alt={product.title}
            width={150}
            height={150}
          />
        </div>
        <div className={s.content_card}>
          <strong>{product.title}</strong>
          <div>Цена: ${product.price}</div>
          <Button
            variant="contained"
            color="success"
            onClick={() => !isExistsInCart && addItem(product)}
          >
            {isExistsInCart ? "Удалить" : "Добавить в корзину"}
          </Button>
          <Button variant="contained" color="primary">
            Открыть товар
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;

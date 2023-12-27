import ProductItem from "./ProductItem/ProductItem";
import s from "./ProductsList.module.scss";
const ProductsList = () => {
  return (
    <div className={s.ProductList}>
      <ProductItem />
    </div>
  );
};

export default ProductsList;

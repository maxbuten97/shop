import { useGetProductsQuery } from "@/store/product/product.api";
import ProductItem from "./ProductItem/ProductItem";
import s from "./ProductsList.module.scss";
import CartDropdown from "../CartDropdown/CartDropdown";
const ProductsList = () => {
  const { data, isLoading } = useGetProductsQuery(15);
  return (
    <div className={s.ProductList}>
      <h2 className={s.title}>Каталог</h2>
      <CartDropdown />
      {isLoading ? (
        "Loading..."
      ) : (
        <div className={s.cards}>
          {data.map((product) => (
            <ProductItem key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductsList;

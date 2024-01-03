import axios from "axios";
import { useState, useEffect } from "react";
import s from "./ProductItem.module.scss";

const ProductItem = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://fakestoreapi.com/products?limit=15");
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
        setError("An error occurred while fetching data.");
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2 className={s.title}>Каталог</h2>

      <div className={s.cards}>
        {products.map((product) => (
          <div className={s.card} key={product.id}>
            <div className={s.img_wrap}>
              {/* Должен быть роут на карточку товара */}
              <img className={s.image_card} src={product.image} alt={product.title} width={150} height={150} />
            </div>
            <div className={s.content_card}>
              <strong>{product.title}</strong>
              <div>Цена: ${product.price}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductItem;

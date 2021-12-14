import { Button } from 'antd';
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Product } from "../redux/Product/index.js";


const Products = () => {
  const { data } = useSelector((state) => state.products);
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(Product.actions.getProducts());
  }, [dispatch]);

  return (
    <div>
      {data.length > 0 &&
        data.map((item, index) => {
          return <Button key={index}>{item.author}</Button>;
        })}
    </div>
  );
};
export default Products;

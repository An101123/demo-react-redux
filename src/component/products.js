import { useEffect } from "react";
import {useDispatch, useSelector} from  'react-redux'
import { Product } from "../redux/Product/index.js";
const Products = () => {
        const products = useSelector(state => state.products)
        const dispatch = useDispatch();
        useEffect(() => {
          dispatch(Product.actions.getProducts( ));
        }, [dispatch]);
console.log("products", products);
    return (
        <div>
          {/* {products.length > 0 && products.map(item => 
          {
              console.log("item", item);
              return (
                <p>{item.author}</p>

              )
          }

            )} */}
            <p>hahah</p>
        </div>
    )
}
export default Products
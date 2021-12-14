import "./App.css";
import Products from "./component/products";
import { useRoutes } from "react-router-dom"
import routes from "./router";
import LayoutMenu from "./component/home";

function App() {
  const routers = useRoutes([...routes])

  return (
    <div className="App">
    {/* <Routes>
        <Route path="products" element={<Products />} />
        <Route path="products" element={<Products />} />

    </Routes> */}

    <LayoutMenu />
      {routers}
    </div>
  );
}

export default App;

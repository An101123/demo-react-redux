import './App.css';
import Products from './component/products';
import store from './redux/store'
import { Provider } from 'react-redux'


function App() {
  return (
    <div className="App">
      <Provider store={store}>
    <Products />
    </Provider>
    </div>
  );
}

export default App;

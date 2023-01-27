import './App.css';
import Header from './components/header/Header';
import HomePages from './components/HomePages'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom/cjs/react-router-dom.min';
import {Product} from './components/product/Product';
import Banner from './components/product/Banner';

function App() {
  return (
    <>
    <Router>
      <Header />
      <Banner/>
      <Product />
      <Switch>
        <Route path='/home' exact component={HomePages} />
      </Switch>
      
   </Router>
   </>
  );
}

export default App;

import './App.css';
import Header from './components/header/Header';
import HomePages from './components/HomePages'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom/cjs/react-router-dom.min';
import {Product} from './components/product/Product';
import Banner from './components/product/Banner';
import Between from './components/between/Between';
import About from './components/category/About';
import { Categories } from './components/category/Categories';

function App() {
  return (
    <>
    <Router>
      <Header />
      <Banner/>
      <Between />
      <About />
      <Categories />
      <Product />
      <Switch>
        <Route path='/home' exact component={HomePages} />
      </Switch>
      
   </Router>
   </>
  );
}

export default App;

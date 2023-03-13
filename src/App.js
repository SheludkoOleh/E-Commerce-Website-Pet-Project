import './App.css';
import Header from './components/header/Header';
import HomePages from './components/HomePages'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom/cjs/react-router-dom.min';
import {Product} from './components/product/Product';
import Banner from './components/product/Banner';
import Between from './components/between/Between';
import Between_why from './components/between/Between_why';
import Between_why_us from './components/between/Between_why_us';
import About from './components/category/About';
import Categories from './components/category/Categories';
import { Discount } from './components/category/Discount';
import Why_us from './components/category/Why_us';

function App() {
  return (
    <>
    <Router>
      <Header />
      <Banner/>
      <Between />
      <About />
      <Categories />
      <Discount />
      <Between_why />
      <Why_us />
      <Between_why_us />
      <Product />
      <Switch>
        <Route path='/home' exact component={HomePages} />
      </Switch>
      
   </Router>
   </>
  );
}

export default App;

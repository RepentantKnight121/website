import React from 'react';

import Menu from './components/Menu';
//import ListCoffeeCategory from './components/admin/coffee-category/ListCoffeeCategory';
import ListCoffeeInfo from './components/admin/coffee-info/ListCoffeeInfo';
import Footer from './components/Footer';

function App() {
  return (
  <>
    <Menu />
    <ListCoffeeInfo /> 
    <Footer />
  </>
  )
}

export default App;

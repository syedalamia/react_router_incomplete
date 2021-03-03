import './App.css';
import ProductList from './ProductList'
import ProductDetail from './ProductDetail';

import Navigation from './Navigation'
import {
  BrowserRouter as Router,
  Switch,
  Route, Redirect,
 
} from "react-router-dom";



function App() {
  return (
    <div className="App">
      <Router>
      
      <Navigation/>

      <Switch>
        <Route exact path={'/'}>
          <ProductList/>
        </Route>

        {/* <Route exact path={'/product-details'}>
        <ProductDetail/>
        </Route> */}

        <Route exact path={'/second/:id'}>
          <ProductDetail/>
        </Route>


        <Route exact path={'/404'}>
         <p>404 not found</p>
        </Route>

        <Route path='*' render={()=><Redirect to={'/404'}/>}/>

     

   


      </Switch>

      </Router>
    </div>
  );
}

export default App;

import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import ListProductComponents from './components/ListProductComponents';
import CreateProductComponent from './components/CreateProductComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import UpdateProductComponent from './components/UpdateProductComponent';


function App() {
  return (
    <div>
      <Router>
        
        <HeaderComponent />
          <div className="container">
            <Switch>
              <Route path="/" exact component ={ListProductComponents}></Route>
              <Route path="/products" component ={ListProductComponents}></Route>
              <Route path="/add-product" component ={CreateProductComponent}></Route>
              <Route path="/update-product/:prodId" component ={UpdateProductComponent}></Route>
              <ListProductComponents />
            </Switch>
          </div>

        <FooterComponent/>
        
      </Router>
    </div>
  );
}

export default App;

import React from 'react';
import '../App.css';
import { Link, Route, Switch } from "react-router-dom";
import Home from "../pages/Home";
import Category from "../pages/Category";
import Products from "../pages/Products";

function App() {
  return (
    <div className="App">
      <h1>Welcome to react router world</h1>
      <hr/>
      <div className="container">
        <div className="row">
          <div className="col-sm">
            <Link to="/">Home</Link>
          </div>
          <div className="col-sm">
            <Link to="/category">Category</Link>
          </div>
          <div className="col-sm">
            <Link to="/products">Products</Link>
          </div>
        </div>
      </div>

      <hr/>
      <div className="panel">
        <div className="panel-body">
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/category" component={Category} />
            <Route path="/products" component={Products} />
          </Switch>
        </div>
      </div>
    </div>
  );
}

export default App;

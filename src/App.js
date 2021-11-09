import Header from "./components/Header.js";
import Nav from "./components/Nav.js";
import Sort from "./components/Sort.js";
import Content from "./components/Content.js";
import setPizzas from "./redux/Actions/pizzas.js";

import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import axios from "axios";

import "./App.scss";


function App() {

  const dispatch = useDispatch();

  const { items } = useSelector(({ filters, pizzas }) => {
    return {
      sortBy: filters.sortBy,
      items: pizzas.items,
    }
  });

  useEffect(() => {
    axios.get('http://localhost:3005/database.json').then(({ data }) => {
      dispatch(setPizzas(data.pizzas));
    })
  }, []);

  return (
    <>
      <div className="wrapper">
        <Header />
        <div className="navBarWrapper">
          <Nav />
          <Sort />
        </div>
        <div className="contentWrapper">
          {items.map((obj) => (
            <Content key={`${obj.name} + ${obj.id}`} {...obj} />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;

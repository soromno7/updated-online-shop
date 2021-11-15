import Header from "./components/Header.js";
import Nav from "./components/Nav.js";
import Sort from "./components/Sort.js";
import Content from "./components/Content.js";
import { setPizzas, setLoaded } from "./redux/Actions/pizzas.js";
import LoadingBlock from "./components/LoadingBlock.js";

import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import axios from "axios";

import "./App.scss";


function App() {

  const dispatch = useDispatch();

  const isLoaded = useSelector(({pizzas}) => pizzas.isLoaded);

  const { items, category, sortBy } = useSelector(({ filters, pizzas }) => {
    return {
      sortBy: filters.sortBy,
      category: filters.category,
      items: pizzas.items,
      isLoaded: pizzas.isLoaded,
    }
  });

  useEffect(() => {
    dispatch(setLoaded(false));
    axios.get(`http://localhost:3005/pizzas${category === 0 ? '' : `?category=${category}`}`)
      .then(({ data }) => {
        dispatch(setPizzas(data));
      })
    }, [category, sortBy]);

  return (
    <>
      <div className="wrapper">
        <Header />
        <div className="navBarWrapper">
          <Nav />
          <Sort />
        </div>
        <div className="contentWrapper">
          {isLoaded
          ? items.map((obj) => (<Content key={`${obj.name} + ${obj.id}`} {...obj} />))
          : Array(12).fill(0).map((_, index) => <LoadingBlock key={index}/>)}
        </div>
      </div>
    </>
  );
}

export default App;

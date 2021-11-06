import Header from "./components/Header/Header.js";
import Nav from "./components/Nav/Nav.js";
import Sort from "./components/Sort/Sort.js";
import Content from "./components/Content/Content.js";
import { useState, useEffect } from "react";

import "./App.scss";

function App() {

  const [pizzasList, setPizzasList] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/database.json')
      .then((resp) => resp.json())
      .then((json) => {
        setPizzasList(json.pizzas)
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
          {pizzasList.map((obj) => (
            <Content key={`${obj.name} + ${obj.id}`} {...obj} />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;

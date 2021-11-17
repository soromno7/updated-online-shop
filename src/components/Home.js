import Nav from "./Nav.js";
import Sort from "./Sort.js";
import Content from "./Content.js";
import LoadingBlock from "./LoadingBlock.js";
import { setPizzas, setLoaded } from "../redux/Actions/pizzas.js";
import axios from "axios";

import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";


export function Home() {

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
      axios.get(`http://localhost:3005/pizzas?${category === 0 ? '' : `category=${category}`}&_sort=${sortBy.sortType}&_order=${sortBy.order}`)
        .then(({ data }) => {
          dispatch(setPizzas(data));
        })
      }, [category, sortBy]);

    return(
        <>
            <div className="navBarWrapper">
            <Nav />
            <Sort />
            </div>
            <div className="contentWrapper">
            {isLoaded
            ? items.map((obj) => (<Content key={`${obj.name} + ${obj.id}`} {...obj} />))
            : Array(12).fill(0).map((_, index) => <LoadingBlock key={index}/>)}
            </div>
        </>
    )
}

export default Home;
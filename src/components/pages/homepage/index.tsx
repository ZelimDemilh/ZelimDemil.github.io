import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../hooks/hooks";
import { getProducts } from "../../../store/reducers/product/productFunc";
import NewArrival from "./NewArrival"
import "./homepage.scss"
import { getCategories } from "../../../store/reducers/category/categoryFunc";

const Homepage = () => {
  const dispatch = useAppDispatch()

  const { products, isLoading} = useAppSelector(state => state.ProductsSlice)

  useEffect(()=> {
    dispatch(getProducts())
    dispatch(getCategories())
  }, [dispatch])

  if(isLoading){
    return <h1>loading...</h1>
  }

  return (
    <div className="homepage">
      <div className="welcome">
        <h1>Открытки, рамки, закладки и подарки</h1>
        <p>С напоминаниями и пожеланиями</p>
        <button>Начать покупки</button>
      </div>
      <NewArrival products={products}/>
    </div>
  );
};

export default Homepage;
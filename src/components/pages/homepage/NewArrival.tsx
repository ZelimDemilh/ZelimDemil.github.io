import React, { FC } from "react";
import { IProduct } from "../../../types/IProduct";
import Card from "../../card";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/themes/splide-skyblue.min.css';

interface newArrivalProps{
  products: IProduct[]
}

const setting = {
  perPage: 1.5,
  arrows: false,
  pagination: false
}

const NewArrival: FC<newArrivalProps> = ({ products}) => {
  return (
    <div className="newArrival">
      <h2>Новое поступление</h2>
      <Splide options={setting}>
        {products.map(product => {
          return <SplideSlide><Card key={product._id} product={product}/></SplideSlide>
        })}
      </Splide>
    </div>
  );
};

export default NewArrival;
import React, { FC, useState } from "react";
import { IProduct } from "../../types/IProduct";
import "./card.scss";
import { useAppSelector } from "../../hooks/hooks";
import { ICategory } from "../../types/ICategory";

interface CardProps {
  product: IProduct;
}

const Card: FC<CardProps> = ({ product }) => {
  const {
    image,
    _id,
    category,
    description,
    discount,
    sizes,
    wholesalePrice,
    name,
    retailPrice
  } = product;

  const [sizeActive, setSizeActive] = useState(sizes[0]);

  return (
    <div className="card">
      <div className="card__image">
        <img src={`${process.env.REACT_APP_API_SERVER}/${image}`} alt="product image"/>
      </div>
      <div className="card__name">
        <span>{name}</span>
      </div>
      <div className="card__sizes">
        {sizes.map((item, index) => (
          <div
            className={`card__size ${
              sizeActive.width === item.width &&
              sizeActive.height === item.height &&
              "card__size_active"
            }`}
            key={_id + index}
            onClick={() => setSizeActive(item)}
          >
            {item.width}x{item.height}
          </div>
        ))}
      </div>
      <div className="card__prices">
          {(product.discount !== 0 ) && <span>{retailPrice}₽</span> }
          <p>{(1 - (discount / 100)) * (true? retailPrice:wholesalePrice)}₽</p>
      </div>
      <button>В корзину</button>
    </div>
  );
};

export default Card;

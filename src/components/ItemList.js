import React from "react";
import { CDN_URL } from "../utils/constant";

const ItemList = ({ items }) => {
  console.log(items);
  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="p-2 m-2 border-b border-solid border-black  text-left flex"
        >
          <div className="w-9/12">
            <div className="py-2">
              <span className="font-bold p-2  text-blue-800">
                {item.card.info.name}
              </span>
              <span className="font-bold p-2">
                - ₹{" "}
                {item.card.info.price / 100 ||
                  item.card.info.defaultPrice / 100}
              </span>
            </div>
            <p>{item.card.info.description}</p>
          </div>
          <div className="w-3/12 p-4">
            <img src={CDN_URL + item.card.info.imageId}></img>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;

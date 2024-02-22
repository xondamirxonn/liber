import React from "react";
import { yangilar } from "./yangi";
import RatingIcon from "../../assets/icon/rating-icon";
import Airpods from "../../assets/icon/airpods";
import Book from "../../assets/icon/book";

export default function News() {
  return (
    <div className="mt-10">
      <h1>Янги қўшилганлар</h1>
      <div className="flex gap-5 mt-5">
        {yangilar.map((item) => (
          <div key={item.id}>
            <img src={item.img} alt="" />
            <div>
              <h4 className="font-bold mt-2">{item.title}</h4>
              <small className=" text-blue-600">{item.text}</small>
            </div>
            <div className="flex justify-between items-end">
              <div className="flex items-center gap-2 mt-2">
                <RatingIcon />
                <span>{item.rating}</span>
              </div>
              <div className="flex gap-3">
                <Airpods />
                <Book />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

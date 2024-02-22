import React from 'react'
import { audiokitob } from './audio-data';
import Airpods from '../../assets/icon/airpods';
import Book from '../../assets/icon/book';
import RatingIcon from '../../assets/icon/rating-icon';

export default function Audio() {
  return (
    <div className="mt-20">
      <h1>Аудио китоблар</h1>
      <div className="flex gap-5 mt-5">
        {audiokitob.map((item) => (
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

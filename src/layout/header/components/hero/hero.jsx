import React from "react";
import BookW from "./../../../../assets/book-woman.png";
import Book_1984 from "./../../../../assets/book-1984.svg";
import HeartIcon from "../../../../assets/icon/heart";

export default function Hero() {
  return (
    <div className="flex justify-between gap-5">
      <div className="flex justify-between bg-blue-100 rounded-lg mt-3 items-center">
        <div>
          <h1 className="p-5 font-bold">Ko'p o'qilayotganlar</h1>
          <img src={BookW} alt="" />
        </div>
        <div className="flex gap-3">
          <div className="text-center">
            <img src={Book_1984} alt="" />
            <span className="">1984</span>
          </div>{" "}
          <div className="text-center">
            <img src={Book_1984} alt="" />
            <span className="">1984</span>
          </div>{" "}
          <div className="text-center">
            <img src={Book_1984} alt="" />
            <span className="">1984</span>
          </div>
        </div>
      </div>
      <div className="bg-blue-700 rounded-lg relative w-64 px-10 py-10">
        <h1 className="text-white w-32">Китоб ўқишни ёқтирасизми?</h1>
        <p className="text-white w-44 py-4 ">
          Унда пулингизни тежаш учун ўзингиз йоқтирган рукнга обуна бўлинг
        </p>
        <div className="flex justify-center ">
          <button className="bg-white rounded-lg flex items-center p-2  gap-3 absolute bottom-3">
            <HeartIcon /> Obuna Bo'lish
          </button>
        </div>
      </div>
    </div>
  );
}

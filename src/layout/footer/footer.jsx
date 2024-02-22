import React from "react";
import googlePlay from "../../assets/googleplay.png";
import appstore from "../../assets/appstore.png";
import Facebook from "../../assets/icon/facebook";
import Youtube from "../../assets/icon/youtube";
import Tiktok from "../../assets/icon/tiktok";
import Telegram from "../../assets/icon/telegram";
import Instagram from "../../assets/icon/instagram";
import uzcard from "../../assets/uzcard.png";
import humo from "../../assets/humo.png";
import payme from "../../assets/payme.png";

export const Footer = () => {
  return (
    <div className="mt-20">
      <div className="flex justify-around bg-blue-200 p-10">
        <div className="">
          <h1 className="font-bold">Платформа хақида</h1>
          <ul className="flex flex-col gap-3">
            <li>Liber ўзи нима?</li>
            <li>Фойдаланиш шартлари</li>
            <li>Ёрдам</li>
          </ul>
        </div>
        <div>
          <h1 className="font-bold">Обуна хақида</h1>
          <ul className="flex flex-col gap-3">
            <li>Обуна бўлиш</li>
            <li>Қандай тўлаш</li>
          </ul>
        </div>
        <div>
          <h1 className="font-bold">Китоблар</h1>
          <ul className="flex flex-col gap-3">
            <li>Аудио китоблар</li>
            <li>Электрон китоблар</li>
            <li>Китоблар</li>
          </ul>
        </div>
        <div>
          <h1 className="font-bold">Мобил илова</h1>
          <div className="flex flex-col gap-3">
            <img src={googlePlay} alt="" />
            <img src={appstore} alt="" />
          </div>
        </div>
      </div>
      <div className="bg-blue-950 p-5">
        <div className="flex justify-evenly"> 
          <div>
            <h1 className="text-white">Ижтимоий тармоқлар</h1>
            <div className="flex gap-3">
              <Facebook />
              <Youtube />
              <Tiktok />
              <Telegram />
              <Instagram />
            </div>
          </div>
          <div>
            <h1 className="text-white">Боғланиш</h1>
            <div className="flex gap-3">
              <p className="text-white">+998 90 253 77 53</p>
              <p className="text-white">support@liber.uz</p>
            </div>
          </div>
          <div className="flex gap-3 items-center">
            <img src={uzcard} alt="" />
            <img src={humo} alt="" />
            <img  src={payme} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

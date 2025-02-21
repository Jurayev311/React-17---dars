import React from "react";
import { FaInstagram, FaFacebookF, FaYoutube } from "react-icons/fa";
import { FiPhone } from "react-icons/fi";
import { MdOutlineLiveHelp, MdOutlineEmail, MdOutlineStar, MdSportsBasketball } from "react-icons/md";
import { BsCameraReels, BsMusicNoteBeamed, BsFileText } from "react-icons/bs";
import logo from "../../assets/footer-logo.svg";
import googlePlay from "../../assets/google-play.svg";
import appStore from "../../assets/app-store.svg";

const Footer = () => {
  return (
    <div className="mt-[120px] mb-10">
      <div className="container-all bg-[#111111] text-white flex items-center justify-between rounded-xl">

        <div className="p-8">
          <img src={logo} alt="Logo" className="w-16 mb-12" />
          <div className="flex flex-col gap-3">
            <img src={googlePlay} alt="Google Play" className="w-36 cursor-pointer" />
            <img src={appStore} alt="App Store" className="w-36 cursor-pointer" />
          </div>
        </div>


        <div className="p-8">
          <h3 className="text-lg font-semibold mb-4">О нас</h3>
          <ul className="space-y-2">
            <li className="flex items-center gap-2 cursor-pointer hover:text-red-500">
              <BsFileText className="text-[#C61F1F]" /> Публичная оферта
            </li>
            <li className="flex items-center gap-2 cursor-pointer hover:text-red-500">
              <MdOutlineStar className="text-red-500" /> Реклама
            </li>
            <li className="flex items-center gap-2 cursor-pointer hover:text-red-500">
              <MdOutlineLiveHelp className="text-[#C61F1F]" /> F.A.Q
            </li>
            <li className="flex items-center gap-2 cursor-pointer hover:text-red-500">
              <MdOutlineEmail className="text-[#C61F1F]" /> Контакты
            </li>
          </ul>
        </div>

        <div className="p-8">
          <h3 className="text-lg font-semibold mb-4">Категории</h3>
          <ul className="space-y-2">
            <li className="flex items-center gap-2 cursor-pointer hover:text-red-500">
              <BsCameraReels className="text-[#C61F1F]" /> Кино
            </li>
            <li className="flex items-center gap-2 cursor-pointer hover:text-red-500">
              <BsMusicNoteBeamed className="text-[#C61F1F]" /> Театр
            </li>
            <li className="flex items-center gap-2 cursor-pointer hover:text-red-500">
              <BsMusicNoteBeamed className="text-[#C61F1F]" /> Концерты
            </li>
            <li className="flex items-center gap-2 cursor-pointer hover:text-red-500">
              <MdSportsBasketball className="text-[#C61F1F]" /> Спорт
            </li>
          </ul>
        </div>

        <div className="p-8">
          <h3 className="text-lg font-semibold mb-4">Связаться с нами</h3>
          <p className="flex items-center gap-2 text-red-500 text-lg">
            <FiPhone /> +998 (95) 897-33-38
          </p>
          <h3 className="text-lg font-semibold mt-6 mb-4">Социальные сети</h3>
          <div className="flex gap-4 text-2xl">
            <FaInstagram className="cursor-pointer hover:text-red-500" />
            <FaFacebookF className="cursor-pointer hover:text-red-500" />
            <FaYoutube className="cursor-pointer hover:text-red-500" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
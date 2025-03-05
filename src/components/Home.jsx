/*import React from "react";
import logo from "./assets/logo.svg";
import header from "./assets/header.png";
import { FaSearch, FaShoppingCart, FaRegHeart, FaUser } from "react-icons/fa";
import { IoNotifications } from "react-icons/io5";

function Home() {
  return (
    <>
      <div className="bg-[rgba(235,239,243,1)]">
        <nav className="container mx-auto flex flex-wrap justify-between items-center gap-4 py-2 px-4">
          <ul className="flex flex-wrap items-center gap-4 text-[rgba(84,93,106,1)] font-normal text-[14px]">
            <li>
              <a href="#">Tashkent</a>
            </li>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Products</a>
            </li>
            <li>
              <a href="#">Contacts</a>
            </li>
          </ul>

          <div className="flex items-center gap-4">
            <a
              className="text-[rgba(84,93,106,1)] font-semibold text-[14px]"
              href="tel:+998711234567"
            >
              +998 (71) 123-45-67
            </a>
            <select className="text-[rgba(84,93,106,1)] bg-transparent border-none">
              <option value="uz">Uz</option>
              <option value="en">Eng</option>
              <option value="ru">Rus</option>
            </select>
          </div>
        </nav>
      </div>

      <div className="container mx-auto flex flex-wrap justify-between items-center gap-4 py-4 px-4">
        <div className="flex items-center gap-2">
          <img className="w-12 h-12" src={logo} alt="Ashyo Logo" />
          <h1 className="text-blue-800 font-extrabold text-3xl">Ashyo</h1>
        </div>

        <select className="bg-blue-700 text-white text-center w-40 h-12 rounded-lg hidden md:block">
          <option value="">Kategoriya</option>
        </select>

        <div className="flex items-center bg-gray-100 rounded-lg w-full md:w-[518px]">
          <input
            type="text"
            placeholder="What are you looking for?"
            className="flex-1 pl-4 bg-transparent outline-none"
          />
          <button className="w-12 h-12 flex items-center justify-center bg-blue-600 rounded-md">
            <FaSearch className="text-white text-xl" />
          </button>
        </div>

        <div className="flex items-center gap-4">
          <IoNotifications className="text-gray-600 text-2xl" />
          <FaRegHeart className="text-gray-600 text-2xl" />
          <FaShoppingCart className="text-gray-600 text-2xl" />
          <FaUser className="text-gray-600 text-2xl" />
        </div>
      </div>

      <nav className="container mx-auto px-4">
        <ul className="flex flex-wrap my-[29px] gap-4 justify-center md:justify-between text-gray-600 text-[16px]">
          <li>
            <a href="#">Aksiyalar</a>
          </li>
          <li>
            <a href="#">Smartfonlar</a>
          </li>
          <li>
            <a href="#">Noutbooklar</a>
          </li>
          <li>
            <a href="#">Konditsionerlar</a>
          </li>
          <li>
            <a href="#">Televizorlar</a>
          </li>
          <li>
            <a href="#">Muzlatgichlar</a>
          </li>
          <li>
            <a href="#">Kir yuvish mashinalari</a>
          </li>
          <li>
            <a href="">Telivizorlar</a>
          </li>
          <li>
            <a href="">Kiryuvish mashinalari</a>
          </li>
        </ul>
      </nav>

      <div className="bg-gray-100">
        <div className="container mx-auto flex flex-wrap justify-between items-center px-4">
          <div className="max-w-[604px] w-full md:max-w-[604px]">
            <h2 className="font-black text-[44px] leading-[52.8px] text-gray-900 whitespace-nowrap">
              Siz kutgan Xiaomi 12 Mi Laite
            </h2>
            <p className="font-normal text-[16px] leading-[18.75px] text-gray-600 mt-2">
              Orginallik va qulay narxni o'zida jamlagan Xiaomi 12 Mi Laite siz
              uchun eng yaxshi arziydigan takliflarimizdan biridir!
            </p>
            <button className="mt-6 w-40 h-12 bg-blue-700 text-white rounded-md">
              Batafsil
            </button>
          </div>
          <img
            src={header}
            alt="Xiaomi 12 Mi Laite"
            className=" md:w-[60%] lg:w-[50%] xl:w-[40%] mx-auto md:mx-0"
          />
        </div>
      </div>
    </>
  );
}

export default Home;*/
import React from "react";
import { useNavigate } from "react-router-dom"; 
import logo from "./assets/logo.svg";
import header from "./assets/header.png";
import { FaSearch, FaShoppingCart, FaRegHeart, FaUser } from "react-icons/fa";
import { IoNotifications } from "react-icons/io5";

function Home() {
  const navigate = useNavigate(); 

  return (
    <>
      <div className="bg-[rgba(235,239,243,1)]">
        <nav className="container mx-auto flex flex-wrap justify-between items-center gap-4 py-2 px-4">
          <ul className="flex flex-wrap items-center gap-4 text-[rgba(84,93,106,1)] font-normal text-[14px]">
            <li>
              <a href="#">Tashkent</a>
            </li>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Products</a>
            </li>
            <li>
              <a href="#">Contacts</a>
            </li>
          </ul>

          <div className="flex items-center gap-4">
            <a
              className="text-[rgba(84,93,106,1)] font-semibold text-[14px]"
              href="tel:+998711234567"
            >
              +998 (71) 123-45-67
            </a>
            <select className="text-[rgba(84,93,106,1)] bg-transparent border-none">
              <option value="uz">Uz</option>
              <option value="en">Eng</option>
              <option value="ru">Rus</option>
            </select>
          </div>
        </nav>
      </div>

      <div className="container mx-auto flex flex-wrap justify-between items-center gap-4 py-4 px-4">
        <div className="flex items-center gap-2">
          <img className="w-12 h-12" src={logo} alt="Ashyo Logo" />
          <h1 className="text-blue-800 font-extrabold text-3xl">Ashyo</h1>
        </div>

        <select className="bg-blue-700 text-white text-center w-40 h-12 rounded-lg hidden md:block">
          <option value="">Kategoriya</option>
        </select>

        <div className="flex items-center bg-gray-100 rounded-lg w-full md:w-[518px]">
          <input
            type="text"
            placeholder="What are you looking for?"
            className="flex-1 pl-4 bg-transparent outline-none"
          />
          <button className="w-12 h-12 flex items-center justify-center bg-blue-600 rounded-md">
            <FaSearch className="text-white text-xl" />
          </button>
        </div>

        <div className="flex items-center gap-4">
          <IoNotifications className="text-gray-600 text-2xl" />
          <FaRegHeart className="text-gray-600 text-2xl" />
          <FaShoppingCart className="text-gray-600 text-2xl" />
          <FaUser 
            className="text-gray-600 text-2xl cursor-pointer" 
            onClick={() => navigate("/register")}
          />
        </div>
      </div>

      <nav className="container mx-auto px-4">
        <ul className="flex flex-wrap my-[29px] gap-4 justify-center md:justify-between text-gray-600 text-[16px]">
          <li><a href="#">Aksiyalar</a></li>
          <li><a href="#">Smartfonlar</a></li>
          <li><a href="#">Noutbooklar</a></li>
          <li><a href="#">Konditsionerlar</a></li>
          <li><a href="#">Televizorlar</a></li>
          <li><a href="#">Muzlatgichlar</a></li>
          <li><a href="#">Kir yuvish mashinalari</a></li>
        </ul>
      </nav>

      <div className="bg-gray-100">
        <div className="container mx-auto flex flex-wrap justify-between items-center px-4">
          <div className="max-w-[604px] w-full md:max-w-[604px]">
            <h2 className="font-black text-[44px] leading-[52.8px] text-gray-900 whitespace-nowrap">
              Siz kutgan Xiaomi 12 Mi Laite
            </h2>
            <p className="font-normal text-[16px] leading-[18.75px] text-gray-600 mt-2">
              Orginallik va qulay narxni o'zida jamlagan Xiaomi 12 Mi Laite siz
              uchun eng yaxshi arziydigan takliflarimizdan biridir!
            </p>
            <button className="mt-6 w-40 h-12 bg-blue-700 text-white rounded-md">
              Batafsil
            </button>
          </div>
          <img
            src={header}
            alt="Xiaomi 12 Mi Laite"
            className="md:w-[60%] lg:w-[50%] xl:w-[40%] mx-auto md:mx-0"
          />
        </div>
      </div>
    </>
  );
}

export default Home;

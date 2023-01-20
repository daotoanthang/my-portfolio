import React from "react";
import { motion } from "framer-motion";
import { BiChevronsDown } from "react-icons/bi";
import "./text.scss";

const Header = () => {
  return (
    <div className="relative h-screen flex justify-center items-center flex-col gap-5">
      <h1 className="hidden">Dao Toan Thang - Front end developer</h1>
      <motion.svg
        className="w-full md:h-[200px] lg:h-[200px] h-[80px]"
        width="1309"
        height="200"
        data-scroll
        data-scroll-speed="1"
        viewBox="0 0 1300 200"
      >
        <text
          className="text-[145px] md:text-[90px] lg:-[90px]"
          x="50%"
          y="50%"
          fill="transparent"
          textAnchor="middle"
        >
          DAO TOAN THANG
        </text>
      </motion.svg>

      <motion.p
        data-scroll
        data-scroll-speed="1"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 2 }}
        className="text-xl lg:text-3xl md:text-3xl text-center z-[1] overflow-hidden"
      >
        {`I'm a frontend developer`}
      </motion.p>
      <motion.a
        data-scroll
        data-scroll-speed="2"
        data-scroll-delay="1"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 2.2 }}
        className="absolute left-[calc(50%-23px)] bottom-[10vh] cursor-pointer"
        href="#about"
        data-scroll-to
      >
        <BiChevronsDown className="animate-bounce" size={56} />
      </motion.a>
    </div>
  );
};

export default Header;

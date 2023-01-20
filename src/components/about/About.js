import React from "react";
import ME from "../../assets/avatar.JPG";
import ButtonTrans from "../button/ButtonTrans";
import CV from "../../assets/daotoanthang-cv.pdf";
import "locomotive-scroll/dist/locomotive-scroll";

const About = () => {
  return (
    <section className="" id="about">
      <h5 data-scroll data-scroll-speed="1">
        Get To Know
      </h5>
      <h2 data-scroll data-scroll-speed="1" className="md:mb-0">
        About Me
      </h2>
      <div className="page-container grid grid-cols-1 gap-0 md:px-[5vw] md:grid-cols-[35%_50%] md:gap-[12%] lg:px-0 lg:gap-[15%]">
        <div
          className="w-[65%] mt-0 mb-12 mx-auto md:w-full md:mx-auto md:mt-16 md:mb-6 lg:w-full aspect-square rounded-[2rem] 
          bg-bgVaraint bg-gradient-to-b from-primary 
            to-primary-300 bg-transparent grid place-items-center "
        >
          <div data-scroll data-scroll-speed="1" className="about__me-img ">
            <img
              src={ME}
              alt="daotoanthangavatar"
              className="rounded-[2rem] overflow-hidden rotate-6 hover:rotate-0 transition-all "
            />
          </div>
        </div>
        <div className="md:mt-8">
          <p
            data-scroll
            className="text-left my-6 md:text-left md:my-4 md:mt-20 lg:mt-44 text-light text-lg lg:leading-8"
          >
            My name is Dao Toan Thang. I'm a final year student majoring in
            software engineering, I love creating a polished and meaningful user
            interfaces. I hope to become a great developer and get my dream job
            in the future.
          </p>
          <ButtonTrans target="_blank" href={CV}>
            My Resume
          </ButtonTrans>
        </div>
      </div>
    </section>
  );
};

export default About;

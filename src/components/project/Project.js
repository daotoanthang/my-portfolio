import React from "react";
import ButtonPrimary from "../button/ButtonPrimary";
import ButtonTrans from "../button/ButtonTrans";
import { BiLinkExternal } from "react-icons/bi";
import { BsGithub } from "react-icons/bs";
import IMG from "../../assets/simplemovie.png";
import IMG2 from "../../assets/gbox-studio.png";
import IMG3 from "../../assets/wooder.png";


const Project = () => {
  return (
    <section id="project">
      <h5>My Recent Work</h5>
      <h2 className="md:mb-[3rem]">Selected Projects</h2>

      <div className="page-container flex flex-col-reverse md:min-h-[40vh] lg:grid lg:grid-cols-[40%_60%] lg:gap-5">
        <div className="flex flex-col md:mt-4 justify-center">
          <h3 className="text-3xl mt-8 md:mt-0">React Simple Movie</h3>
          <div className="flex gap-[10px] my-4 lg:md-8">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://reactjs.org/"
            >
              <img
                src="https://cdn.jsdelivr.net/gh/PKief/vscode-material-icon-theme@main/icons/react.svg"
                alt=""
                className="w-[30px] h-[30px] transition duration-300 group-hover:scale-110"
              />
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://tailwindcss.com/"
            >
              <img
                src="https://cdn.jsdelivr.net/gh/PKief/vscode-material-icon-theme@main/icons/tailwindcss.svg"
                alt=""
                className="w-[30px] h-[30px] transition duration-300 group-hover:scale-110"
              />
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://swiperjs.com/"
            >
              <img
                src="https://raw.githubusercontent.com/surmon-china/vue-awesome-swiper/HEAD/presses/swiper-logo.svg"
                alt=""
                className="w-[30px] h-[30px] transition duration-300 group-hover:scale-110"
              />
            </a>
          </div>
          <div>
            <ButtonTrans
              href="https://simple-movie-tau.vercel.app/"
              target="_blank"
              className="px-3 py-3 mr-[20px]"
            >
              <BiLinkExternal className="inline-block mr-[10px] w-[20px] h-[20px]"></BiLinkExternal>
              <span>Live Demo</span>
            </ButtonTrans>
            <ButtonPrimary
              href="https://github.com/daotoanthang/react-simple-movies"
              target="_blank"
              className="px-3 py-3"
            >
              <BsGithub className="inline-block mr-[10px] w-[20px] h-[20px]"></BsGithub>
              <span>View Github</span>
            </ButtonPrimary>
          </div>
        </div>
        <div
          data-scroll
          data-scroll-speed="3"
          className="border-[#888] border-2 lg:h-fit rounded-[20px] overflow-hidden"
        >
          <div className="border-black border-[8px]">
            <img
              src={IMG}
              alt="reactsimplemovie"
              className="w-full h-auto rounded-[12px]"
            />
          </div>
        </div>
      </div>
      <div className="page-container mt-10 md:mt-20 flex flex-col-reverse md:min-h-[40vh] lg:grid lg:grid-cols-[60%_40%] lg:gap-5">
        <div className="flex flex-col md:mt-4 justify-center lg:order-2 lg:ml-[70px]">
          <h3 className="text-3xl mt-8 md:mt-0">Gbox Studio</h3>
          <div className="flex gap-[10px] my-4 lg:my-8">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.w3schools.com/html/"
            >
              <img
                src="https://cdn.jsdelivr.net/gh/PKief/vscode-material-icon-theme@main/icons/html.svg"
                alt=""
                className="w-[30px] h-[30px] transition duration-300 group-hover:scale-110"
              />
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.w3schools.com/css/"
            >
              <img
                src="https://cdn.jsdelivr.net/gh/PKief/vscode-material-icon-theme@main/icons/css.svg"
                alt=""
                className="w-[30px] h-[30px] transition duration-300 group-hover:scale-110"
              />
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://sass-lang.com/"
            >
              <img
                src="https://sass-lang.com/assets/img/logos/logo-b6e1ef6e.svg"
                alt=""
                className="w-[30px] h-[30px] transition duration-300 group-hover:scale-110"
              />
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.javascript.com/"
            >
              <img
                src="https://cdn.jsdelivr.net/gh/PKief/vscode-material-icon-theme@main/icons/javascript.svg"
                alt=""
                className="w-[30px] h-[30px] transition duration-300 group-hover:scale-110"
              />
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://flickity.metafizzy.co/"
            >
              <img
                src="https://sotaydoanhtri.com/wp-content/uploads/2019/11/Flickity.png"
                alt=""
                className="w-[30px] h-[30px] transition duration-300 group-hover:scale-110"
              />
            </a>
          </div>
          <div>
            <ButtonTrans
              href="https://daotoanthang.github.io/gbox-studio/"
              target="_blank"
              className="px-3 py-3 mr-[20px]"
            >
              <BiLinkExternal className="inline-block mr-[10px] w-[20px] h-[20px]"></BiLinkExternal>
              <span>Live Demo</span>
            </ButtonTrans>
            <ButtonPrimary
              href="https://github.com/daotoanthang/gbox-studio"
              target="_blank"
              className="px-3 py-3"
            >
              <BsGithub className="inline-block mr-[10px] w-[20px] h-[20px]"></BsGithub>
              <span>View Github</span>
            </ButtonPrimary>
          </div>
        </div>
        <div
          data-scroll
          data-scroll-speed="3"
          className="border-[#888] border-2 lg:h-fit rounded-[20px] overflow-hidden lg:order-1"
        >
          <div className="border-black border-[8px]">
            <img
              src={IMG2}
              alt="gboxstudio"
              className="w-full h-auto rounded-[12px]"
            />
          </div>
        </div>
      </div>
      <div className="page-container mt-10 md:mt-20 md:mb-40 flex flex-col-reverse md:min-h-[40vh] lg:grid lg:grid-cols-[40%_60%] lg:gap-5">
        <div className="flex flex-col md:mt-4 justify-center">
          <h3 className="text-3xl mt-8 md:mt-0">Wooder Landing Page</h3>
          <div className="flex gap-[10px] my-4 lg:my-8">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.w3schools.com/html/"
            >
              <img
                src="https://cdn.jsdelivr.net/gh/PKief/vscode-material-icon-theme@main/icons/html.svg"
                alt=""
                className="w-[30px] h-[30px] transition duration-300 group-hover:scale-110"
              />
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.w3schools.com/css/"
            >
              <img
                src="https://cdn.jsdelivr.net/gh/PKief/vscode-material-icon-theme@main/icons/css.svg"
                alt=""
                className="w-[30px] h-[30px] transition duration-300 group-hover:scale-110"
              />
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://sass-lang.com/"
            >
              <img
                src="https://sass-lang.com/assets/img/logos/logo-b6e1ef6e.svg"
                alt=""
                className="w-[30px] h-[30px] transition duration-300 group-hover:scale-110"
              />
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.javascript.com/"
            >
              <img
                src="https://cdn.jsdelivr.net/gh/PKief/vscode-material-icon-theme@main/icons/javascript.svg"
                alt=""
                className="w-[30px] h-[30px] transition duration-300 group-hover:scale-110"
              />
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://flickity.metafizzy.co/"
            >
              <img
                src="https://sotaydoanhtri.com/wp-content/uploads/2019/11/Flickity.png"
                alt=""
                className="w-[30px] h-[30px] transition duration-300 group-hover:scale-110"
              />
            </a>
          </div>
          <div>
            <ButtonTrans
              href="https://daotoanthang.github.io/wooder/"
              target="_blank"
              className="px-3 py-3 mr-[20px]"
            >
              <BiLinkExternal className="inline-block mr-[10px] w-[20px] h-[20px]"></BiLinkExternal>
              <span>Live Demo</span>
            </ButtonTrans>
            <ButtonPrimary
              href="https://github.com/daotoanthang/wooder"
              target="_blank"
              className="px-3 py-3"
            >
              <BsGithub className="inline-block mr-[10px] w-[20px] h-[20px]"></BsGithub>
              <span>View Github</span>
            </ButtonPrimary>
          </div>
        </div>
        <div
          data-scroll
          data-scroll-speed="3"
          className="border-[#888] border-2 lg:h-fit rounded-[20px] overflow-hidden"
        >
          <div className="border-black border-[8px]">
            <img
              src={IMG3}
              alt="wooderlandingpage"
              className="w-full h-auto rounded-[12px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;

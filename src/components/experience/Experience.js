import React from "react";

const dataSkills = [
  {
    id: 1,
    name: "HTML5",
    link: "https://www.w3schools.com/html/",
    path: "https://cdn.jsdelivr.net/gh/PKief/vscode-material-icon-theme@main/icons/html.svg",
  },
  {
    id: 2,
    name: "CSS",
    link: "https://www.w3schools.com/css/",
    path: "https://cdn.jsdelivr.net/gh/PKief/vscode-material-icon-theme@main/icons/css.svg",
  },
  {
    id: 3,
    name: "SCSS",
    link: "https://sass-lang.com/guide",
    path: "https://sass-lang.com/assets/img/logos/logo-b6e1ef6e.svg",
  },
  {
    id: 4,
    name: "Javascript",
    link: "https://www.javascript.com/",
    path: "https://cdn.jsdelivr.net/gh/PKief/vscode-material-icon-theme@main/icons/javascript.svg",
  },
  {
    id: 5,
    name: "React",
    link: "https://reactjs.org/",
    path: "https://cdn.jsdelivr.net/gh/PKief/vscode-material-icon-theme@main/icons/react.svg",
    react:
      "https://cdn.jsdelivr.net/gh/PKief/vscode-material-icon-theme@main/icons/react.svg",
  },
  {
    id: 6,
    name: "TailwindCSS",
    link: "https://tailwindcss.com/",
    path: "https://cdn.jsdelivr.net/gh/PKief/vscode-material-icon-theme@main/icons/tailwindcss.svg",
  },

  {
    id: 7,
    name: "Npm",
    link: "https://www.npmjs.com/",
    path: "https://cdn.iconscout.com/icon/free/png-256/npm-3521612-2945056.png",
  },
  {
    id: 8,
    name: "Vite",
    link: "https://vitejs.dev/",
    path: "https://vitejs.dev/logo-with-shadow.png",
  },
  {
    id: 9,
    name: "Git",
    link: "https://github.com/",
    path: "https://evon.dev/skills/github.png",
  },
  {
    id: 10,
    name: "VSCode",
    link: "https://code.visualstudio.com/",
    path: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/2048px-Visual_Studio_Code_1.35_icon.svg.png",
  },
  {
    id: 11,
    name: "Photoshop",
    link: "https://www.adobe.com/vn_vi/products/photoshop.html",
    path: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Adobe_Photoshop_CC_icon.svg/640px-Adobe_Photoshop_CC_icon.svg.png",
  },
  {
    id: 12,
    name: "Figma",
    link: "https://www.figma.com/",
    path: "https://evon.dev/skills/figma.png",
  },
];

const Experience = () => {
  return (
    <section id="experience" className="">
      <h5 data-scroll data-scroll-direction="horizontal" data-scroll-speed="-1">
        The Skills I Have
      </h5>
      <h2
        data-scroll
        data-scroll-direction="horizontal"
        data-scroll-speed="1"
        className="md:mb-[3rem]"
      >
        My skills & Knowledge
      </h2>
      <div className="page-container grid justify-content grid-cols-3 gap-y-[30px] md:grid-cols-4 md:gap-y-[50px] md:px-[10vw]">
        {dataSkills.length > 0 &&
          dataSkills.map((item) => (
            <a
              key={item.id}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="item flex flex-col items-center justify-between group cursor-pointer"
            >
              <img
                src={item.path}
                alt={item.name}
                className="w-[60px] h-[60px] transition duration-300 group-hover:scale-110"
              />
              <p className="text-center mt-1">{item.name}</p>
            </a>
          ))}
      </div>
    </section>
  );
};

export default Experience;

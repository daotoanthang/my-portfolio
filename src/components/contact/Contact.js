import React, { useRef } from "react";
import emailjs from "emailjs-com";

const socialsLink = [
  {
    id: 1,
    name: "Github",
    path: "https://evon.dev/skills/github.png",
    link: "https://github.com/daotoanthang",
    alt: "daotoanthanggithub",
  },
  {
    id: 2,
    name: "Facebook",
    path: "https://napthedev.com/facebook.png",
    link: "https://www.facebook.com/Profile.D2T",
    alt: "daotoanthangfacebook",
  },
  {
    id: 3,
    name: "Instagram",
    path: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/640px-Instagram_icon.png",
    link: "https://www.instagram.com/dtwthang/",
    alt: "daotoanthanginstagram",
  },
  {
    id: 4,
    name: "LinkedIn",
    path: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/LinkedIn_icon.svg/2048px-LinkedIn_icon.svg.png",
    link: "https://www.linkedin.com/in/daotoanthang/",
    alt: "daotoanthanglinkedin",
  },
];

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ukqsvyf",
        "template_l7n2gnp",
        form.current,
        "wNhcRX_p2Mid3g87D"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };
  return (
    <section id="contact" className="pb-16">
      <h5>Get In Touch</h5>
      <h2 className="md:mb-[3rem]">Contact Me</h2>
      <div
        data-scroll
        data-scroll-speed="1"
        className="page-container grid gap-5 md:grid-cols-[55%_35%] md:gap-[10%] lg:grid-cols-[55%_35%] lg:gap-[12%]"
      >
        <form
          ref={form}
          onSubmit={sendEmail}
          className="flex flex-col gap-[1.2rem]"
        >
          <input
            type="text"
            name="name"
            placeholder="Tom Dwan"
            className="w-full p-6 outline-none rounded-lg bg-transparent border-2 border-solid border-primaryVariant resize-none text-white"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="tomdwan@gmail.com"
            required
            className="w-full p-6 outline-none rounded-lg bg-transparent border-2 border-solid border-primaryVariant resize-none text-white "
          />
          <textarea
            name="message"
            cols="30"
            rows="7"
            placeholder="Your message"
            className="w-full p-6 outline-none rounded-lg bg-transparent border-2 border-solid border-primaryVariant resize-none text-white "
            required
          ></textarea>
          <button
            className="no-underline w-max inline-block text-bgColor bg-primary px-5 py-3 rounded-lg cursor-pointer border border-white transition-all hover:bg-white hover:text-bgColor hover:border-transparent"
            type="submit"
          >
            Send Message
          </button>
        </form>
        <div className="flex flex-col gap-[1.2rem]">
          <h1 className="text-xl">Other places</h1>
          {socialsLink.length > 0 &&
            socialsLink.map((item) => (
              <a
                key={item.id}
                className="cursor-pointer flex gap-3 items-center hover:bg-slate-900 p-2 transition duration-300"
                target="_blank"
                rel="noopener noreferrer"
                href={item.link}
              >
                <img
                  className="w-[30px] h-[30px] rounded-full"
                  src={item.path}
                  alt={item.alt}
                />
                <h1>{item.name}</h1>
              </a>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;

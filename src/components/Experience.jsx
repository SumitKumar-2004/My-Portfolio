import React from "react";
import java from "../../public/java.png";
import c from "../../public/c.jpeg";
import cpp from "../../public/cpp.jpg";
import html from "../../public/html.jpeg";
import css from "../../public/css.jpeg";
import js from "../../public/js.png";

function Experience() {
  const cardItem = [
    {
      id: 1,
      logo: html,
      name: "HTML5",
    },
    {
      id: 2,
      logo: css,
      name: "CSS3",
    },
    {
      id: 3,
      logo: js,
      name: "JavaScript",
    },
    {
      id: 4,
      logo: java,
      name: "Java",
    },
    {
      id: 5,
      logo: c,
      name: "C Programming",
    },
    {
      id: 6,
      logo: cpp,
      name: "C++ Programming",
    },
  ];
  return (
    <div name="Experience"
     className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16">
      <div>
        <h1 className="text-3xl font-bold">Experience</h1>
        <p className="font-semibold">
          I've more than 2 years of experience in below technologies
        </p>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-7 my-3">
          {cardItem.map(({ id, logo, name }) => (
            <div
              className="flex flex-col items-center justify-center rounded-full  border-[2px]   md:w-[200px] md:h-[200px] p-1 cursor-pointer hover:scale-110 duration-200"
              key={id}
            >
              <img
                src={logo}
                className="w-[150px] rounded-full "
                alt=""
              />
              <div>
                <div className="">{name}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Experience;

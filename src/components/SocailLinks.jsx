import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs'

const SocailLinks = () => {

    const links = [
      {
        id: 1,
        child: (
          <>
            Linkedin <FaLinkedin size={30} />
          </>
        ),
        herf: "https://www.linkedin.com/feed/",
        style: "rounded-tr-md",
      },
      {
        id: 2,
        child: (
          <>
            GitHub <FaGithub size={30} />
          </>
        ),
        herf: "https://github.com/shanu-sarkar",
      },
      {
        id: 3,
        child: (
          <>
            Mail <HiOutlineMail size={30} />
          </>
        ),
        herf: "mailto: foo@gmail.com",
      },
      {
        id: 4,
        child: (
          <>
            Resume <BsFillPersonLinesFill size={30} />
          </>
        ),
        herf: "/sdfdrsf.pdf",
        download: true,
        style: "rounded-br-md",
      },
    ];

  return (
    <div className="hidden lg:flex flex flex-col top-[35%] left-0 fixed">
      <ul>
        {links.map(({ id, child, herf, style, download }) => (
          <li
            key={id}
            className={`flex justify-between items-center w-40 h-14 px-4 
        ml-[-100px] hover:ml-[-10px] bg-gray-500 hover:rounded-md duration-300 ${style}`}
          >
            <a
              href={herf}
              className="flex justify-between items-center w-full text-white"
              download={download}
              target="_blank"
              rel="noreferror"
            >
              {child}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocailLinks;

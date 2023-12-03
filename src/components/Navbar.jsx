import React from "react";

const Navbar = () => {
  return (
    <div>
      <div className="bg-[#FDF2EC] h-[78px] w-full border-solid border-b-[2px] border-gray-500] box-border flex items-center">
        <img
          src="https://framerusercontent.com/images/tgELERqZ0nObn14bTi418qTbg.png?scale-down-to=512"
          alt=""
          className="h-[44.75px] w-[180px] mx-6"
        />
        <div className="flex relative left-[620px]">
          <a
            href=""
            className="mx-7 text-[17px] font-[600px]  hover:text-blue-600"
          >
            Features
          </a>
          <a
            href=""
            className="mx-7 text-[17px] font-[500px] hover:text-blue-600"
          >
            FAQ
          </a>
          <a
            href=""
            className="mx-7 text-[17px] font-[500px] hover:text-blue-600"
          >
            Pricing
          </a>
          <a
            href=""
            className="mx-7 text-[17px] font-[500px] hover:text-blue-600"
          >
            Testimonials
          </a>
        </div>
        <button className="flex items-center mx-7 box-border bg-white text-black font-serif font-[600] px-[20px] py-[11px] cursor-pointer border-[1px] border-gray-200 rounded-xl hover:border-black relative left-[625px] hover:duration-300">
          <p className=" font-outfit sans-serif text-[17px] font-[600]">
            Buy Template
          </p>
        </button>
      </div>
    </div>
  );
};

export default Navbar;

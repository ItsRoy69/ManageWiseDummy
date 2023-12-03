import React from "react";
import "../styles/testimonials.css";
import Marquee from "react-fast-marquee";
import prof from "../images/prof2.webp"

const Testimonials = () => {
  return (
    <div className="bg-white">
      <div className="flex flex-col items-start ml-[150px]">
        <div>
          <p className="flex bg-white py-1 text-indigo-500 px-3 text-[13px] font-outfit sans-serif font-[600] tracking-wide border-2 border-indigo-100 rounded-lg ">
            <p className="h-[23px] w-[21px] text-[18px] m-[-4px] mr-[8px] mb-[-1px] ml-0p">
              🧡
            </p>
            TESTIMONIALS
          </p>{" "}
        </div>

        <div className="text-[56px] font-normal w-[1200px] h-[170]  box-border leading-[56px] pt-4 pb-1 font-outfit sans-serif tracking-[-1px] font-[500]">
          Hear from our <span className="text-[#FE8162]">Satisfied</span>{" "}
          clients.
        </div>

        <div className="max-w-[500px] max-h-[70px]   text-[20px] font-[500] text-[#4A7575] tracking-[-0.5px] my-4">
          Discover why our clients love working with us. Read their testimonials
          and learn how we has helped businesses.
        </div>
      </div>
      <div className="body relative bottom-[150px]">
        <Marquee direction="right">
          <div className=" flex w-[1700px] ml-10 gap-10 mt-20">
            <div className=" border-2 border-[#EDEDFA] rounded-3xl flex flex-col w-1/4 px-5  py-10 gap-10">
              <p className="font-inter text-[#1c1c1c] text-lg font-semibold   w-[80%]">
                {" "}
                "Using this product has been a game-changer for our team. The
                collaboration features and intuitive interface have greatly
                improved our productivity."
              </p>

              <div className="flex items-center gap-3">
                <img
                  src={prof}
                  alt=""
                  className="w-[50px]"
                />
                <div className="flex flex-col font-inter">
                  <p className="text-lg font-semibold">David</p>
                  <p className="text-[#767575] font-semibold"> Freelancer</p>
                </div>
              </div>
            </div>

            <div className=" border-2 border-[#EDEDFA] rounded-3xl flex flex-col w-1/4 px-5  py-10 gap-10">
              <p className="font-inter text-[#1c1c1c] text-lg font-semibold  w-[90%]">
                {" "}
                "I can't imagine running my business without this product. The
                automation features have saved me hours of manual work, allowing
                me to focus on strategic tasks. "
              </p>

              <div className="flex items-center gap-3">
                <img
                  src={prof}
                  alt=""
                  className="w-[50px]"
                />
                <div className="flex flex-col font-inter">
                  <p className="text-lg font-semibold"> Alex</p>
                  <p className="text-[#767575] font-semibold"> IT Manager</p>
                </div>
              </div>
            </div>
            <div className=" border-2 border-[#EDEDFA] rounded-3xl flex flex-col w-1/4 px-5  py-10 gap-10">
              <p className="font-inter text-[#1c1c1c] text-lg font-semibold w-[90%]">
                {" "}
                "Manage Wise transformed our team's productivity. The intuitive
                interface and powerful features have made a significant impact
                on our daily operations"
              </p>

              <div className="flex items-center gap-3">
                <img
                  src={prof}
                  alt=""
                  className="w-[50px]"
                />
                <div className="flex flex-col font-inter">
                  <p className="text-lg font-semibold">Emily</p>
                  <p className="text-[#767575] font-semibold"> Art Director</p>
                </div>
              </div>
            </div>

            <div className=" border-2 border-[#EDEDFA] rounded-3xl flex flex-col w-1/4 px-5  py-10 gap-10">
              <p className="font-inter text-[#1c1c1c] text-lg font-semibold  w-[90%]">
                {" "}
                "The customer support team behind this product is exceptional.
                They have been incredibly responsive and helpful, addressing any
                questions or concerns promptly.
              </p>

              <div className="flex items-center gap-3">
                <img
                  src={prof}
                  alt=""
                  className="w-[50px]"
                />
                <div className="flex flex-col font-inter">
                  <p className="text-lg font-semibold"> Sarah</p>
                  <p className="text-[#767575] font-semibold">
                    Project Manager
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Marquee>
      </div>
    </div>
  );
};

export default Testimonials;

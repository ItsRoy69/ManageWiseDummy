import React, { useState, useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import { FaArrowCircleRight, FaPlayCircle } from "react-icons/fa";

export const Header = () => {
  const [hovered, setHovered] = useState(false);
  const [scale, setScale] = useState(1);
  const imageRef = useRef(null);
  const controls = useAnimation();

  const handleScroll = () => {
    const newScale = Math.min(1 + window.scrollY / 1000, 1.2);
    setScale(newScale);

    const imagePosition = document
      .querySelector(".image-container")
      .getBoundingClientRect().top;
    if (imagePosition < window.innerHeight * 0.75) {
      controls.start({ opacity: 1, y: 0 });
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <div className="bg-gradient-to-b from-[#FDF2EC] to-[white] flex flex-col items-center pt-24">
        <div>
          <p className="flex bg-white px-3 py-1 text-indigo-500 text-[13px] font-outfit sans-serif font-[600] tracking-wide border-2 border-indigo-100 rounded-lg min-w-[239px]">
            <p className="h-[23px] w-[21px] text-[18px] m-[-4px] mr-[8px] mb-[-1px] ml-0p">
              👋
            </p>{" "}
            WELCOME TO MANAGE WISE!
          </p>{" "}
        </div>
        <div className="text-[85px] font-normal w-[1200px] h-[170] text-center box-border px-20 leading-[85px] py-4 font-outfit sans-serif tracking-[-2px]">
          Empower your business with{" "}
          <span className="text-[#FE8162]">stategic</span> insights
        </div>
        <div className="max-w-[700px] max-h-[70px] px-6 text-center text-[20px] font-[500] text-[#4A7575] tracking-[-0.5px] my-4">
          Powerful management platform designed to streamline your business
          operations, boost productivity, and drive success
        </div>
        <div className="flex">
          <div className="flex">
            <div className="hero_buttons">
              <button
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
              >
                <h1
                  className={`w-48 h-14 flex justify-center items-center bg-[#824dff] text-xl font-semibold text-white rounded-2xl hover:shadow-purple transition-shadow duration-300`}
                  style={{
                    transition: "color 0.3s ease, transform 0.3s ease",
                    transform: `translateX(${hovered ? "10px" : "0"})`,
                  }}
                >
                  Get Started
                  <FaArrowCircleRight
                    size={"1.3rem"}
                    className={`transition-all duration-1000 ${
                      hovered ? "flex right-2" : "hidden -right-10"
                    }`}
                  />
                </h1>
              </button>
            </div>
            <div>
              <button className=" w-48 h-14 flex justify-center items-center gap-2 bg-white text-xl font-semibold text-black rounded-2xl">
                Whatch Demo <FaPlayCircle size={"1.3rem"} />
              </button>
            </div>
          </div>
        </div>
        <div className="my-[80px] mx-[2px] shadow-2xl rounded-[26px]">
          <img
            ref={imageRef}
            className="h-[600px] w-[1000px] rounded-[26px] transition-transform duration-300"
            src="https://framerusercontent.com/images/t9qCSNfZSNdBCMSiohCGNEIl4.jpg?scale-down-to=2048"
            style={{ transform: `scale(${scale})` }}
            alt=""
          />
        </div>
      </div>
      <div className="bg-white flex flex-col items-center pt-24">
        <div>
          <p className="flex bg-white px-3 py-1 text-indigo-500 text-[13px] font-outfit sans-serif font-[600] tracking-wide border-2 border-indigo-100 rounded-lg ">
            <p className="h-[23px] w-[21px] text-[18px] m-[-4px] mr-[8px] mb-[-1px] ml-0p">
              🔥
            </p>
            PREMIER FEATURES
          </p>{" "}
        </div>

        <div className="text-[56px] font-normal w-[1200px] h-[170] text-center box-border px-20 leading-[56px] py-4 font-outfit sans-serif tracking-[-1px] font-[500]">
          Discover our product's{" "}
          <span className="text-[#FE8162]">Capabilities</span>
        </div>

        <div className="max-w-[700px] max-h-[70px] px-6 text-center text-[20px] font-[500] text-[#4A7575] tracking-[-0.5px] my-4">
          Don't settle for mediocrity - embrace the future of management with
          Manage Wise.
        </div>

        <div className="max-w-[1200px] flex justify-center gap-[40px] m-10">
          <div className="flex flex-col bg-[#EDEDFA] w-[964px] rounded-2xl">
            <div className="pt-20">
              <p className=" inline text-[28px] bg-white relative left-[35px] p-[6px] rounded-[15px]">
                ⭐️
              </p>
              <p className="font-outfit sans-serif py-[24px] px-[33px] tracking-[-1px] leading-[54.6px] text-[42px]">
                Boost productivity and streamline workflow with us. Enjoy our
                intuitive interface and robust features.
              </p>
            </div>
          </div>
          <div className="flex flex-col min-h-[446] w-[564] bg-white border-[2px] rounded-[20px]  border-[#EEEEFA]">
            <img
              className=""
              src="https://framerusercontent.com/images/qJeaFhSmQ29M1S55GRW5kYb4.png?scale-down-to=1024"
              alt=""
            />
            <div className="mx-5 my-3">
              <div className="text-[25px] font-normal text-left box-border leading-[32.5px] pt-4 pb-2 font-outfit sans-serif tracking-[-0.5px]">
                {" "}
                <p className="font-[600]">Smart Task Management</p>
              </div>
              <div className="  text-[16px] font-[600] text-[#4A7575] tracking-[-0.5px] ">
                Say goodbye to chaos with our smart task management system
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center box-border max-w-[1250px] mb-20">
          <div className="flex flex-col m-6 bg-white border-[2px] rounded-[20px] border-[#EEEEFA]">
            <img
              className=""
              src="https://framerusercontent.com/images/LFrHT3kBfxtMGAZfWkyLvYAKsbg.png?scale-down-to=512"
              alt=""
            />
            <div className="mx-5 mt-4">
              <div className="text-[25px] font-normal text-left box-border leading-[32.5px] pt-4 pb-2 font-outfit sans-serif tracking-[-0.5px]">
                {" "}
                <p className="font-[600]">Flexible Scheduling</p>
              </div>
              <div className="  text-[16px] font-[600] text-[#4A7575] tracking-[-0.5px] ">
                Stay productive with our flexible scheduling system
              </div>
            </div>
          </div>
          <div className="flex flex-col m-6  bg-white border-[2px] rounded-[20px] border-[#EEEEFA]">
            <img
              className=""
              src="https://framerusercontent.com/images/p65qwfjd0cd0ZHZoNFpsh7XU.png?scale-down-to=512"
              alt=""
            />
            <div className="mx-5 my-3">
              <div className="text-[25px] font-normal text-left box-border leading-[32.5px] pt-4 pb-2 font-outfit sans-serif tracking-[-0.5px]">
                {" "}
                <p className="font-[600]">Easy Communication</p>
              </div>
              <div className="  text-[16px] font-[600] text-[#4A7575] tracking-[-0.5px] ">
                Collaborate seamlessly with your team in real-time
              </div>
            </div>
          </div>
          <div className="flex flex-col m-6 bg-white border-[2px] rounded-[20px] border-[#EEEEFA]">
            <img
              className=""
              src="https://framerusercontent.com/images/FaY6aekE67ytWg6HDfDpy2FaHY.png?scale-down-to=512"
              alt=""
            />
            <div className="mx-5 my-3">
              <div className="text-[25px] font-normal text-left box-border leading-[32.5px] pt-4 pb-2 font-outfit sans-serif tracking-[-0.5px]">
                {" "}
                <p className="font-[600]">Analytics</p>
              </div>
              <div className="  text-[16px] font-[600] text-[#4A7575] tracking-[-0.5px] ">
                Gain valuable insights with our advanced analytics feature
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#1C1C1C] text-white flex flex-col items-start">
        <div className="flex flex-col items-start pl-[160px] pt-[120px] ">
          <div className="">
            <p className="flex bg-white px-3 py-1 text-indigo-500 text-[13px] font-outfit sans-serif font-[600] tracking-wide border-2 border-indigo-100 rounded-lg ">
              <p className="h-[23px] w-[21px] text-[18px] m-[-4px] mr-[8px] mb-[-1px] ml-0p">
                🤩
              </p>
              AND MORE..
            </p>{" "}
          </div>

          <div className="text-[56px] font-normal w-[1200px] h-[170] box-border  leading-[56px] pt-4 font-outfit sans-serif tracking-[-1px] font-[500]">
            Explore an array of features that elevate your{" "}
            <span className="text-[#FE8162]">Productivity</span> to new heights{" "}
          </div>

          <div className="max-w-[700px] max-h-[70px] w-[550px]  text-[20px] font-[500] text-[#4A7575] tracking-[-0.5px] my-4">
            Discover the tools that will revolutionize the way you manage and
            optimize your operations
          </div>
          <div className="flex flex-col items-center mt-20">
            <div className="flex justify-center box-border max-w-[1250px] mb-20 relative right-7">
              <div className="flex flex-col box-border items-center m-6 bg-[#212121] rounded-[20px] ">
                <div className="bg-[#8247FF] p-[21px] rounded-[25px] mt-[44px] mb-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    width="18"
                    viewBox="0 0 384 512"
                  >
                    <path
                      fill="#ffffff"
                      d="M80 0C44.7 0 16 28.7 16 64V448c0 35.3 28.7 64 64 64H304c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H80zm80 432h64c8.8 0 16 7.2 16 16s-7.2 16-16 16H160c-8.8 0-16-7.2-16-16s7.2-16 16-16z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-[25px] text-center tracking-[0.5px] font-[600] font-outfit sans-serif px-5">
                    Cross-Platform Compatibility
                  </p>
                </div>
                <div>
                  <p className="text-[#767575] text-center px-7 my-5">
                    Enjoy the flexibility of cross-platform compatibility. Our
                    product works seamlessly across desktop, web, and mobile
                    devices, allowing you to work from your preferred device.
                  </p>
                </div>
              </div>
              <div className="flex flex-col box-border items-center m-6 bg-[#212121] rounded-[20px] ">
                <div className="bg-[#8247FF] p-[21px] rounded-[25px] mt-[44px] mb-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    width="21"
                    viewBox="0 0 448 512"
                  >
                    <path
                      fill="#ffffff"
                      d="M224 0c-17.7 0-32 14.3-32 32V51.2C119 66 64 130.6 64 208v18.8c0 47-17.3 92.4-48.5 127.6l-7.4 8.3c-8.4 9.4-10.4 22.9-5.3 34.4S19.4 416 32 416H416c12.6 0 24-7.4 29.2-18.9s3.1-25-5.3-34.4l-7.4-8.3C401.3 319.2 384 273.9 384 226.8V208c0-77.4-55-142-128-156.8V32c0-17.7-14.3-32-32-32zm45.3 493.3c12-12 18.7-28.3 18.7-45.3H224 160c0 17 6.7 33.3 18.7 45.3s28.3 18.7 45.3 18.7s33.3-6.7 45.3-18.7z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-[25px] text-center tracking-[0.5px] font-[600] font-outfit sans-serif px-5">
                    Stay Informed with Essential Notifications
                  </p>
                </div>
                <div>
                  <p className="text-[#767575] text-center px-7 my-5">
                    Automate support from first customer contact to closing the
                    ticket. Drastically improve time to resolution.Automate
                    support from first customer contact to closing the ticket.
                  </p>
                </div>
              </div>
              <div className="flex flex-col box-border items-center m-6 bg-[#212121] rounded-[20px] ">
                <div className="bg-[#8247FF] p-[21px] rounded-[25px] mt-[44px] mb-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    width="21"
                    viewBox="0 0 448 512"
                  >
                    <path
                      fill="#ffffff"
                      d="M159.3 5.4c7.8-7.3 19.9-7.2 27.7 .1c27.6 25.9 53.5 53.8 77.7 84c11-14.4 23.5-30.1 37-42.9c7.9-7.4 20.1-7.4 28 .1c34.6 33 63.9 76.6 84.5 118c20.3 40.8 33.8 82.5 33.8 111.9C448 404.2 348.2 512 224 512C98.4 512 0 404.1 0 276.5c0-38.4 17.8-85.3 45.4-131.7C73.3 97.7 112.7 48.6 159.3 5.4zM225.7 416c25.3 0 47.7-7 68.8-21c42.1-29.4 53.4-88.2 28.1-134.4c-4.5-9-16-9.6-22.5-2l-25.2 29.3c-6.6 7.6-18.5 7.4-24.7-.5c-16.5-21-46-58.5-62.8-79.8c-6.3-8-18.3-8.1-24.7-.1c-33.8 42.5-50.8 69.3-50.8 99.4C112 375.4 162.6 416 225.7 416z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-[25px] text-center tracking-[0.5px] font-[600] font-outfit sans-serif px-5">
                    Secure Data Encryption at all times
                  </p>
                </div>
                <div>
                  <p className="text-[#767575] text-center px-7 my-5">
                    Trust in our robust data encryption to keep your sensitive
                    information safe and secure. Rest easy knowing your data is
                    protected at all times.
                  </p>
                </div>
              </div>
            </div>

            <div className="">
              <p className="flex bg-white px-3 py-1 text-indigo-500 text-[13px] font-outfit sans-serif font-[600] tracking-wide border-2 border-indigo-100 rounded-lg ">
                INTEGRATIONS
              </p>{" "}
            </div>

            <div className="text-[56px] font-normal w-[600px] text-center h-[170] box-border  leading-[56px] pt-4 font-outfit sans-serif tracking-[-1px] font-[500]">
              Enable <span className="text-[#FE8162]">integration</span> with
              other popular tools and platforms{" "}
            </div>

            <div className="max-w-[700px] max-h-[70px] w-[450px] text-center text-[20px] font-[500] text-[#767575] tracking-[-0.5px] my-4">
              Discover the tools that will revolutionize the way you manage and
              optimize your operations
            </div>

            <div className="image-container">
              <motion.img
                initial={{ opacity: 0, y: 50 }}
                animate={controls}
                transition={{ duration: 0.2 }}
                className="h-[273px] w-[580px]"
                src="https://framerusercontent.com/images/sQd7MkwgkdQRRQ1a99k5Z1zLfA.png?scale-down-to=1024"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

import React from "react";
import { motion } from "framer-motion";
export const Footer = () => {
  return (
    <div className="bg-gradient-to-b from-[white] to-[#FDF2EC] relative bottom-48">
      <main className="w-full h-full  flex justify-center  items-center pb-16 px-5">
        <section className="lg:max-w-6xl w-full lg:p-0 pt-32 bg-white lg:py-24 py-10 px-10 flex lg:flex-row flex-col border rounded-3xl lg:px-24">
          <div className="flex w-full lg:w-3/4 items-center justify-center rounded-3xl flex-col lg:py-0 py-10 gap-4">
            <motion.p
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.1 }}
              className="bg-white w-fit text-[#7d6da2] border rounded-md text-sm px-3 py-1 font-medium"
            >
              👋 DON'T MISS OUT
            </motion.p>
            <motion.h1
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.2 }}
              className=" text-4xl text-center lg:text-5xl max-w-2xl font-semibold"
            >
              Unleash your <span className="text-[#fe8162]">Potential </span>
              with us
            </motion.h1>
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.3 }}
              className=" w p-2"
            >
              <h2 className="text-xl font-semibold text-gray-500 ">
                Join our community of ambitious individuals and organizations
                eager to make a difference.
              </h2>
            </motion.div>
            <motion.button
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.5 }}
              className="w-fit h-fit px-10 py-3 text-xl bg-[#8247ff] rounded-2xl text-white font-semibold "
            >
              Try out now
            </motion.button>
          </div>
          <div className="w-full h-full flex flex-col justify-center lg:pt-10 items-center gap-7 ">
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.4 }}
              className="border px-5 py-2 w-fit h-fit shadow-md rounded-xl"
            >
              <h1 h1 className="text-blue-700 text-2xl font-bold">
                {" "}
                200+ <span className="text-black">Happy users</span>
              </h1>
            </motion.div>

            <motion.div
              variants={{
                hidden: { opacity: 0, scaleX: 0.9 },
                visible: { opacity: 1, scaleX: 1 },
              }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.1 }}
              className="relative w-11/12 "
            >
              <img
                className="w-full h-full object-cover relative overflow-auto"
                src="https://framerusercontent.com/images/S4kVG1FFzSqxr8zOqpvJRfsBad0.png?scale-down-to=1024"
                alt="users"
              />
              <img
                src="https://framerusercontent.com/images/584hzJDnWCS5SFABKjaCzgDspY.png?scale-down-to=512"
                className=" absolute w-full h-full inset-0"
                alt="banner"
              />{" "}
            </motion.div>
          </div>
        </section>
      </main>
      <div>
        <div className="bg-[#FDF2EC] h-[78px] w-full box-border flex py-4  relative top-11">
          <img
            src="https://framerusercontent.com/images/tgELERqZ0nObn14bTi418qTbg.png?scale-down-to=512"
            alt=""
            className="h-[44.75px] w-[180px] mx-48"
          />
          <div className="flex flex-col gap-3 relative left-[620px]">
            <a
              href=""
              className="mx-7 text-[17px] font-[500]  hover:text-blue-600"
            >
              Features
            </a>
            <a
              href=""
              className="mx-7 text-[17px] font-[500] hover:text-blue-600"
            >
              FAQ
            </a>
            <a
              href=""
              className="mx-7 text-[17px] font-[500] hover:text-blue-600"
            >
              Pricing
            </a>
            <a
              href=""
              className="mx-7 text-[17px] font-[500] hover:text-blue-600"
            >
              Testimonials
            </a>
          </div>
        </div>

        <div className="bg-[#FDF2EC] h-[78px] w-full border-solid border-[2px] border-gray-500] box-border flex items-center relative top-48">
          <div className="relative left-40">© 2022 ManageWise, Inc.</div>
          <div className="flex relative left-[1000px] gap-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24"
              width="21"
              viewBox="0 0 448 512"
            >
              <path
                fill="#090101"
                d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
              />
            </svg>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24"
              width="24"
              viewBox="0 0 512 512"
            >
              <path
                fill="#000000"
                d="M459.4 151.7c.3 4.5 .3 9.1 .3 13.6 0 138.7-105.6 298.6-298.6 298.6-59.5 0-114.7-17.2-161.1-47.1 8.4 1 16.6 1.3 25.3 1.3 49.1 0 94.2-16.6 130.3-44.8-46.1-1-84.8-31.2-98.1-72.8 6.5 1 13 1.6 19.8 1.6 9.4 0 18.8-1.3 27.6-3.6-48.1-9.7-84.1-52-84.1-103v-1.3c14 7.8 30.2 12.7 47.4 13.3-28.3-18.8-46.8-51-46.8-87.4 0-19.5 5.2-37.4 14.3-53 51.7 63.7 129.3 105.3 216.4 109.8-1.6-7.8-2.6-15.9-2.6-24 0-57.8 46.8-104.9 104.9-104.9 30.2 0 57.5 12.7 76.7 33.1 23.7-4.5 46.5-13.3 66.6-25.3-7.8 24.4-24.4 44.8-46.1 57.8 21.1-2.3 41.6-8.1 60.4-16.2-14.3 20.8-32.2 39.3-52.6 54.3z"
              />
            </svg>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24"
              width="21"
              viewBox="0 0 448 512"
            >
              <path
                fill="#000000"
                d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

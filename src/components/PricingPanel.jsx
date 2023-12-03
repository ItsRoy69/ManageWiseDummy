import { useEffect } from "react";
import image1 from "../images/svg1.png";
import { motion, useAnimation } from "framer-motion";

const PricingPanel = () => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({ opacity: 1, y: 0 }); 
  }, [controls]);

  return (
    <div className="bg-white flex flex-col items-center pt-24">
      <div>
        <p className="flex bg-white px-3 py-1 text-indigo-500 text-[13px] font-outfit sans-serif font-[600] tracking-wide border-2 border-indigo-100 rounded-lg ">
          <p className="h-[23px] w-[21px] text-[18px] m-[-4px] mr-[8px] mb-[-1px] ml-0p">
            💲
          </p>
          PRICING
        </p>{" "}
      </div>

      <div className="text-[56px] font-normal w-[1200px] h-[170] text-center box-border px-20 leading-[56px] pt-4 pb-1 font-outfit sans-serif tracking-[-1px] font-[500]">
        Select your ideal <span className="text-[#FE8162]">Pricing</span> plan
      </div>

      <div className="max-w-[500px] max-h-[70px] px-6 text-center text-[20px] font-[500] text-[#4A7575] tracking-[-0.5px] my-4">
        At Manage Wise, we believe in providing you with pricing plans that
        adapt to your unique needs.
      </div>

      <div className="flex justify-center box-border max-w-[1200px] mb-20 gap-0">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={controls}
          transition={{ duration: 0.5 }}
          className="pricing-1 flex flex-col m-6 bg-[#EDEDFA] border-[2px] rounded-[30px] border-[#EEEEFA] "
        >
          {" "}
          <div>
            <p className="inline bg-white px-3 py-1 my-10 mx-3 text-[#FE8567] text-[13px] font-outfit sans-serif font-[600] tracking-wide border-2 border-indigo-100 rounded-lg relative left-[48px] top-[40px]">
              FREE
            </p>{" "}
          </div>
          <div className=" mx-5 mt-4 flex flex-col justify-start">
            <div className="flex text-[56px] w-[350px] font-normal text-left box-border leading-[32.5px] pt-4 pb-2 font-outfit sans-serif tracking-[-0.5px] relative top-10 left-10">
              <p className="font-[500]">$0</p>
              <p className="text-lg relative top-3">/month</p>
            </div>
            <div className="mx-auto mt-12 mb-10 relative right-[19px]">
              <div className="flex text-[#767575] text-[17px] font-[500] leading-[24px] my-3">
                <img src={image1} alt="" /> Access to all basic features
              </div>
              <div className="flex text-[#767575] text-[16px] font-[500] leading-[24px] my-3">
                <img src={image1} alt="" /> Reporting and analytics
              </div>
              <div className="flex text-[#767575] text-[16px] font-[500] leading-[24px] my-3">
                <img src={image1} alt="" /> Up to 5 individual users
              </div>
              <div className="flex text-[#767575] text-[16px] font-[500] leading-[24px] my-3">
                <img src={image1} alt="" /> Chat and email support
              </div>
            </div>

            <div>
              <button className="bg-white text-black px-[30px] py-[10px] mx-5 rounded-[14px] border-[1px] border-gray-300 hover:border-black hover:duration-300 flex-shrink-0 relative left-[14px] bottom-[21px]">
                <p className="text-[20px] font-[600]">Get Started</p>
              </button>
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={controls}
          transition={{ duration: 0.5 }}
          className="pricing-2 flex flex-col m-6 bg-[black] text-shite border-[2px] rounded-[30px] border-[#EEEEFA] "
        >
          <div>
            <p className="inline bg-white px-3 py-1 my-10 mx-3 text-[#FE8567] text-[13px] font-outfit sans-serif font-[600] tracking-wide border-2 border-indigo-100 rounded-lg relative left-[48px] top-[40px]">
              STANDARD
            </p>{" "}
          </div>

          <div className=" mx-5 mt-4 flex flex-col justify-start">
            <div className="flex text-[56px] w-[350px] font-normal text-left box-border leading-[32.5px] pt-4 pb-2 font-outfit sans-serif tracking-[-0.5px] relative top-10 left-10">
              <p className="font-[500] text-white">$25</p>
              <p className="text-lg relative top-3 text-white">/month</p>
            </div>
            <div className="mx-auto mt-12 mb-10 relative right-[19px]">
              <div className="flex text-[#767575] text-[17px] font-[500] leading-[24px] my-3">
                <img src={image1} alt="" /> Access to all basic features
              </div>
              <div className="flex text-[#767575] text-[16px] font-[500] leading-[24px] my-3">
                <img src={image1} alt="" /> Reporting and analytics
              </div>
              <div className="flex text-[#767575] text-[16px] font-[500] leading-[24px] my-3">
                <img src={image1} alt="" /> Up to 5 individual users
              </div>
              <div className="flex text-[#767575] text-[16px] font-[500] leading-[24px] my-3">
                <img src={image1} alt="" /> Chat and email support
              </div>
              <div className="flex text-[#767575] text-[16px] font-[500] leading-[24px] my-3">
                <img src={image1} alt="" /> 3+ Integrations
              </div>
              <div className="flex text-[#767575] text-[16px] font-[500] leading-[24px] my-3">
                <img src={image1} alt="" /> Account performance reporting
              </div>
            </div>

            <div>
              <button className="bg-[#8247FF] text-white px-[30px] py-[10px] mx-5 rounded-[14px] hover:border-black hover:duration-300 flex-shrink-0 relative left-[14px] bottom-[21px]">
                <p className="text-[20px] font-[600]">Get Started</p>
              </button>
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={controls}
          transition={{ duration: 0.5 }}
          className="pricing-3 flex flex-col m-6 bg-[#EDEDFA] border-[2px] rounded-[30px] border-[#EEEEFA] "
        >
          <div>
            <p className="inline bg-white px-3 py-1 my-10 mx-3 text-[#FE8567] text-[13px] font-outfit sans-serif font-[600] tracking-wide border-2 border-indigo-100 rounded-lg relative left-[48px] top-[40px]">
              BUSINESS
            </p>{" "}
          </div>

          <div className=" mx-5 mt-4 flex flex-col justify-start">
            <div className="flex text-[56px] w-[350px] font-normal text-left box-border leading-[32.5px] pt-4 pb-2 font-outfit sans-serif tracking-[-0.5px] relative top-10 left-10">
              <p className="font-[500]">$42</p>
              <p className="text-lg relative top-3">/month</p>
            </div>
            <div className="mx-auto mt-12 mb-10 relative right-[19px]">
              <div className="flex text-[#767575] text-[17px] font-[500] leading-[24px] my-3">
                <img src={image1} alt="" /> Access to all basic features
              </div>
              <div className="flex text-[#767575] text-[16px] font-[500] leading-[24px] my-3">
                <img src={image1} alt="" /> Reporting and analytics
              </div>
              <div className="flex text-[#767575] text-[16px] font-[500] leading-[24px] my-3">
                <img src={image1} alt="" /> Up to 5 individual users
              </div>
              <div className="flex text-[#767575] text-[16px] font-[500] leading-[24px] my-3">
                <img src={image1} alt="" /> Chat and email support
              </div>
            </div>

            <div>
              <button className="bg-white text-black px-[30px] py-[10px] mx-5 rounded-[14px] border-[1px] border-gray-300 hover:border-black hover:duration-300 flex-shrink-0 relative left-[14px] bottom-[21px]">
                <p className="text-[20px] font-[600]">Get Started</p>
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default PricingPanel;

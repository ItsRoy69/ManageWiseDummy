import AddIcon from "@mui/icons-material/Add";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";

import '../styles/faq.css'


const FAQ = () => {
  const [accordion, openAccordion] = useState([0, 0, 0, 0, 0]);

  const openAcc = (index) => {
    openAccordion((prevArray) => {
      const newArray = [...prevArray];
      newArray[index] = prevArray[index] === 0 ? 1 : 0;
      return newArray;
    });
  };

  return (
    <div className="bg-white pt-[200px]">
      <div className="faq_content flex justify-center">
        <div className="flex flex-col max-w-[300px] box-border">
          <div className="">
            <p className="flex bg-white px-3 py-1 text-indigo-500 text-[13px] font-outfit sans-serif font-[600] tracking-wide border-2 border-indigo-100 rounded-lg h-[29.6px] w-[77.7px]">
              <p className="h-[23px] w-[21px] text-[18px] m-[-4px] mr-[8px] mb-[-1px] ml-0p">
                🙋‍♀️
              </p>
              FAQs
            </p>{" "}
          </div>

          <div className="text-[56px] pr-[37px] font-normal  w-[400px] box-border  leading-[56px] pt-4 font-outfit sans-serif tracking-[-1px] font-[500]">
            Need <span className="text-[#FE8162]">Answers?</span>
          </div>

          <div className="h-[20px] w-[325px]  text-[20px] font-[500] text-[#4A7575] tracking-[-0.5px] my-4">
            Check out our most commonly asked questions below to find the
            information you need.
          </div>
        </div>
        <div className="right-faq">
          <div className="accordion">
            <div className="accordion-header" onClick={() => openAcc(0)}>
              <h4
                className="accordion-h4"
                style={{
                  color: `${accordion[0] === 1 ? "#8247ff" : "inherit"}`,
                }}
              >
                What is Manage Wise and what does it offer?
              </h4>
              {accordion[0] === 1 ? (
                <CloseIcon width={20} style={{ color: "#8247ff" }} />
              ) : (
                <AddIcon width={20} style={{ color: "#8247ff" }} />
              )}
            </div>

            <p
              className="accordion-p"
              style={{
                display: `${accordion[0] === 1 ? "block" : "none"}`,
              }}
            >
              Manage Wise is a comprehensive management platform designed to
              streamline your business operations, enhance productivity, and
              drive success. It offers a range of features including task
              management, scheduling, communication tools, analytics, and more.
            </p>
          </div>

          <div className="accordion">
            <div className="accordion-header" onClick={() => openAcc(1)}>
              <h4
                className="accordion-h4"
                style={{
                  color: `${accordion[1] === 1 ? "#8247ff" : "inherit"}`,
                }}
              >
                Is Manage Wise suitable for small businesses and larger
                enterprises alike?
              </h4>
              {accordion[1] === 1 ? (
                <CloseIcon width={20} style={{ color: "#8247ff" }} />
              ) : (
                <AddIcon width={20} style={{ color: "#8247ff" }} />
              )}
            </div>
            <p
              className="accordion-p"
              style={{ display: `${accordion[1] === 1 ? "block" : "none"}` }}
            >
              Yes, Manage Wise is designed to cater to the needs of both small
              businesses and larger enterprises. Its scalable features and
              customizable options make it versatile for various business sizes.
            </p>
          </div>

          <div className="accordion">
            <div className="accordion-header" onClick={() => openAcc(2)}>
              <h4
                className="accordion-h4"
                style={{
                  color: `${accordion[2] === 1 ? "#8247ff" : "inherit"}`,
                }}
              >
                Can I access Manage Wise from different devices and platforms?
              </h4>
              {accordion[2] === 1 ? (
                <CloseIcon width={20} style={{ color: "#8247ff" }} />
              ) : (
                <AddIcon width={20} style={{ color: "#8247ff" }} />
              )}
            </div>
            <p
              className="accordion-p"
              style={{ display: `${accordion[2] === 1 ? "block" : "none"}` }}
            >
              Yes, Manage Wise offers cross-platform compatibility, allowing you
              to access and use the platform seamlessly on desktops, web
              browsers, and mobile devices.
            </p>
          </div>

          <div className="accordion">
            <div className="accordion-header" onClick={() => openAcc(3)}>
              <h4
                className="accordion-h4"
                style={{
                  color: `${accordion[3] === 1 ? "#8247ff" : "inherit"}`,
                }}
              >
                What kind of support options do you offer to users?
              </h4>
              {accordion[3] === 1 ? (
                <CloseIcon width={20} style={{ color: "#8247ff" }} />
              ) : (
                <AddIcon width={20} style={{ color: "#8247ff" }} />
              )}
            </div>
            <p
              className="accordion-p"
              style={{ display: `${accordion[3] === 1 ? "block" : "none"}` }}
            >
              We provide responsive customer support via chat and email to
              assist you with any inquiries, issues, or guidance you may need
              while using Manage Wise.
            </p>
          </div>

          <div className="accordion">
            <div className="accordion-header" onClick={() => openAcc(4)}>
              <h4
                className="accordion-h4"
                style={{
                  color: `${accordion[4] === 1 ? "#8247ff" : "inherit"}`,
                }}
              >
                How secure is the data stored within Manage Wise?
              </h4>
              {accordion[4] === 1 ? (
                <CloseIcon width={20} style={{ color: "#8247ff" }} />
              ) : (
                <AddIcon width={20} style={{ color: "#8247ff" }} />
              )}
            </div>
            <p
              className="accordion-p"
              style={{ display: `${accordion[4] === 1 ? "block" : "none"}` }}
            >
              Your data&#39;s security is a top priority. Manage Wise employs
              robust data encryption and follows industry best practices to
              ensure your sensitive information is safe and protected.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;

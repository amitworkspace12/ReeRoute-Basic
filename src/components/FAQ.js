import React from "react";
import Photo from "../images/Photo (2).png";
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';

// Demo styles, see 'Styles' section below for some notes on use.
import 'react-accessible-accordion/dist/fancy-example.css';

const FAQ = () => {
  return (
    <div className="flex flex-col bg-[#F4F4F4] lg:flex-row mb-20 lg:mb-0 font-Rubik">
      <div className="w-full lg:w-[50%] p-10 lg:p-20">
        <div className="border-l-4 border-orange-400 bg-slate-200 px-1 w-[40px]">
          FAQ
        </div>

        <div className="text-2xl font-bold mt-3">Frequently Asked <br/> Questions</div>
        <div className=" mr-3 mt-4">
        <Accordion className="flex flex-col">
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                    How can I pay for your logistics services?
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p className="font-Kurb opacity-70">
                    Leverage agile frameworks to provide a robust synopsis for strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive.
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                    What payment methods are supported?
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p className="font-Kurb opacity-70">
                    Leverage agile frameworks to provide a robust synopsis for strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive.
                    </p>
                </AccordionItemPanel>
            </AccordionItem>

            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                    What options for logistics plans are available?
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p className="font-Kurb opacity-70">
                    Leverage agile frameworks to provide a robust synopsis for strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive.
                    </p>
                </AccordionItemPanel>
            </AccordionItem>

            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                    Can i specify a delivery date when ordering?
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p className="font-Kurb opacity-70">
                    Leverage agile frameworks to provide a robust synopsis for strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive.
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
        </Accordion>
        </div>
      </div>

      <div className=" w-full lg:w-[50%] relative">
        <div className="bg-[#2A4F6D] text-white w-full lg:w-[380px] p-10 absolute lg:-left-[9%] lg:top-[29%]">
          <div className="border-l-4 border-yellow-400 bg-black text-white px-1 w-[100px]">
            Let's Talk
          </div>

          <h2 className="text-xl mt-3">You need any help? get free consultation</h2>

          <div className="flex items-center mt-5">
            <div className="flex w-[45px] h-[45px] bg-black rounded-[50%] text-center items-center justify-center text-white mr-1">
              <i class="fa fa-phone"></i>
            </div>
            <div className="font-Kurb">
              <div>Have any Questions</div>
              <div>(00) 112 365 489</div>
            </div>
          </div>
          <button className="p-2 bg-orange-400 mt-5 text-black text-[16px] font-medium font-Kurb">
            Contact Us
          </button>
        </div>
        <img src={Photo} className="w-full none lg:flex p-5 lg:p-0 lg:w-[600px] lg:ml-10 lg:mt-20"/>
      </div>
    </div>
  );
};

export default FAQ;

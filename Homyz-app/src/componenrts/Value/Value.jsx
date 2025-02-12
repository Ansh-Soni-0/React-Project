import React, { useState } from "react";

import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
  AccordionItemState,
} from "react-accessible-accordion";

// Demo styles, see 'Styles' section below for some notes on use.
import "react-accessible-accordion/dist/fancy-example.css";

import "./Value.css";

import { MdOutlineArrowDropDown } from "react-icons/md";

import data from "../../utils/Acordian";

const Value = () => {
  return (
    <>
      <section className="v-wrapper">
        <div className="paddings innerWidth flexCenter v-container">
          {/* left side */}
          <div className="v-left">
            <div className="image-container">
              <img src="./value.png" alt="image" />
            </div>
          </div>

          {/* right side */}
          <div className="flexColStart v-right">
            <span className="orangeText">Our Value</span>
            <span className="primaryText">Value We Give To Your</span>
            <span className="secondaryText">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit
              <br />
              deleniti rerum eveniet tempora tempore dolorum aspernatur
            </span>

            <Accordion
              className="accordian"
              allowMultipleExpanded={false}
              preExpanded={[0]}
            >
              {data.map((item, idx) => {

                const [className , setClassName] = useState('');


                return (
                  <AccordionItem key={idx} className={`accordianItem ${className}`} uuid={idx}>
                    <AccordionItemHeading>
                      <AccordionItemButton className="flexCenter accordianButton">

                        <AccordionItemState>
                          {(expended) =>
                            expended
                              ? setClassName("expended")
                              : setClassName("collapsed")
                          }
                        </AccordionItemState>

                        <div className="flexCenter icon">{item.icon}</div>

                        <span className="primaryText">{item.heading}</span>

                        <div className="flexCenter icon">
                          <MdOutlineArrowDropDown size={20} />
                        </div>
                      </AccordionItemButton>
                    </AccordionItemHeading>

                    <AccordionItemPanel>
                      <p className="secondaryText">{item.detail}</p>
                    </AccordionItemPanel>
                  </AccordionItem>
                );
              })}
            </Accordion>
          </div>
        </div>
      </section>
    </>
  );
};

export default Value;

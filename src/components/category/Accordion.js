import React, { useState } from 'react';
import './accordion.css'
import { items } from './AccordionItems';

function Accordion() {
  const [activeIndex, setActiveIndex] = useState(-1);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? -1 : index);
  };

  return (
    <div className="accordion">
      {items.map((item, index) => (
        <div key={index}>
          <div className="accordion-header" onClick={() => toggleAccordion(index)}>
            {item.title}
            <span className="accordion-header-icon">{activeIndex === index ? '-' : '+'}</span>
          </div>
          <div className={`accordion-body ${activeIndex === index ? 'active' : ''}`}>
            {item.content}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Accordion;

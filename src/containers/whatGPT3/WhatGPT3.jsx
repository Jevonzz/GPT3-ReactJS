import React from "react";
import Feature from "../../components/feature/Feature";
import "./whatGPT3.css";

const WhatGPT3 = () => {
  return (
    <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
      <div className="gpt3__whatgpt3-feature">
        <Feature
          title="What is GPT3?"
          text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi numquam maxime at cumque perspiciatis, ratione eveniet quas et voluptatum consequuntur? Lorem ipsum dolor, sit amet consectetur adipisicing elit."
        />
      </div>
      <div className="gpt3__whatgpt3-heading">
        <h1 className="gradient__text">
          The possibilities are beyond your imagination
        </h1>
        <p>
          <a href="#blog">Explore the library</a>
        </p>
      </div>
      <div className="gpt3__whatgpt3-container">
        <Feature
          title="Chatbots"
          text="Lorem ipsum dolor, sumquam maxime at cumque perspiciatis, ratione eveniet quas et voluptatum consequuntur?"
        />
        <Feature
          title="Knowledgebase"
          text="Lorem ipsum dolor, se at cumque perspiciatis, ratione eveniet quas et voluptatum consequuntur?"
        />
        <Feature
          title="Education"
          text="Lorem ipsum dolor, veniet quas et voluptatum consequuntur?"
        />
      </div>
    </div>
  );
};

export default WhatGPT3;

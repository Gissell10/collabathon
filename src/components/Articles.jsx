import React from "react";
import Article from "./Article";
import toiletOne from "../image/toilet-1.png";
import toiletTwo from "../image/toilet-2.png";

const Articles = () => {
  return (
    <div className="Articles">
      <div>
        <button className="Articles-button">Juicy Juicy Hell Today</button>
      </div>
      <div></div>
      <Article image={toiletOne} title="Lorem Ipsum"></Article>
      <Article image={toiletTwo} title="Lorem Ipsum"></Article>
      <Article image={toiletTwo} title="Lorem pepito"></Article>
      <Article image={toiletOne} title="Lorem Ipsum"></Article>
    </div>
  );
};

export default Articles;

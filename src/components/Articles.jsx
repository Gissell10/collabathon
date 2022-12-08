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
      <Article
        callAction="Hot"
        time="10 mins ago!"
        image={toiletOne}
        title="HOW LADY GAGA CLEANS HER TOILET"
        description="The Australian actress has made a rare announcement about her private life, as photos of her husband were published online today."
      ></Article>
      <Article
        callAction="Must have"
        time="1 hour ago "
        image={toiletTwo}
        title="HOW RIHANNA WIPES HER BUM"
        description="The Australian actress has made a rare announcement about her private life, as photos of her husband were published online today."
      ></Article>
      <Article
        time="5 hours ago "
        image={toiletTwo}
        title="KANYE REVEALS HIS LOO  SECRET "
        description="The Australian actress has made a rare announcement about her private life, as photos of her husband were published online today."
      ></Article>
      <Article
        time="10 hours ago "
        image={toiletOne}
        title="HOW KYLIE JENNER CHOPS A LOG"
        description="The Australian actress has made a rare announcement about her private life, as photos of her husband were published online today."
      ></Article>
    </div>
  );
};

export default Articles;

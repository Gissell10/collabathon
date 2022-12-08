import React from "react";
import { Icon } from "@iconify/react";

const Article = ({ children, image, title, description, time, callAction }) => {
  return (
    <div>
      {callAction !== undefined ? (
        <button>
          <span>
            <Icon icon="gridicons:cross-circle" color="#0026ad" />
          </span>
          {callAction}
        </button>
      ) : (
        <p></p>
      )}

      <span> {time}</span>
      <h2>{title}</h2>
      <img src={image} alt="Image" height={187} width={184} />
      <p className="description">{description}</p>
    </div>
  );
};

export default Article;

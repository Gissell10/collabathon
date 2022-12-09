import React from "react";
import { Icon } from "@iconify/react";
import { isLabelWithInternallyDisabledControl } from "@testing-library/user-event/dist/utils";

const Article = ({
  children,
  image,
  name,
  title,
  description,
  time,
  callAction,
}) => {
  return (
    <div
      className="Article"
      style={{ backgroundImage: `url(${image})`, backgroundSize: "cover" }}
    >
      {callAction !== undefined ? (
        <button className="callAction">
          <span>
            <Icon icon="icon-park-outline:tea-drink" />
          </span>
          {callAction}
        </button>
      ) : (
        <p> </p>
      )}

      <span className="time"> {time}</span>
      <h2 className="name">{name}</h2>
      <h2 className="title">{title}</h2>
      <p className="description">{description}</p>
    </div>
  );
};

export default Article;

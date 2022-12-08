import React from "react";

const Article = ({
  children,
  image,
  title,
  description = "The crazy fox jumped over the old dog",
}) => {
  return (
    <div>
      <h2>{title}</h2>
      <img src={image} alt="Image" height={187} width={184} />
      <p>{description}</p>
    </div>
  );
};

export default Article;

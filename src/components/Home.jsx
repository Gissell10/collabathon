import React from "react";
import Nav from "./Nav";
import Footer from "./Footer";
import Init from "./Init";
import Subscribe from "./Subscribe";
import Articles from "./Articles";
import "../App.css";

const Home = () => {
  return (
    <main>
      <Nav></Nav>

      <Init></Init>
      <Articles></Articles>

      <Subscribe></Subscribe>
      <Footer></Footer>
    </main>
  );
};

export default Home;

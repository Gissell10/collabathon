import React from "react";
import Nav from "./Nav";
import Footer from "./Footer";
import Hero from "./Hero";
import Subscribe from "./Subscribe";
import Articles from "./Articles";
import "../App.css";

const Home = () => {
  return (
    <main>
      <Nav></Nav>

      <Hero></Hero>
      <Articles></Articles>

      <Subscribe></Subscribe>
      <Footer></Footer>
    </main>
  );
};

export default Home;

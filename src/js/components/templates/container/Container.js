import React from "react";
import Navbar from "../navbar/navbar";
import "./Container.scss";

const Container = (props) => {
  return (
    <div className="app__container">
      <Navbar />
      <div className="content">
        <div className="content__container">{props.children}</div>
      </div>
    </div>
  );
};

export default Container;

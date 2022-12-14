import React from "react";

import Header from "./Header/Header";
import ToDoList from "../ToDoList/ToDoList";
import Footer from "./Footer/Footer";

import "./PageLayout.css";

const PageLayout = () => {
  return (
    <div id="page-container">
      <Header />
      <ToDoList />
      <Footer />
    </div>
  );
};

export default PageLayout;

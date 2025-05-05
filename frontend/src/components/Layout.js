import React from "react";
import TopBar from "./TopBar";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div>
      <TopBar />
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;

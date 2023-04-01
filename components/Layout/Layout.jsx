import Header from "@/components/Header/Header";
import React, { useEffect, useState } from "react";
import Loader from "@/components/Loader/Loader";
import Footer from "@/components/Footer/Footer";
import styles from "./Layout.module.scss";
import { CSSTransition } from "react-transition-group";

const Layout = ({ children }) => {
  const [loading, setLoading] = useState(true);
  // useEffect(() => {
  //   setTimeout(() => {
  //     setLoading(false);
  //   }, 3000);
  // }, []);
  return (
    <>
      <Loader />
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Layout;

import Header from "@/components/Header/Header";
import React, { useEffect, useState } from "react";
import Loader from "@/components/Loader/Loader";
import Footer from "@/components/Footer/Footer";
import styles from './Layout.module.scss'
import { CSSTransition } from 'react-transition-group';

const Layout = ({ children }) => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  return (
    <>
       <CSSTransition
        in={loading}
        timeout={200}
        classNames={{
            enter: styles.loaderEnter,
            enterActive: styles.loaderEnterActive,
            exit: styles.loaderExit,
            exitActive: styles.loaderExitActive,
          }}
        unmountOnExit
      >
        <div className={styles.loader}>
          <Loader />
        </div>
      </CSSTransition>

      <CSSTransition
        in={!loading}
        timeout={200}
        classNames={{
            enter: styles.contentEnter,
            enterActive: styles.contentEnterActive,
            exit: styles.contentExit,
            exitActive: styles.contentExitActive,
          }}
        unmountOnExit
      >
        <div className={styles.content}>
          <Header />
          {children}
          <Footer />
        </div>
      </CSSTransition>
    </>
  );
};

export default Layout;

import Loader from "@/components/Loader/Loader";
import "@/styles/globals.css";
import "@/styles/UnderSlider.css";
import "../styles/news.css"
import { useEffect, useState } from "react";
import Layout from "../components/Layout/Layout";

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

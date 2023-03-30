import Loader from "@/components/Loader/Loader";
import "@/styles/globals.css";
import { useEffect, useState } from "react";
import Layout from "./Layout/Layout";

export default function App({ Component, pageProps }) {
  return (
        <Layout>
          <Component {...pageProps} />
        </Layout>
  );
}

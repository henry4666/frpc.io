import "../styles/globals.css";
import Head from "next/head";
import { usePanelbear } from '@panelbear/panelbear-nextjs';

export default function Frisbee({ Component, pageProps }) {
 usePanelbear('HjrnquHievf', { scriptSrc: "/bear.js" });
  return (
    <>
      <Head>
        <title>Frisbee Documentation</title>
        <meta property="og:title" content="fRPC Documentation" key="title" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

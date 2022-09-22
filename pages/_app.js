import Script from "next/script";
import React, { useEffect, useState } from "react";
import { Footer, Header, Layout } from "../components";
import Navbar from "../components/Navbar";
// import Navbar from "../components/Navbar";
import "../styles/globals.css";

// <!-- Google tag (gtag.js) -->
// <script async src="https://www.googletagmanager.com/gtag/js?id=G-CT1JLD5VT6"></script>
// <script>
// window.dataLayer = window.dataLayer || [];
// function gtag(){dataLayer.push(arguments);}
// gtag('js', new Date());

// gtag('config', 'G-CT1JLD5VT6');
// </script>

function MyApp({ Component, pageProps }) {
  return (
    <>
    {/* <Header></Header> */}
    <Navbar/>
      <Component {...pageProps} />
    <Footer />
    </>
  );
}

export default MyApp;



{/* <Layout>


{/* GOOGLE ANALYTICS TAG SCRIPTS BELOW */}
{/* <Script
strategy="lazyOnLoad"
src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
/>

<Script strategy="lazyOnload" id="analytics">
{`
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', ${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}, {
  page_path: window.location.pathname,
});
`}
</Script> 
</Layout> */}
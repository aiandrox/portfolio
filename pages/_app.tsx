import { NextPage } from "next";
import { Analytics } from "@vercel/analytics/react";
import "../styles/global.css";
import { AppProps } from "next/app";

const App: NextPage<AppProps> = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Component {...pageProps} />
      <Analytics />
    </>
  );
};

export default App;

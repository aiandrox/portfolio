import { NextPage } from "next";
import "../styles/global.css";
import { AppProps } from "next/app";

const App: NextPage<AppProps> = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />;
};

export default App;

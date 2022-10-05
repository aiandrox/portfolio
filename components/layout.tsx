import { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { useState, useEffect } from "react";
import Header from "../components/header";

type Props = {
  children?: React.ReactNode;
  home?: boolean;
};

const name = "END";
const description = "Webエンジニア ENDのポートフォリオサイトです。";
const siteUrl = "https://aiandrox.com";
export const siteTitle = "aiandrox.com";

const Layout: NextPage<Props> = ({ children, home }: Props) => {
  const [isHeightOver, setIsHeightOver] = useState(false);

  useEffect(() => {
    const scrollAction = () => {
      const threshold = 150;
      if (threshold > window.scrollY) {
        setIsHeightOver(true);
      } else {
        setIsHeightOver(false);
      }
    };

    window.addEventListener("scroll", scrollAction, {
      capture: false,
      passive: true,
    });
    scrollAction(); // 初期描画時に一度だけ判定する

    return () => {
      window.removeEventListener("scroll", scrollAction);
    };
  }, []);

  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="og:title" content={siteTitle} />
        <meta name="description" content={description} />
        <meta property="og:image" content={`${siteUrl}/ogp.png`} />
        <meta property="og:type" content="website" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://metatags.io/" />
        <meta property="twitter:title" content={siteTitle} />
        <meta property="twitter:description" content={description} />
        <meta property="twitter:image" content={`${siteUrl}/ogp.png`} />
      </Head>
      <header className="fixed w-full z-10 top-0">
        <Header isHeightOver={isHeightOver} />
      </header>
      <main>{children}</main>
      {!home && (
        <div>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Layout;

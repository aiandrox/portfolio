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
const description = "ポートフォリオサイト";
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
        <meta name="description" content={description} />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1391068561417780"
          crossOrigin="anonymous"
        ></script>
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

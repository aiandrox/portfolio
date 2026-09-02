import { NextPage } from "next";
import Head from "next/head";

type Props = {
  children?: React.ReactNode;
  home?: boolean;
};

const description = "Webエンジニア ENDのポートフォリオサイトです。";
const siteUrl = "https://aiandrox.com";
export const siteTitle = "aiandrox.com";

const Layout: NextPage<Props> = ({ children }: Props) => {
  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="og:title" content={siteTitle} />
        <meta name="description" content={description} />
        <meta property="og:image" content={`${siteUrl}/ogp.png`} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content={siteTitle} />
        <meta property="twitter:description" content={description} />
        <meta property="twitter:image" content={`${siteUrl}/ogp.png`} />
      </Head>
      <main>{children}</main>
    </div>
  );
};

export default Layout;

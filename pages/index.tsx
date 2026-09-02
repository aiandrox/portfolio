import { NextPage, GetStaticProps } from "next";
import Head from "next/head";
import { getSortedWorksData, sortWorks, Work } from "../lib/works";
import { getSortedCareersData, Career } from "../lib/careers";
import Layout, { siteTitle } from "../components/layout";
import ProfileView from "../components/index/profileView";
import WorksView from "../components/index/worksView";
import CareerView from "../components/index/careerView";
import LinksView from "../components/index/linksView";

type Props = {
  allWorksData: Work[];
  allCareersData: Career[];
};

const Home: NextPage<Props> = ({ allWorksData, allCareersData }: Props) => {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <div className="pf-bg-fixed" aria-hidden="true"></div>

      <header className="pf-hero">
        <div className="pf-hero-inner">
          <h1 className="pf-hero-title">aiandrox.com</h1>
          <p className="pf-hero-sub">Web Developer END&apos;s site.</p>
        </div>
      </header>

      <section id="profile" className="pf-section pf-section--intro">
        <ProfileView />
      </section>

      <div className="pf-gap" aria-hidden="true"></div>

      <section id="works" className="pf-section pf-section--alt">
        <WorksView allWorksData={allWorksData} />
      </section>

      <div className="pf-gap" aria-hidden="true"></div>

      <section id="career" className="pf-section">
        <CareerView allCareersData={allCareersData} />
      </section>

      <div className="pf-gap" aria-hidden="true"></div>

      <section id="links" className="pf-section pf-section--alt">
        <LinksView />
      </section>

      <div className="pf-gap" aria-hidden="true"></div>

      <footer className="pf-foot">
        © 2022–{new Date().getFullYear()} aiandrox.com
      </footer>
    </Layout>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const works = await Promise.all(getSortedWorksData());
  const allCareersData = getSortedCareersData();
  return {
    props: {
      allWorksData: sortWorks(works),
      allCareersData,
    },
  };
};

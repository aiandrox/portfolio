import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import { getSortedWorksData } from "../lib/works";
import Link from "next/link";
import Date from "../components/date";
import WorkModal from "../components/index/workModal";

const Works = ({ allWorksData }) => {
  return (
    <Layout home>
      <section>
        <h2>Blog</h2>
        <WorkModal viewed={true}></WorkModal>
        <ul>
          {allWorksData.map(({ id, date, title }) => (
            <li key={id}>
              <Link href={`/works/${id}`}>
                <a className="underline">{title}</a>
              </Link>
              <br />
              <small>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
};

export default Works;

export const getStaticProps = async () => {
  const allWorksData = getSortedWorksData();
  return {
    props: {
      allWorksData,
    },
  };
};

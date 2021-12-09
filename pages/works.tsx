import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import { getSortedWorksData } from "../lib/works";
import Link from "next/link";
import Date from "../components/date";

export default function Home({ allWorksData }) {
  return (
    <Layout home>
      <section>
        <h2>Blog</h2>
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
}

export async function getStaticProps() {
  const allWorksData = getSortedWorksData();
  return {
    props: {
      allWorksData,
    },
  };
}
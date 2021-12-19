import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import { getSortedAppsData } from "../lib/apps";
import Link from "next/link";
import Date from "../components/date";

export default function Home({ allAppsData }) {
  return (
    <Layout home>
      <section>
        <h2>Blog</h2>
        <ul>
          {allAppsData.map(({ id, date, title }) => (
            <li key={id}>
              <Link href={`/apps/${id}`}>
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
  const allAppsData = getSortedAppsData();
  return {
    props: {
      allAppsData,
    },
  };
}

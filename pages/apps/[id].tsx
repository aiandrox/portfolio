import Layout from "../../components/layout";
import { getAllAppIds, getAppData } from "../../lib/apps";
import Head from "next/head";
import Date from "../../components/date";

export default function App({ appData }) {
  return (
    <Layout>
      <Head>
        <title>{appData.title}</title>
      </Head>
      <article>
        <h1>
          <a href={appData.url}>{appData.title}</a>
        </h1>
        <div>
          <Date dateString={appData.date} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: appData.contentHtml }} />
      </article>
    </Layout>
  );
}

export async function getStaticPaths() {
  const paths = getAllAppIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const appData = await getAppData(params.id);
  return {
    props: {
      appData,
    },
  };
}

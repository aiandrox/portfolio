import Layout from "../../components/layout";
import { getAllWorkIds, getWorkData } from "../../lib/works";
import Head from "next/head";
import Date from "../../components/date";

export default function Work({ workData }) {
  return (
    <Layout>
      <Head>
        <title>{workData.title}</title>
      </Head>
      <article>
        <h1>
          <a href={workData.url}>{workData.title}</a>
        </h1>
        <div>
          <Date dateString={workData.date} />
        </div>
        {workData.technologies.map((technology) => (
          <div>{technology}</div>
        ))}
        <ul>
          {workData.media.map(({ title, url }) => (
            <li>
              <a href={url} target="_blank">
                {title}
              </a>
            </li>
          ))}
        </ul>
        <div dangerouslySetInnerHTML={{ __html: workData.contentHtml }} />
      </article>
    </Layout>
  );
}

export async function getStaticPaths() {
  const paths = getAllWorkIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const workData = await getWorkData(params.id);
  return {
    props: {
      workData,
    },
  };
}

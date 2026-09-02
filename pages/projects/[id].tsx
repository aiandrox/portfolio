import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import Layout, { siteTitle } from "../../components/layout";
import Date from "../../components/date";
import WorksSidebar from "../../components/works/worksSidebar";
import Gallery from "../../components/works/gallery";
import {
  getAllWorkIds,
  getWorkData,
  getWorkSummaries,
  Work,
  WorkSummary,
} from "../../lib/works";

const siteUrl = "https://aiandrox.com";

type Props = { work: Work; works: WorkSummary[] };

const ProjectPage: NextPage<Props> = ({ work, works }: Props) => {
  const ogImage = `${siteUrl}/images/works/${work.id}.png`;

  return (
    <Layout home>
      <Head>
        <title>{`${work.title} | ${siteTitle}`}</title>
        <meta property="og:title" content={work.title} />
        <meta property="og:image" content={ogImage} />
        <meta name="twitter:image" content={ogImage} />
      </Head>

      <div className="pf-topbar">
        <Link href="/">aiandrox.com</Link>
      </div>

      <div className="pf-proj-page">
        <Link href="/#projects" className="pf-proj-back">
          ← Personal Projects
        </Link>

        <div className="pf-proj-layout">
          <aside className="pf-proj-aside">
            <WorksSidebar works={works} currentId={work.id} />
          </aside>

          <article className="pf-proj-body">
            <h1 className="pf-proj-title">{work.title}</h1>
            <div className="pf-proj-date">
              <Date dateString={work.date} />
            </div>

            {work.technologies?.length > 0 && (
              <ul className="pf-proj-tags">
                {work.technologies.map((name) => (
                  <li key={name}>{name}</li>
                ))}
              </ul>
            )}

            <img
              src={`/images/works/${work.id}.png`}
              alt={work.title}
              className="pf-proj-hero"
            />

            <Gallery images={work.gallery} title={work.title} />

            <div
              className="markdown mt-6"
              dangerouslySetInnerHTML={{ __html: work.contentHtml }}
            />

            <div className="pf-proj-links">
              <a
                href={work.repo_url}
                target="_blank"
                rel="noreferrer"
                className={`is-github ${work.repo_url ? "" : "is-disabled"}`}
              >
                GitHub
              </a>
              <a
                href={work.url}
                target="_blank"
                rel="noreferrer"
                className={`is-web ${work.url ? "" : "is-disabled"}`}
              >
                {work.url ? "Website" : "Website Closed"}
              </a>
            </div>
          </article>
        </div>
      </div>
    </Layout>
  );
};

export default ProjectPage;

export const getStaticPaths: GetStaticPaths = async () => {
  return { paths: getAllWorkIds(), fallback: false };
};

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  const id = params?.id as string;
  const [work, works] = await Promise.all([
    getWorkData(id),
    getWorkSummaries(),
  ]);
  return { props: { work, works } };
};

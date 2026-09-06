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

            <div className="pf-proj-links">
              {work.repo_url && (
                <a
                  href={work.repo_url}
                  target="_blank"
                  rel="noreferrer"
                  className="pf-btn pf-btn-ghost"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                  </svg>
                  ソースコード
                </a>
              )}
              {work.url ? (
                <a
                  href={work.url}
                  target="_blank"
                  rel="noreferrer"
                  className="pf-btn pf-btn-primary"
                >
                  サイトを開く
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2.4}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M7 17 17 7" />
                    <path d="M8 7h9v9" />
                  </svg>
                </a>
              ) : (
                <span className="pf-proj-closed">サイトは公開を終了しました</span>
              )}
            </div>

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

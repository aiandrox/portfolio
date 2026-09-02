import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Layout, { siteTitle } from "../../components/layout";
import Date from "../../components/date";
import { getAllWorkIds, getWorkData, WorkDetail } from "../../lib/works";

const siteUrl = "https://aiandrox.com";

type Props = { work: WorkDetail };

const WorkPage: NextPage<Props> = ({ work }: Props) => {
  const router = useRouter();

  // ← / → キーで前後の作品へ
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft" && work.prev) {
        router.push(`/works/${work.prev.id}`);
      } else if (e.key === "ArrowRight" && work.next) {
        router.push(`/works/${work.next.id}`);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [work, router]);

  const ogImage = `${siteUrl}/images/works/${work.id}.png`;

  return (
    <Layout home>
      <Head>
        <title>{`${work.title} | ${siteTitle}`}</title>
        <meta property="og:title" content={work.title} />
        <meta property="og:image" content={ogImage} />
        <meta name="twitter:image" content={ogImage} />
      </Head>

      <div className="container mx-auto max-w-3xl px-4 pt-24 pb-16">
        <Link
          href="/#works"
          className="text-sm text-gray-500 hover:opacity-80"
        >
          ← Works一覧
        </Link>

        <h1 className="mt-4 text-3xl font-bold text-gray-900">{work.title}</h1>
        <div className="mt-1 text-sm text-gray-500">
          <Date dateString={work.date} />
        </div>

        {work.technologies?.length > 0 && (
          <ul className="mt-3 flex flex-wrap gap-1">
            {work.technologies.map((name) => (
              <li
                key={name}
                className="w-fit px-2 py-0 text-xs border rounded-full bg-gray-50"
              >
                {name}
              </li>
            ))}
          </ul>
        )}

        <img
          src={`/images/works/${work.id}.png`}
          alt={work.title}
          className="mt-6 w-full rounded-lg shadow-lg"
        />

        <div
          className="markdown text-gray-600 mt-6"
          dangerouslySetInnerHTML={{ __html: work.contentHtml }}
        />

        <div className="mt-8 flex gap-2">
          <a
            href={work.repo_url}
            target="_blank"
            rel="noreferrer"
            className={`flex-1 text-center px-4 py-2 text-sm font-medium bg-white text-gray-700 border border-gray-300 rounded-md ${
              work.repo_url ? "hover:opacity-80" : "opacity-40 pointer-events-none"
            }`}
          >
            GitHub
          </a>
          <a
            href={work.url}
            target="_blank"
            rel="noreferrer"
            className={`flex-1 text-center px-4 py-2 text-sm font-medium text-white rounded-md ${
              work.url ? "gradient hover:opacity-80" : "bg-gray-300 pointer-events-none"
            }`}
          >
            {work.url ? "Website" : "Website Closed"}
          </a>
        </div>

        <div className="mt-12 flex justify-between gap-4 text-sm text-gray-600">
          {work.prev ? (
            <Link
              href={`/works/${work.prev.id}`}
              className="max-w-[45%] hover:opacity-80"
            >
              ← {work.prev.title}
            </Link>
          ) : (
            <span />
          )}
          {work.next ? (
            <Link
              href={`/works/${work.next.id}`}
              className="max-w-[45%] text-right hover:opacity-80"
            >
              {work.next.title} →
            </Link>
          ) : (
            <span />
          )}
        </div>
      </div>
    </Layout>
  );
};

export default WorkPage;

export const getStaticPaths: GetStaticPaths = async () => {
  return { paths: getAllWorkIds(), fallback: false };
};

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  const work = await getWorkData(params?.id as string);
  return { props: { work } };
};

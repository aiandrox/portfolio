import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

export type Work = {
  id: string;
  date: string;
  title: string;
  url: string;
  repo_url: string;
  technologies: string[];
  contentHtml: string;
  gallery: string[];
};

export type WorkSummary = {
  id: string;
  title: string;
  date: string;
};

const worksDirectory = path.join(process.cwd(), "repositories/works");

export const getSortedWorksData = () => {
  // Get file names under /works
  const fileNames = fs.readdirSync(worksDirectory);
  const allWorksData = fileNames.map(async (fileName) => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, "");

    // Read markdown file as string
    const fullPath = path.join(worksDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    // Use gray-matter to parse the work metadata section
    const matterResult = matter(fileContents);

    const processedContent = await remark()
      .use(html)
      .process(matterResult.content);
    const contentHtml = processedContent.toString();

    // Combine the data with the id
    return {
      id,
      contentHtml,
      ...(matterResult.data as Work),
    };
  });

  return allWorksData;
};

export const sortWorks = (works: Work[]) => {
  return works.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
};

export const getAllWorkIds = () => {
  return fs.readdirSync(worksDirectory).map((fileName) => ({
    params: { id: fileName.replace(/\.md$/, "") },
  }));
};

export const getWorkData = async (id: string): Promise<Work> => {
  const fullPath = path.join(worksDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const matterResult = matter(fileContents);

  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);

  return {
    id,
    contentHtml: processedContent.toString(),
    ...(matterResult.data as Work),
    gallery: getGalleryImages(id),
  };
};

// public/images/works/<id>/ にある画像を名前順で返す（ギャラリー用）
const getGalleryImages = (id: string): string[] => {
  const dir = path.join(process.cwd(), "public/images/works", id);
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((file) => /\.(png|jpe?g|webp)$/i.test(file))
    .sort()
    .map((file) => `/images/works/${id}/${file}`);
};

// サイドバー用に全作品を日付順（新しい順）で返す
export const getWorkSummaries = async (): Promise<WorkSummary[]> => {
  const works = sortWorks(await Promise.all(getSortedWorksData()));
  return works.map((work) => ({
    id: work.id,
    title: work.title,
    date: work.date,
  }));
};

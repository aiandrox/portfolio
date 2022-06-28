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

    console.log(contentHtml);
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

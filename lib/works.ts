import fs from "fs";
import path from "path";
import matter from "gray-matter";
import remark from "remark";
import { unified } from "unified";
import html from "remark-html";

export type Work = {
  id: string;
  date: string;
  title: string;
  url: string;
  repo_url: string;
  technologies: string[];
};

const worksDirectory = path.join(process.cwd(), "repositories/works");

export function getSortedWorksData() {
  // Get file names under /works
  const fileNames = fs.readdirSync(worksDirectory);
  const allWorksData = fileNames.map((fileName) => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, "");

    // Read markdown file as string
    const fullPath = path.join(worksDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    // Use gray-matter to parse the work metadata section
    const matterResult = matter(fileContents);

    // Combine the data with the id
    return {
      id,
      ...(matterResult.data as Work),
    };
  });
  // Sort works by date
  return allWorksData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

export function getAllWorkIds() {
  const fileNames = fs.readdirSync(worksDirectory);
  return fileNames.map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.md$/, ""),
      },
    };
  });
}

export async function getWorkData(id: string) {
  const fullPath = path.join(worksDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  // Use gray-matter to parse the work metadata section
  const matterResult = matter(fileContents);

  // Use remark to convert markdown into HTML string
  const processedContent = await unified().use(html);
  // .process(matterResult.content);
  // const contentHtml = processedContent.toString();

  // Combine the data with the id and contentHtml
  return {
    id,
    // contentHtml,
    ...(matterResult.data as Work),
  };
}

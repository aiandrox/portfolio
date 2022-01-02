import fs from "fs";
import path from "path";
import matter from "gray-matter";
import remark from "remark";
import { unified } from "unified";
import html from "remark-html";

export type App = {
  id: string;
  date: string;
  title: string;
};

const appsDirectory = path.join(process.cwd(), "repositories/apps");

export function getSortedAppsData() {
  // Get file names under /apps
  const fileNames = fs.readdirSync(appsDirectory);
  const allAppsData = fileNames.map((fileName) => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, "");

    // Read markdown file as string
    const fullPath = path.join(appsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    // Use gray-matter to parse the app metadata section
    const matterResult = matter(fileContents);

    // Combine the data with the id
    return {
      id,
      ...(matterResult.data as App),
    };
  });
  // Sort apps by date
  return allAppsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

export function getAllAppIds() {
  const fileNames = fs.readdirSync(appsDirectory);
  return fileNames.map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.md$/, ""),
      },
    };
  });
}

export async function getAppData(id: string) {
  const fullPath = path.join(appsDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  // Use gray-matter to parse the app metadata section
  const matterResult = matter(fileContents);

  // Use remark to convert markdown into HTML string
  const processedContent = await unified().use(html);
  // .process(matterResult.content);
  // const contentHtml = processedContent.toString();

  // Combine the data with the id and contentHtml
  return {
    id,
    // contentHtml,
    ...(matterResult.data as App),
  };
}

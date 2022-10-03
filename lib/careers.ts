import fs from "fs";
import path from "path";
import matter from "gray-matter";
import remark from "remark";
import { unified } from "unified";
import html from "remark-html";

export type CareerType = "birthday" | "work" | "study";

export type Career = {
  id: string;
  date: string;
  endDate?: string;
  type: CareerType;
  title: string;
  description: string;
};

const careersDirectory = path.join(process.cwd(), "repositories/careers");

export function getSortedCareersData() {
  // Get file names under /careers
  const fileNames = fs.readdirSync(careersDirectory);
  const allCareersData = fileNames.map((fileName) => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, "");

    // Read markdown file as string
    const fullPath = path.join(careersDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    // Use gray-matter to parse the career metadata section
    const matterResult = matter(fileContents);

    // Combine the data with the id
    return {
      id,
      ...(matterResult.data as Career),
    };
  });
  // Sort careers by date
  return allCareersData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

export function getAllCareerIds() {
  const fileNames = fs.readdirSync(careersDirectory);
  return fileNames.map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.md$/, ""),
      },
    };
  });
}

export async function getCareerData(id: string) {
  const fullPath = path.join(careersDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  // Use gray-matter to parse the career metadata section
  const matterResult = matter(fileContents);

  // Use remark to convert markdown into HTML string
  const processedContent = await unified().use(html);
  // .process(matterResult.content);
  // const contentHtml = processedContent.toString();

  // Combine the data with the id and contentHtml
  return {
    id,
    // contentHtml,
    ...(matterResult.data as Career),
  };
}

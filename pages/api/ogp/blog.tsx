import { ImageResponse } from "@vercel/og";
import { NextRequest } from "next/server";

export const config = {
  runtime: "experimental-edge",
};

const notosans = fetch(
  new URL("../../../assets/NotoSansJP-Bold.otf", import.meta.url)
).then((res) => res.arrayBuffer());

export default async function handler(req: NextRequest) {
  const notosansData = await notosans;

  try {
    const { searchParams } = new URL(req.url);

    const hasTitle = searchParams.has("title");
    const title = hasTitle
      ? searchParams.get("title").slice(0, 100)
      : "blog.aiandrox";

    const hasTags = searchParams.has("tags");
    const tags = hasTags ? searchParams.get("tags").split(",") : [];
    const tagsText = tags.map((tag) => `#${tag}`).join(" ");

    return new ImageResponse(
      (
        <div
          style={{
            backgroundImage:
              "url(https://aiandrox.com/images/blogogp_background.png)",
            backgroundSize: "100% 100%",
            height: "100%",
            width: "100%",
            display: "flex",
            textAlign: "left",
            alignItems: "flex-start",
            justifyContent: "center",
            flexDirection: "column",
            flexWrap: "nowrap",
          }}
        >
          <div
            style={{
              width: "100%",
              fontSize: 60,
              fontStyle: "normal",
              fontWeight: "bold",
              color: "#244f94",
              padding: "0 120px",
              lineHeight: 1.3,
              marginBottom: "30px",
              wordWrap: "break-word",
            }}
          >
            {title}
          </div>
          <div
            style={{
              width: "100%",
              fontSize: 40,
              fontStyle: "normal",
              fontWeight: "bold",
              color: "#424242",
              padding: "0 120px",
              lineHeight: 1.3,
            }}
          >
            {tagsText}
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
        fonts: [
          {
            name: "NotoSans",
            data: notosansData,
            style: "normal",
          },
        ],
      }
    );
  } catch (e: any) {
    console.log(`${e.message}`);
    return new Response(`Failed to generate the image`, {
      status: 500,
    });
  }
}

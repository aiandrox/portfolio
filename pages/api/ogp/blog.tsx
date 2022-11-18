import { ImageResponse } from "@vercel/og";
import { NextRequest } from "next/server";

export const config = {
  runtime: "experimental-edge",
};

// Make sure the font exists in the specified path:
const montserrat = fetch(
  new URL("../../../assets/Montserrat-Bold.ttf", import.meta.url)
).then((res) => res.arrayBuffer());
const notosans = fetch(
  new URL("../../../assets/NotoSansJP-Bold.otf", import.meta.url)
).then((res) => res.arrayBuffer());

export default async function handler(req: NextRequest) {
  const montserratData = await montserrat;
  const notosansData = await notosans;

  try {
    const { searchParams } = new URL(req.url);

    // ?title=<title>
    const hasTitle = searchParams.has("title");
    const title = hasTitle
      ? searchParams.get("title").slice(0, 100)
      : "blog.aiandrox";
    const hasTags = searchParams.has("tags");
    const tags = hasTags ? searchParams.get("tags").split(",") : [];

    return new ImageResponse(
      (
        <div
          style={{
            backgroundColor: "white",
            height: "100%",
            width: "100%",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div
            style={{ backgroundColor: "#ede89f", height: "10%", width: "100%" }}
          ></div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              height: "60%",
              letterSpacing: "-0.025em",
            }}
          >
            <div
              style={{
                textAlign: "center",
                fontSize: 60,
                color: "#244f94",
                fontFamily: '"Montserrat","NotoSans",sans-serif',
                lineHeight: 1.4,
                whiteSpace: "normal",
              }}
            >
              {title}
            </div>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              height: "20%",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                flexWrap: "wrap",
                alignItems: "center",
                fontSize: 30,
                color: "#424242",
                padding: "0 50px",
              }}
            >
              {tags.map((tag, index) => (
                <div key={index} style={{ margin: "0 10px" }}>{`#${tag}`}</div>
              ))}
            </div>
          </div>

          <div
            style={{
              backgroundColor: "#ede89f",
              height: "10%",
              width: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              fontFamily: '"Montserrat","NotoSans",sans-serif',
              fontSize: 40,
              color: "#244f94",
            }}
          >
            <div style={{ paddingLeft: 880 }}>blog.aiandrox</div>
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
        fonts: [
          {
            name: "Montserrat",
            data: montserratData,
            style: "normal",
          },
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

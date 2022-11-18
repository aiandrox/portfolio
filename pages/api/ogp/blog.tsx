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
      ? searchParams.get("title")?.slice(0, 100)
      : "blog.aiandrox";

    return new ImageResponse(
      (
        <div
          style={{
            backgroundColor: "white",
            height: "100%",
            width: "100%",
            display: "flex",
            textAlign: "center",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            flexWrap: "nowrap",
          }}
        >
          <div
            style={{
              fontSize: 60,
              fontFamily: '"Montserrat","NotoSans",sans-serif',
              fontWeight: 700,
              letterSpacing: "-0.025em",
              color: "#244f94",
              padding: "0 120px",
              lineHeight: 1.4,
              whiteSpace: "pre-wrap",
            }}
          >
            {title}
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

import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import Profile from "../components/profile";
import Header from "../components/header";
import Link from "next/link";
import anime from "animejs";

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <div className="leading-normal tracking-normal gradient text-gray-800">
        <Header isActive={true}></Header>

        <div className="pt-24 text-white">
          <div
            className="text-center md:text-left px-3 py-12 inline-block"
            ref={(ref) => {
              anime({
                targets: ref,
                translateX: 50,
              });
            }}
          >
            <h1 className="my-4 text-5xl font-bold leading-tight">
              aiandrox.com
            </h1>
            <p className="tracking-loose w-full">
              Web Developer END's portfolio site.
            </p>
          </div>
        </div>
        <div className="relative -mt-12 lg:-mt-24">
          <svg viewBox="0 0 1428 174" version="1.1">
            <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
              <g
                transform="translate(-2.000000, 44.000000)"
                fill="#FFFFFF"
                fillRule="nonzero"
              >
                <path
                  d="M0,0 C90.7283404,0.927527913 147.912752,27.187927 291.910178,59.9119003 C387.908462,81.7278826 543.605069,89.334785 759,82.7326078 C469.336065,156.254352 216.336065,153.6679 0,74.9732496"
                  opacity="0.100000001"
                ></path>
                <path
                  d="M100,104.708498 C277.413333,72.2345949 426.147877,52.5246657 546.203633,45.5787101 C666.259389,38.6327546 810.524845,41.7979068 979,55.0741668 C931.069965,56.122511 810.303266,74.8455141 616.699903,111.243176 C423.096539,147.640838 250.863238,145.462612 100,104.708498 Z"
                  opacity="0.100000001"
                ></path>
                <path
                  d="M1046,51.6521276 C1130.83045,29.328812 1279.08318,17.607883 1439,40.1656806 L1439,120 C1271.17211,77.9435312 1140.17211,55.1609071 1046,51.6521276 Z"
                  id="Path-4"
                  opacity="0.200000003"
                ></path>
              </g>
              <g
                transform="translate(-4.000000, 76.000000)"
                fill="#FFFFFF"
                fillRule="nonzero"
              >
                <path d="M0.457,34.035 C57.086,53.198 98.208,65.809 123.822,71.865 C181.454,85.495 234.295,90.29 272.033,93.459 C311.355,96.759 396.635,95.801 461.025,91.663 C486.76,90.01 518.727,86.372 556.926,80.752 C595.747,74.596 622.372,70.008 636.799,66.991 C663.913,61.324 712.501,49.503 727.605,46.128 C780.47,34.317 818.839,22.532 856.324,15.904 C922.689,4.169 955.676,2.522 1011.185,0.432 C1060.705,1.477 1097.39,3.129 1121.236,5.387 C1161.703,9.219 1208.621,17.821 1235.4,22.304 C1285.855,30.748 1354.351,47.432 1440.886,72.354 L1441.191,104.352 L1.121,104.031 L0.457,34.035 Z"></path>
              </g>
            </g>
          </svg>
        </div>

        <section className="bg-white py-8">
          <Profile></Profile>
        </section>

        <section className="bg-gray-100 py-8">
          <div className="container mx-auto px-2 pt-4 pb-1 flex flex-wrap">
            <h1 className="w-full my-2 text-5xl font-bold leading-tight text-center">
              Apps
            </h1>
            <div className="w-full mb-4">
              <div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
            </div>
            {[1, 2, 3, 4].map((n) => (
              <div key={n} className="w-full md:w-1/3 p-6 flex flex-col">
                <Link href={`/works/200315_hikikomori`}>
                  <a className="flex flex-wrap no-underline hover:no-underline">
                    <div className="flex-1 overflow-hidden">
                      <img
                        src="https://images.unsplash.com/photo-1497493292307-31c376b6e479?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"
                        alt=""
                      />

                      <p className="w-full text-gray-600 text-xs md:text-sm pt-4">
                        2021-12-1
                      </p>
                      <div className="w-full font-bold text-xl text-gray-800">
                        サービス名Abcde
                      </div>
                    </div>
                  </a>
                </Link>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-white py-8">
          <div className="container mx-auto flex flex-wrap pt-4 pb-12">
            <h1 className="w-full my-2 text-5xl font-bold leading-tight text-center">
              Works
            </h1>
            <div className="w-full mb-4">
              <div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
            </div>

            <div className="pt-6">
              {["株式会社サイトビジット", "株式会社資格スクエア"].map((n) => (
                <div className="flex flex-row items-center before:content-['hello'] before:bg-blue-500 before:top-0 before:left-2 before:h-full before-w-2">
                  <div className="h-full">
                    <div className="h-10 w-10 rounded-full border"></div>
                  </div>
                  <div className="items-center">
                    <p>2021-1</p>
                    <div className="bg-indigo-600 h-2 w-px"></div>
                    <p>2021-12</p>
                  </div>
                  <div className="shrink pl-6">
                    <div className="">
                      <h3 className="text-2xl font-bold leading-none mb-3 text-gray-800">
                        {n}
                      </h3>
                      <p className="w-full text-gray-600 text-sm md:text-sm pb-4">
                        システム開発グループ
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <svg className="wave-top" viewBox="0 0 1439 147" version="1.1">
          <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
            <g transform="translate(-1.000000, -14.000000)" fillRule="nonzero">
              <g className="wave" fill="#ffffff">
                <path d="M1440,84 C1383.555,64.3 1342.555,51.3 1317,45 C1259.5,30.824 1206.707,25.526 1169,22 C1129.711,18.326 1044.426,18.475 980,22 C954.25,23.409 922.25,26.742 884,32 C845.122,37.787 818.455,42.121 804,45 C776.833,50.41 728.136,61.77 713,65 C660.023,76.309 621.544,87.729 584,94 C517.525,105.104 484.525,106.438 429,108 C379.49,106.484 342.823,104.484 319,102 C278.571,97.783 231.737,88.736 205,84 C154.629,75.076 86.296,57.743 0,32 L0,0 L1440,0 L1440,84 Z"></path>
              </g>
              <g transform="translate(1.000000, 15.000000)" fill="#FFFFFF">
                <g transform="translate(719.500000, 68.500000) rotate(-180.000000) translate(-719.500000, -68.500000) ">
                  <path
                    d="M0,0 C90.7283404,0.927527913 147.912752,27.187927 291.910178,59.9119003 C387.908462,81.7278826 543.605069,89.334785 759,82.7326078 C469.336065,156.254352 216.336065,153.6679 0,74.9732496"
                    opacity="0.100000001"
                  ></path>
                  <path
                    d="M100,104.708498 C277.413333,72.2345949 426.147877,52.5246657 546.203633,45.5787101 C666.259389,38.6327546 810.524845,41.7979068 979,55.0741668 C931.069965,56.122511 810.303266,74.8455141 616.699903,111.243176 C423.096539,147.640838 250.863238,145.462612 100,104.708498 Z"
                    opacity="0.100000001"
                  ></path>
                  <path
                    d="M1046,51.6521276 C1130.83045,29.328812 1279.08318,17.607883 1439,40.1656806 L1439,120 C1271.17211,77.9435312 1140.17211,55.1609071 1046,51.6521276 Z"
                    opacity="0.200000003"
                  ></path>
                </g>
              </g>
            </g>
          </g>
        </svg>
        <section className="container mx-auto text-center py-6">
          <h1 className="w-full my-2 text-5xl font-bold leading-tight text-center text-white">
            Call to Action
          </h1>
          <div className="w-full mb-4">
            <div className="h-1 mx-auto bg-white w-1/6 opacity-25 my-0 py-0 rounded-t"></div>
          </div>
          <small className="my-4 text-xs text-white leading-tight">
            Copyright © 2021-{new Date().getFullYear()} {siteTitle} All rights
            reserved.
          </small>
        </section>
      </div>
    </Layout>
  );
}

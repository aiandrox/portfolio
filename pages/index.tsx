import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import Profile from "../components/profile";
import Header from "../components/header";
import Wave from "../components/wave";
import Link from "next/link";

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <div className="leading-normal tracking-normal gradient text-gray-800">
        <Header isTop={true}></Header>

        <div className="pt-24 text-white">
          <div className="text-center md:text-left px-3 py-12 inline-block">
            <h1 className="my-4 text-5xl font-bold leading-tight">
              aiandrox.com
            </h1>
            <p className="tracking-loose w-full">Web Developer END's site.</p>
          </div>
        </div>
        <Wave></Wave>

        <section id="profile" className="bg-white py-8">
          <Profile></Profile>
        </section>

        <section id="apps" className="bg-gray-100 py-8">
          <div className="container mx-auto px-2 pt-4 pb-1 flex flex-wrap">
            <h1 className="w-full my-2 text-5xl font-bold leading-tight text-center">
              Apps
            </h1>
            <div className="w-full mb-4">
              <div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
            </div>
            {[1, 2, 3, 4].map((n) => (
              <div key={n} className="w-full md:w-1/3 p-6 flex flex-col">
                <Link href={`/works/hikikomori`}>
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

        <section id="career" className="bg-white py-8">
          <div className="container mx-auto flex flex-wrap pt-4 pb-12">
            <h1 className="w-full my-2 text-5xl font-bold leading-tight text-center">
              Career
            </h1>
            <div className="w-full mb-4">
              <div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
            </div>

            <div className="relative flex flex-col p-6 w-full max-w-xl mx-auto">
              {[
                [
                  "株式会社資格スクエア",
                  "2021-12",
                  "work",
                  "事業の分社化により株式会社資格スクエアになりました。",
                ],
                [
                  "株式会社サイトビジット",
                  "2020-09",
                  "work",
                  "Railsエンジニアとして働き始めました。",
                ],
                ["RUNTEQ", "2020-01", "book", "Railsを主に学習していました。"],
                [
                  "河口湖の旅館",
                  "2019-04",
                  "work",
                  "派遣で寮に住み込み仲居をしていました。",
                ],
                [
                  "小学校教師",
                  "2018-04",
                  "work",
                  "大学卒業後、岡山県の小学校で1年間働いていました。",
                ],
              ].map((n) => (
                <div className="flex mb-12 md:mb-12">
                  <div className="flex flex-col items-center">
                    <div className="flex justify-center p-3 rounded-full align-center border-4 border-white text-primary bg-gray-200">
                      <img src={`/svgs/${n[2]}.svg`} />
                    </div>
                    <div className="flex-1 w-px -mb-12 bg-gray-200 md:-mb-12"></div>
                  </div>
                  <div className="flex flex-col flex-1 ml-2 md:ml-4 space-y-4">
                    <div className="flex flex-col pt-1 contents-center">
                      <h3 className="text-lg font-bold">{n[0]}</h3>
                      <span className="text-sm text-gray-600">{n[1]}</span>
                    </div>
                    <div className="flex flex-col space-y-4">
                      <div className="-mt-2 prose prose-md">
                        <p>{n[3]}</p>
                      </div>
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
          <h1 className="w-full my-2 text-3xl font-bold leading-tight text-center text-white">
            Thank you for visiting.
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

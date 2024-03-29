import { NextPage } from "next";

const Qiita = ({ color = "currentColor", size = 32 }: { color?: string; size?: number }) => {
  return (
    <svg data-name="qiita" width={size} height={size} fill={color} viewBox="-30 -30 375 375">
      <path
        stroke="none"
        d="M259 253C245.218 251.789 229.804 239.198 224 227C216.413 230.382 210.481 236.896 203 240.741C187.625 248.642 169.2 252.207 152 252.961C107.98 254.888 67.17 235.058 55.1551 190C52.1163 178.604 51.5253 166.74 52.0394 155C52.8436 136.634 62.2695 123.002 66.3233 106C68.4899 96.9129 56.5009 82.1868 61.8326 74.2292C67.4063 65.9103 84.0606 78.0647 92 75.1528C108.943 68.9388 120.792 57.4123 140 56.0895C148.987 55.4706 158.216 55.8649 167 57.8873C172.123 59.0669 178.785 63.0204 184 62.3966C191.76 61.4686 202.205 47.3631 209.945 50.2415C220.142 54.0336 213.035 78.6606 217.013 87C220.557 94.4289 227.411 100.729 231.573 108C240.556 123.697 245.124 141.078 246.83 159C248.235 173.752 235.308 196.665 243.943 209C253.374 222.472 268.707 217.1 283 221C324.358 150.128 291.109 52.9426 220 16.2585C169.378 -9.8566 107.293 -4.52832 61 28.0363C42.8348 40.8145 27.8703 58.5178 17.3086 78C-25.6775 157.293 12.7386 258.107 96 290.797C137.594 307.128 188.766 302.884 227 279.796C237.535 273.435 253.622 264.437 259 253z"
      />
      <path
        stroke="none"
        d="M68 117C69.1414 123.573 78.4863 122.763 84 123C80.9114 128.036 74.4785 127.887 69 128L69 132L83 131L70 144L83 139C83.0298 183.941 130.228 186.09 164 180.414C177.346 178.17 192.14 173.977 201.826 163.91C212.308 153.016 212 140.069 212 126L224 129L225 125C219.054 123.535 213.273 123.839 210 118C214.654 117.412 221.234 118.021 223 113C216.808 113.017 211.538 115.02 207 110L223 105L222 101C217.641 101.644 210.335 106.214 206.21 104.644C200.471 102.459 194.846 90.5004 190 86.1736C177.239 74.7807 158.956 69.5289 142 71.1698C126.493 72.6704 110.887 79.5668 100.174 91.0394C95.342 96.2135 91.2383 102.563 88.3125 109C86.9819 111.928 86.1943 117.071 82.7755 118.307C78.7135 119.776 72.2472 117.335 68 117z"
      />
    </svg>
  );
};

const Twitter = ({ color = "currentColor", size = 32 }: { color?: string; size?: number }) => {
  return (
    <svg
      data-name="x"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1200 1227"
      width={size}
      height={size}
      fill={color}
    >
      <path d="M714.163 519.284L1160.89 0H1055.03L667.137 450.887L357.328 0H0L468.492 681.821L0 1226.37H105.866L515.491 750.218L842.672 1226.37H1200L714.137 519.284H714.163ZM569.165 687.828L521.697 619.934L144.011 79.6944H306.615L611.412 515.685L658.88 583.579L1055.08 1150.3H892.476L569.165 687.854V687.828Z" />
    </svg>
  );
};

const GitHub = ({ color = "currentColor", size = 32 }: { color?: string; size?: number }) => {
  return (
    <svg data-name="github" width={size} height={size} fill={color} viewBox="0 0 24 24">
      <path
        stroke="none"
        d="M 10.898438 2.101562 C 6.300781 2.601562 2.601562 6.300781 2.101562 10.800781 C 1.601562 15.5 4.300781 19.699219 8.398438 21.300781 C 8.699219 21.398438 9 21.199219 9 20.800781 L 9 19.199219 C 9 19.199219 8.601562 19.300781 8.101562 19.300781 C 6.699219 19.300781 6.101562 18.101562 6 17.398438 C 5.898438 17 5.699219 16.699219 5.398438 16.398438 C 5.101562 16.300781 5 16.300781 5 16.199219 C 5 16 5.300781 16 5.398438 16 C 6 16 6.5 16.699219 6.699219 17 C 7.199219 17.800781 7.800781 18 8.101562 18 C 8.5 18 8.800781 17.898438 9 17.800781 C 9.101562 17.101562 9.398438 16.398438 10 16 C 7.699219 15.5 6 14.199219 6 12 C 6 10.898438 6.5 9.800781 7.199219 9 C 7.101562 8.800781 7 8.300781 7 7.601562 C 7 7.199219 7 6.601562 7.300781 6 C 7.300781 6 8.699219 6 10.101562 7.300781 C 10.601562 7.101562 11.300781 7 12 7 C 12.699219 7 13.398438 7.101562 14 7.300781 C 15.300781 6 16.800781 6 16.800781 6 C 17 6.601562 17 7.199219 17 7.601562 C 17 8.398438 16.898438 8.800781 16.800781 9 C 17.5 9.800781 18 10.800781 18 12 C 18 14.199219 16.300781 15.5 14 16 C 14.601562 16.5 15 17.398438 15 18.300781 L 15 20.898438 C 15 21.199219 15.300781 21.5 15.699219 21.398438 C 19.398438 19.898438 22 16.300781 22 12.101562 C 22 6.101562 16.898438 1.398438 10.898438 2.101562 Z M 10.898438 2.101562 "
      />
    </svg>
  );
};

const ProfileView: NextPage = () => {
  return (
    <div className="container max-w-5xl mx-auto m-8">
      <h1 className="w-full my-2 text-5xl font-bold leading-tight text-center">Profile</h1>
      <div className="w-full mb-4">
        <div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
      </div>
      <div className="flex flex-wrap items-center justify-center sm:flex-row pt-6">
        <div className="inline-block p-6">
          <div className="rounded-full shadow">
            <img
              src="/images/profile.jpg"
              height={120}
              width={120}
              alt="END"
              className="rounded-full"
            />
          </div>
        </div>
        <div className="w-full sm:w-1/3 p-6">
          <h3 className="text-3xl text-gray-800 font-bold leading-none">END</h3>
          <p className="text-gray-500 text-sm mb-3">@aiandrox</p>
          <p className="text-gray-600">
            岡山→山梨→東京
            <br />
            2020年からエンジニアとして働いています。
            <br />
            業務では、主にRailsを書いています。
            <br />
            <br />
            趣味：リアル脱出ゲーム、カメラ
          </p>
        </div>
      </div>
      <div className="flex flex-wrap mx-auto w-40 items-center justify-between">
        <a
          className="p-1 hover:bg-opacity-50 hover:cursor-pointer"
          href="https://twitter.com/aiandrox"
          target="_blank"
        >
          <Twitter color="#000000" size={24} />
        </a>
        <a
          className="p-1 hover:bg-opacity-50 hover:cursor-pointer"
          href="https://github.com/aiandrox"
          target="_blank"
        >
          <GitHub color="#171515" />
        </a>
        <a
          className="p-1 align-center hover:bg-opacity-50 hover:cursor-pointer"
          href="https://qiita.com/aiandrox"
          target="_blank"
        >
          <Qiita color="#59bb0c" />
        </a>
      </div>
    </div>
  );
};

export default ProfileView;

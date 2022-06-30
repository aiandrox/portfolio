import { NextPage } from "next";
import { Twitter, GitHub } from "react-feather";

const ProfileView: NextPage = () => {
  return (
    <div className="container max-w-5xl mx-auto m-8">
      <h1 className="w-full my-2 text-5xl font-bold leading-tight text-center">
        Profile
      </h1>
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
      <div className="flex flex-wrap mx-auto w-32 items-center justify-between">
        <a
          className="p-3 rounded-full align-center bg-sky-100 hover:bg-opacity-50 hover:cursor-pointer"
          href="https://twitter.com/aiandrox"
          target="_blank"
        >
          <Twitter color="#0284C7" />
        </a>
        <a
          className="p-3 rounded-full align-center bg-slate-200 hover:bg-opacity-50 hover:cursor-pointer"
          href="https://github.com/aiandrox"
          target="_blank"
        >
          <GitHub color="#1E293B" />
        </a>
      </div>
    </div>
  );
};

export default ProfileView;

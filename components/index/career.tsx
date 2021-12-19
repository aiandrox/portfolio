export default function Career() {
  return (
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
  );
}

import { NextPage } from "next";
import Link from "next/link";

const WorksView: NextPage<any> = ({ allWorksData }) => {
  return (
    <div className="container mx-auto px-2 pt-4 pb-1 flex flex-wrap">
      <h1 className="w-full my-2 text-5xl font-bold leading-tight text-center">
        Works
      </h1>
      <div className="w-full mb-4">
        <div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
      </div>

      {allWorksData.map(({ id, date, title, url }) => (
        <div
          key={id}
          className="w-full md:w-1/3 flex flex-col no-underline hover:no-underline"
        >
          <div className="flex-1 overflow-hidden p-6">
            <a href={url} target="_blank">
              <div className="hover:cursor-pointer">
                <img
                  src={`/images/works/${id}.png`}
                  alt={title}
                  className="rounded-lg shadow-lg hover:shadow-none"
                />

                <p className="w-full text-gray-600 text-xs md:text-sm pt-4">
                  {date}
                </p>
                <div className="w-full font-bold text-xl text-gray-800">
                  {title}
                </div>
              </div>
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default WorksView;

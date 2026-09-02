import { NextPage } from "next";
import Link from "next/link";
import { Work } from "../../lib/works";

const WorksView: NextPage<any> = ({
  allWorksData,
}: {
  allWorksData: Work[];
}) => {
  return (
    <div className="container mx-auto px-2 pt-4 pb-1 flex flex-wrap">
      <h1 className="w-full my-2 text-5xl font-bold leading-tight text-center">
        Works
      </h1>
      <div className="w-full mb-4">
        <div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
      </div>

      {allWorksData.map((work: Work) => {
        return (
          <div key={work.id} className="w-full md:w-1/3 flex flex-col">
            <div className="flex-1 overflow-hidden px-3 md:px-6 py-6">
              <Link
                href={`/works/${work.id}`}
                className="block no-underline hover:no-underline"
              >
                <img
                  src={`/images/works/${work.id}.png`}
                  alt={work.title}
                  className="w-full aspect-video object-cover object-top rounded-lg shadow-lg hover:shadow-none"
                />

                <p className="w-full text-gray-600 text-xs md:text-sm pt-4">
                  {work.date}
                </p>
                <div className="w-full font-bold text-xl text-gray-800">
                  {work.title}
                </div>
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default WorksView;

import { NextPage } from "next";
import { useState } from "react";
import { Work } from "../../lib/works";
import WorkModal from "./workModal";

const WorksView: NextPage<any> = ({ allWorksData }) => {
  const [currentWork, setCurrentWork] = useState<Work>();
  const [viewedWorkModal, setViewedWorkModal] = useState<boolean>(false);

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
          <>
            <div
              key={work.id}
              className="w-full md:w-1/3 flex flex-col no-underline hover:no-underline"
            >
              <div className="flex-1 overflow-hidden px-3 md:px-6 py-6">
                <div
                  className="hover:cursor-pointer"
                  onClick={() => {
                    setCurrentWork(work);
                    setViewedWorkModal(true);
                  }}
                >
                  <img
                    src={`/images/works/${work.id}.png`}
                    alt={work.title}
                    className="rounded-lg shadow-lg hover:shadow-none"
                  />

                  <p className="w-full text-gray-600 text-xs md:text-sm pt-4">
                    {work.date}
                  </p>
                  <div className="w-full font-bold text-xl text-gray-800">
                    {work.title}
                  </div>
                </div>
              </div>
            </div>
          </>
        );
      })}
      <WorkModal
        viewed={viewedWorkModal}
        setViewedWorkModal={setViewedWorkModal}
        work={currentWork}
      />
    </div>
  );
};

export default WorksView;

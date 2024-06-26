import { NextPage } from "next";
import { Dispatch } from "react";
import Date from "../../components/date";
import { Work } from "../../lib/works";

type Props = {
  viewed: boolean;
  setViewedWorkModal: Dispatch<boolean>;
  work: Work;
};

const WorksModal: NextPage<any> = ({ viewed, setViewedWorkModal, work }: Props) => {
  return (
    <>
      {viewed && (
        <div
          className="overflow-y-auto overflow-x-hidden fixed justify-center items-center sm:inset-0 h-modal sm:h-full flex ease-in-out inset-0 z-20 outline-none bg-black bg-opacity-30"
          aria-labelledby="modal-title"
          role="dialog"
          aria-modal="true"
          onClick={() => setViewedWorkModal(false)}
        >
          <div className="sm:relative w-full h-full sm:h-auto sm:px-4 z-30">
            <div
              className="fixed transform bottom-0 sm:static container mx-auto w-full sm:max-w-3xl overflow-scroll bg-white sm:shadow-lg sm:rounded-lg rounded-t-lg"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <h3 className="font-bold text-xl text-gray-900">{work.title}</h3>
                <div className="mb-2 text-sm text-gray-500">
                  <Date dateString={work.date} />
                </div>

                {work.technologies?.length && (
                  <ul className="flex space-x-1 mb-2">
                    {work.technologies.map((technologyName) => {
                      return (
                        <li
                          key={technologyName}
                          className="relative w-fit h-fit px-2 py-0 text-xs border rounded-full bg-gray-50"
                        >
                          {technologyName}
                        </li>
                      );
                    })}
                  </ul>
                )}

                <div
                  className="markdown text-gray-600 mt-5"
                  dangerouslySetInnerHTML={{ __html: work.contentHtml }}
                />
              </div>

              <div className="bg-gray-100 px-4 py-3">
                <div className="flex justify-center w-full sm:w-1/2 rounded-md overflow-hidden">
                  <a
                    href={work.repo_url}
                    target="_blank"
                    className={`w-full inline-flex justify-center px-4 py-2 text-base font-medium bg-white text-gray-700 border border-gray-300 border-r-0 rounded-l-md ${
                      work.repo_url ? "hover:opacity-80" : ""
                    }`}
                  >
                    GitHub
                  </a>
                  <a
                    href={work.url}
                    target="_blank"
                    className={`w-full inline-flex justify-center px-4 py-2 text-base font-medium text-white ${
                      work.url ? "gradient hover:opacity-80" : "bg-gray-300"
                    }`}
                  >
                    {work.url ? "Website" : "Website Closed"}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default WorksModal;

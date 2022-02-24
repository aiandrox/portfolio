import { NextPage } from "next";
import Date from "../../components/date";

type Props = {
  viewed: boolean;
};

const WorksModal: NextPage<any> = ({ viewed }: Props) => {
  return (
    <>
      {viewed && (
        <div
          className="overflow-y-auto overflow-x-hidden fixed justify-center items-center sm:inset-0 h-modal sm:h-full flex ease-in-out inset-0 z-10 outline-none bg-black bg-opacity-30"
          aria-labelledby="modal-title"
          role="dialog"
          aria-modal="true"
          onClick={() => (viewed = false)}
        >
          <div className="sm:relative w-full h-full sm:h-auto sm:px-4">
            <div className="fixed transform bottom-0 sm:static container mx-auto w-full sm:max-w-3xl overflow-scroll bg-white sm:shadow-lg sm:rounded-lg rounded-t-lg">
              <div className="px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <h3 className="text-lg leading-6 font-medium text-gray-900 mb-2">
                  Hashlog（ハッシュログ）
                </h3>
                <Date dateString="2020-06-15" />

                <ul className="flex space-x-1">
                  <li className="relative w-fit h-fit px-2 py-0 text-xs border rounded-full bg-gray-50">
                    Ruby on Rails
                  </li>
                  <li className="relative w-fit h-fit px-2 py-0 text-xs border rounded-full bg-gray-50">
                    Vue.js
                  </li>
                  <li className="relative w-fit h-fit px-2 py-0 text-xs border rounded-full bg-gray-50">
                    heroku
                  </li>
                  <li className="relative w-fit h-fit px-2 py-0 text-xs border rounded-full bg-gray-50">
                    Twitter API
                  </li>
                </ul>
                <div>
                  <p className="text-gray-600">
                    ハッシュタグを登録するだけで継続を可視化できる、Twitter連携型
                    学習記録サービスです。
                  </p>
                  <p className="text-gray-600">
                    ハッシュタグを登録するだけで継続を可視化できる、Twitter連携型
                    学習記録サービスです。
                  </p>
                </div>
              </div>

              <div className="bg-gray-100 px-4 py-3">
                <div className="flex justify-center w-full sm:w-1/2 rounded-md overflow-hidden">
                  <a
                    href="https://example.com"
                    target="_blank"
                    className="w-full inline-flex justify-center px-4 py-2 text-base font-medium bg-white text-gray-700 hover:bg-gray-50 border border-gray-300 border-r-0 rounded-l-md"
                  >
                    GitHub
                  </a>
                  <a
                    href="https://example.com"
                    target="_blank"
                    className="w-full inline-flex justify-center  px-4 py-2 text-base font-medium gradient text-white hover:opacity-80"
                  >
                    Website
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

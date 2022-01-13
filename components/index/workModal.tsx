import { NextPage } from "next";
import Date from "../../components/date";

import Link from "next/link";

type Props = {
  viewed: boolean;
};

const WorksModal: NextPage<any> = ({ viewed }: Props) => {
  return (
    <>
      {viewed && (
        <div
          className="fixed inset-0 z-10 outline-none bg-black bg-opacity-30"
          aria-labelledby="modal-title"
          role="dialog"
          aria-modal="true"
          onClick={() => (viewed = false)}
        >
          <div className="container mx-auto bg-white rounded-lg overflow-hidden shadow-lg transform transition-all w-full sm:w-3/5">
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
              </div>
            </div>
            <div className="bg-gray-50 px-4 py-3">
              <div className="flex justify-center w-full sm:w-1/2 rounded-md overflow-hidden">
                <a
                  href="https://example.com"
                  target="_blank"
                  type="button"
                  className="w-full inline-flex justify-center px-4 py-2 text-base font-medium bg-white text-gray-700 hover:bg-gray-100"
                >
                  GitHub
                </a>
                <a
                  href="https://example.com"
                  target="_blank"
                  type="button"
                  className="w-full inline-flex justify-center  px-4 py-2 text-base font-medium gradient text-white hover:opacity-80"
                >
                  Website
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default WorksModal;

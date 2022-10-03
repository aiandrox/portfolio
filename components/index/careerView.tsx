import { NextPage } from "next";
import { Career, CareerType } from "../../lib/careers";

const Circle = ({
  type,
  size = 16,
}: {
  type: CareerType;
  size?: number;
  color?: string;
}) => {
  const rgb =
    type == "work"
      ? "94, 85, 66"
      : type == "study"
      ? "32, 141, 195"
      : type == "birthday"
      ? "209, 31, 73"
      : "0, 0, 0";

  const color = `rgb(${rgb})`;
  const rgbaColor = `rgba(${rgb}, 0.15)`;

  return (
    <div
      className="flex justify-center p-3 rounded-full align-center border-4 border-white"
      style={{ backgroundColor: rgbaColor }}
    >
      {type == "work" ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          stroke={color}
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
          <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
        </svg>
      ) : type == "study" ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          stroke={color}
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
          <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
        </svg>
      ) : type == "birthday" ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          stroke={color}
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <polyline points="20 12 20 22 4 22 4 12"></polyline>
          <rect x="2" y="7" width="20" height="5"></rect>
          <line x1="12" y1="22" x2="12" y2="7"></line>
          <path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"></path>
          <path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"></path>
        </svg>
      ) : (
        <></>
      )}
    </div>
  );
};

const CareerView: NextPage<any> = ({
  allCareersData,
}: {
  allCareersData: Career[];
}) => {
  return (
    <div className="container mx-auto flex flex-wrap pt-4">
      <h1 className="w-full my-2 text-5xl font-bold leading-tight text-center">
        Career
      </h1>
      <div className="w-full mb-4">
        <div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
      </div>

      <div className="relative flex flex-col p-6 w-full max-w-xl mx-auto">
        {allCareersData.map(
          ({ id, title, date, endDate, type, description }) => (
            <div key={id} className="flex mb-8">
              <div className="flex flex-col items-center">
                <Circle type={type} />
                <div className="flex-1 w-px -mb-8 bg-gray-200"></div>
              </div>
              <div className="flex flex-col flex-1 ml-2 md:ml-4 space-y-4">
                <div className="flex flex-col pt-1 contents-center">
                  <h3 className="text-lg font-bold">{title}</h3>
                  <span className="text-sm text-gray-600">
                    {date}
                    {endDate && ` 〜 ${endDate}`}
                  </span>
                </div>
                <div className="flex flex-col space-y-4">
                  <div className="-mt-2 prose prose-md">
                    <p className="whitespace-pre-line">{description}</p>
                  </div>
                </div>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default CareerView;

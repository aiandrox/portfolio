import { NextPage } from "next";
import { Career, CareerType } from "../../lib/careers";

const Icon = ({ type }: { type: CareerType }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {type === "work" ? (
        <>
          <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
          <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
        </>
      ) : type === "study" ? (
        <>
          <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
          <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
        </>
      ) : type === "birthday" ? (
        <>
          <path d="M20 12v10H4V12"></path>
          <path d="M2 7h20v5H2z"></path>
          <path d="M12 22V7"></path>
          <path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"></path>
          <path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"></path>
        </>
      ) : null}
    </svg>
  );
};

const CareerView: NextPage<any> = ({
  allCareersData,
}: {
  allCareersData: Career[];
}) => {
  return (
    <div className="pf-wrap-narrow">
      <h2 className="pf-stitle">Career</h2>
      <div className="pf-sbar"></div>

      <div className="pf-timeline">
        {allCareersData.map(({ id, title, date, endDate, type, description }) => (
          <div key={id} className="pf-entry" data-kind={type}>
            <span className="pf-dot">
              <Icon type={type} />
            </span>
            <div className="pf-entry-content">
              <h3>{title}</h3>
              <div className="pf-when">
                {date}
                {endDate && ` 〜 ${endDate}`}
              </div>
              <p>{description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CareerView;

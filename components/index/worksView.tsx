import { NextPage } from "next";
import Link from "next/link";
import { Work } from "../../lib/works";

const WorksView: NextPage<any> = ({ allWorksData }: { allWorksData: Work[] }) => {
  return (
    <div className="pf-wrap">
      <h2 className="pf-stitle">Personal Projects</h2>
      <div className="pf-sbar"></div>

      <div className="pf-works">
        {allWorksData.map((work: Work) => (
          <Link key={work.id} href={`/projects/${work.id}`} className="pf-work">
            <img
              src={`/images/works/${work.id}.png`}
              alt={work.title}
              className="pf-work-thumb"
            />
            <p className="pf-work-date">{work.date}</p>
            <div className="pf-work-name">{work.title}</div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default WorksView;

import Link from "next/link";
import { useEffect, useRef } from "react";
import { WorkSummary } from "../../lib/works";

type Props = {
  works: WorkSummary[];
  currentId: string;
};

const WorksSidebar = ({ works, currentId }: Props) => {
  const activeRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    activeRef.current?.scrollIntoView({ block: "nearest", inline: "nearest" });
  }, [currentId]);

  return (
    <nav className="pf-side">
      {works.map((work) => {
        const active = work.id === currentId;
        return (
          <Link
            key={work.id}
            href={`/projects/${work.id}`}
            ref={active ? activeRef : undefined}
            data-active={active}
          >
            <img
              src={`/images/works/${work.id}.png`}
              alt={work.title}
            />
            <div className="pf-side-name">{work.title}</div>
          </Link>
        );
      })}
    </nav>
  );
};

export default WorksSidebar;

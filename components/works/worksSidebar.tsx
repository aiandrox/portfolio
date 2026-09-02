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
    <div className="rounded-xl border border-gray-200 bg-gray-50 p-2 md:sticky md:top-20 md:max-h-[calc(100vh_-_6rem)] md:overflow-y-auto">
      <nav className="flex gap-2 overflow-x-auto md:flex-col md:overflow-x-visible">
        {works.map((work) => {
          const active = work.id === currentId;
          return (
            <Link
              key={work.id}
              href={`/works/${work.id}`}
              ref={active ? activeRef : undefined}
              className={`block w-40 shrink-0 rounded-lg p-1.5 transition md:w-full md:shrink ${
                active ? "bg-white shadow-sm" : "hover:bg-white/70"
              }`}
            >
              <div className="aspect-video overflow-hidden rounded-md">
                <img
                  src={`/images/works/${work.id}.png`}
                  alt={work.title}
                  className={`h-full w-full object-cover object-top ${
                    active ? "" : "opacity-70"
                  }`}
                />
              </div>
              <div
                className={`hidden truncate pt-1 text-xs md:block ${
                  active ? "font-medium text-gray-900" : "text-gray-500"
                }`}
              >
                {work.title}
              </div>
            </Link>
          );
        })}
      </nav>
    </div>
  );
};

export default WorksSidebar;

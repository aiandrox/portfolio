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
    <nav className="flex gap-3 overflow-x-auto pb-2 md:flex-col md:gap-2 md:overflow-x-visible md:overflow-y-auto md:pb-0 md:pr-2 md:sticky md:top-20 md:max-h-[calc(100vh_-_6rem)]">
      {works.map((work) => {
        const active = work.id === currentId;
        return (
          <Link
            key={work.id}
            href={`/works/${work.id}`}
            ref={active ? activeRef : undefined}
            className={`block w-40 shrink-0 md:w-full md:shrink rounded-lg border-2 transition ${
              active
                ? "border-pink-500"
                : "border-transparent hover:border-gray-300"
            }`}
          >
            <div className="aspect-video overflow-hidden rounded-md">
              <img
                src={`/images/works/${work.id}.png`}
                alt={work.title}
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div className="hidden md:block px-1 pt-1 text-xs text-gray-600 truncate">
              {work.title}
            </div>
          </Link>
        );
      })}
    </nav>
  );
};

export default WorksSidebar;

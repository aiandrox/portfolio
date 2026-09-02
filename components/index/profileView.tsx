import { NextPage } from "next";
import { ReactNode } from "react";

const box = { width: 22, height: 22 };

// 各サービスの公式ブランドカラー
const C = {
  x: "#000000",
  github: "#181717",
  zenn: "#3EA8FF",
  qiita: "#55C500",
  speakerdeck: "#009287",
  note: "#41C9B4",
  rss: "#F26522",
};

const IconX = () => (
  <svg {...box} viewBox="0 0 1200 1227" fill={C.x} aria-hidden="true">
    <path d="M714.163 519.284L1160.89 0H1055.03L667.137 450.887L357.328 0H0L468.492 681.821L0 1226.37H105.866L515.491 750.218L842.672 1226.37H1200L714.137 519.284H714.163ZM569.165 687.828L521.697 619.934L144.011 79.6944H306.615L611.412 515.685L658.88 583.579L1055.08 1150.3H892.476L569.165 687.854V687.828Z" />
  </svg>
);

const IconGitHub = () => (
  <svg {...box} viewBox="0 0 24 24" fill={C.github} aria-hidden="true">
    <path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.5.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.89 1.53 2.34 1.09 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02A9.6 9.6 0 0 1 12 6.8c.85 0 1.71.11 2.51.34 1.91-1.29 2.75-1.02 2.75-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85v2.74c0 .27.18.58.69.48A10 10 0 0 0 22 12c0-5.52-4.48-10-10-10z" />
  </svg>
);

const IconQiita = () => (
  <svg {...box} viewBox="-30 -30 375 375" fill={C.qiita} aria-hidden="true">
    <path d="M259 253C245.218 251.789 229.804 239.198 224 227C216.413 230.382 210.481 236.896 203 240.741C187.625 248.642 169.2 252.207 152 252.961C107.98 254.888 67.17 235.058 55.1551 190C52.1163 178.604 51.5253 166.74 52.0394 155C52.8436 136.634 62.2695 123.002 66.3233 106C68.4899 96.9129 56.5009 82.1868 61.8326 74.2292C67.4063 65.9103 84.0606 78.0647 92 75.1528C108.943 68.9388 120.792 57.4123 140 56.0895C148.987 55.4706 158.216 55.8649 167 57.8873C172.123 59.0669 178.785 63.0204 184 62.3966C191.76 61.4686 202.205 47.3631 209.945 50.2415C220.142 54.0336 213.035 78.6606 217.013 87C220.557 94.4289 227.411 100.729 231.573 108C240.556 123.697 245.124 141.078 246.83 159C248.235 173.752 235.308 196.665 243.943 209C253.374 222.472 268.707 217.1 283 221C324.358 150.128 291.109 52.9426 220 16.2585C169.378 -9.8566 107.293 -4.52832 61 28.0363C42.8348 40.8145 27.8703 58.5178 17.3086 78C-25.6775 157.293 12.7386 258.107 96 290.797C137.594 307.128 188.766 302.884 227 279.796C237.535 273.435 253.622 264.437 259 253z" />
    <path d="M68 117C69.1414 123.573 78.4863 122.763 84 123C80.9114 128.036 74.4785 127.887 69 128L69 132L83 131L70 144L83 139C83.0298 183.941 130.228 186.09 164 180.414C177.346 178.17 192.14 173.977 201.826 163.91C212.308 153.016 212 140.069 212 126L224 129L225 125C219.054 123.535 213.273 123.839 210 118C214.654 117.412 221.234 118.021 223 113C216.808 113.017 211.538 115.02 207 110L223 105L222 101C217.641 101.644 210.335 106.214 206.21 104.644C200.471 102.459 194.846 90.5004 190 86.1736C177.239 74.7807 158.956 69.5289 142 71.1698C126.493 72.6704 110.887 79.5668 100.174 91.0394C95.342 96.2135 91.2383 102.563 88.3125 109C86.9819 111.928 86.1943 117.071 82.7755 118.307C78.7135 119.776 72.2472 117.335 68 117z" />
  </svg>
);

const IconZenn = () => (
  <svg {...box} viewBox="0 0 24 24" fill={C.zenn} aria-hidden="true">
    <path d="M.264 23.771h4.984c.264 0 .498-.147.645-.352L19.614.874c.176-.293-.029-.674-.381-.674h-4.72c-.264 0-.53.147-.646.352L.03 23.098c-.176.323.029.674.234.674m17.647-.294c.117.147.293.264.5.264h4.216c.352 0 .557-.381.381-.674l-4.245-6.478c-.147-.235-.5-.235-.646 0l-2.156 3.288c-.117.206-.117.44 0 .646z" />
  </svg>
);

const strokeBase = {
  ...box,
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

const IconRss = () => (
  <svg {...strokeBase} stroke={C.rss}>
    <path d="M4 11a9 9 0 0 1 9 9" />
    <path d="M4 4a16 16 0 0 1 16 16" />
    <circle cx="5" cy="19" r="1" fill={C.rss} stroke="none" />
  </svg>
);

const IconSlides = () => (
  <svg {...strokeBase} stroke={C.speakerdeck}>
    <rect x="3" y="4" width="18" height="12" rx="1" />
    <path d="M12 16v4" />
    <path d="M8 20h8" />
  </svg>
);

const IconNote = () => (
  <svg {...strokeBase} stroke={C.note}>
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <path d="M9 16v-5" />
    <path d="M9 12a3 3 0 0 1 6 0v4" />
  </svg>
);

type LinkDef = { name: string; href: string; icon: ReactNode };

const links: LinkDef[] = [
  { name: "X", href: "https://x.com/aiandrox", icon: <IconX /> },
  { name: "GitHub", href: "https://github.com/aiandrox", icon: <IconGitHub /> },
  { name: "Blog", href: "https://blog.aiandrox.com", icon: <IconRss /> },
  { name: "Zenn", href: "https://zenn.dev/aiandrox", icon: <IconZenn /> },
  { name: "Qiita", href: "https://qiita.com/aiandrox", icon: <IconQiita /> },
  { name: "Speaker Deck", href: "https://speakerdeck.com/aiandrox", icon: <IconSlides /> },
  { name: "note", href: "https://note.com/aiandrox", icon: <IconNote /> },
];

const ProfileView: NextPage = () => {
  return (
    <div className="pf-wrap">
      <div className="pf-intro">
        <img src="/images/profile.jpg" width={120} height={120} alt="END" className="pf-intro-pic" />
        <div>
          <h1 className="pf-intro-name">END</h1>
          <p className="pf-intro-at">@aiandrox</p>
          <p className="pf-intro-bio">
            岡山 → 山梨 → 東京 → 神奈川
            <br />
            2020年からエンジニアとして働いています。
            <br />
            業務では、主に Rails を書いています。
            <br />
            <br />
            趣味：ボードゲーム、カメラ
          </p>
        </div>
      </div>
      <div className="pf-socials">
        {links.map((l) => (
          <a
            key={l.name}
            href={l.href}
            target="_blank"
            rel="noreferrer"
            aria-label={l.name}
            title={l.name}
          >
            {l.icon}
          </a>
        ))}
      </div>
    </div>
  );
};

export default ProfileView;

import { NextPage } from "next";

type LinkItem = { name: string; href: string; note?: string };

const items: LinkItem[] = [
  { name: "Blog", href: "https://blog.aiandrox.com", note: "Ruby / Rails まわりのメモ" },
  { name: "Zenn", href: "https://zenn.dev/aiandrox" },
  { name: "Qiita", href: "https://qiita.com/aiandrox" },
  { name: "Speaker Deck", href: "https://speakerdeck.com/aiandrox", note: "登壇スライド" },
  { name: "note", href: "https://note.com/aiandrox", note: "開発以外のことも書いています" },
];

const LinksView: NextPage = () => {
  return (
    <div className="pf-wrap">
      <h2 className="pf-stitle">Elsewhere</h2>
      <div className="pf-sbar"></div>

      <div className="pf-linklist">
        {items.map(({ name, href, note }) => (
          <a key={name} href={href} target="_blank" rel="noreferrer">
            <span className="pf-lname">{name}</span>
            {note && <span className="pf-lnote">{note}</span>}
          </a>
        ))}
      </div>
    </div>
  );
};

export default LinksView;

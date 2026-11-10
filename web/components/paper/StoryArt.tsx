import type { ArtStyle } from "../../data/sample";

export function StoryArt({ style, label = "Illustrative editorial artwork" }: { style: ArtStyle; label?: string }) {
  return (
    <svg
      className={`story-art story-art--${style}`}
      data-art={style}
      viewBox="0 0 800 460"
      role="img"
      aria-label={label}
      preserveAspectRatio="xMidYMid slice"
    >
      <rect className="art-ground" width="800" height="460" />
      <circle className="art-sun" cx="618" cy="116" r="76" />
      <path className="art-hill art-hill--back" d="M0 296 154 214l113 53 160-104 144 100 111-60 118 68v189H0z" />
      <path className="art-hill art-hill--front" d="m0 346 146-76 130 59 155-87 115 72 121-56 133 57v145H0z" />
      <g className="art-ledger" aria-hidden="true">
        <rect x="112" y="82" width="268" height="236" rx="2" />
        <rect className="art-sheet" x="146" y="112" width="268" height="236" rx="2" />
        <rect className="art-rule" x="179" y="151" width="150" height="10" />
        <rect className="art-rule art-rule--short" x="179" y="181" width="195" height="7" />
        <rect className="art-rule art-rule--short" x="179" y="204" width="177" height="7" />
        <rect className="art-column" x="180" y="244" width="28" height="68" />
        <rect className="art-column art-column--high" x="224" y="225" width="28" height="87" />
        <rect className="art-column" x="268" y="260" width="28" height="52" />
        <rect className="art-column art-column--high" x="312" y="214" width="28" height="98" />
      </g>
      <g className="art-city" aria-hidden="true">
        <rect x="114" y="194" width="96" height="152" />
        <rect x="230" y="141" width="132" height="205" />
        <rect x="382" y="184" width="104" height="162" />
        <rect x="510" y="113" width="126" height="233" />
        <rect x="660" y="207" width="72" height="139" />
        <rect className="art-window" x="254" y="172" width="19" height="19" />
        <rect className="art-window" x="294" y="172" width="19" height="19" />
        <rect className="art-window" x="254" y="211" width="19" height="19" />
        <rect className="art-window" x="294" y="211" width="19" height="19" />
        <rect className="art-window" x="536" y="145" width="24" height="24" />
        <rect className="art-window" x="582" y="145" width="24" height="24" />
        <rect className="art-window" x="536" y="192" width="24" height="24" />
        <rect className="art-window" x="582" y="192" width="24" height="24" />
      </g>
      <path className="art-baseline" d="M0 346h800v114H0z" />
      <path className="art-line" d="M68 383c94-39 163-39 249 0s163 38 250 0 130-36 233 0" />
    </svg>
  );
}

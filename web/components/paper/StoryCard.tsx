import type { CSSProperties } from "react";
import type { SampleStory } from "../../data/sample";
import { StoryArt } from "./StoryArt";

type StoryCardProps = {
  story: SampleStory;
  showArtwork?: boolean;
};

export function StoryWhy({ story }: { story: SampleStory }) {
  return (
    <details className="story-why">
      <summary>Why this?</summary>
      <p>{story.whyThis}</p>
    </details>
  );
}

export function StoryCard({ story, showArtwork = true }: StoryCardProps) {
  const cardStyle: CSSProperties & { "--story-field"?: string } = story.colourToken
    ? { "--story-field": `var(${story.colourToken})` }
    : {};

  return (
    <article className={`story-card story-card--${story.variant}`} style={cardStyle} id={story.id}>
      {showArtwork && story.variant !== "compact" && (
        <figure className="story-card-art">
          <StoryArt style={story.art} />
        </figure>
      )}
      <div className="story-card-copy">
        <p className="story-kicker ledger-label">
          <span>{story.section}</span>
        </p>
        <h3>{story.headline}</h3>
        <p className="story-deck">{story.deck}</p>
        <div className="story-meta">
          <span>{story.readingTime}</span>
          <span>Source: demo copy</span>
        </div>
        <StoryWhy story={story} />
      </div>
    </article>
  );
}

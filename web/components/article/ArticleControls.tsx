import { articleMockup, type ReadingLevel } from "../../data/article";

const readingOptions: { value: ReadingLevel; label: string }[] = [
  { value: "original", label: "Original" },
  { value: "plain-english", label: "Plain English" },
  { value: "eli5", label: "ELI5" },
];

export function ReadingView() {
  return (
    <section className="reading-view" aria-labelledby="article-body-label">
      <fieldset className="reading-controls">
        <legend className="ledger-label" id="article-body-label">Reading version</legend>
        <div className="reading-toggle" role="radiogroup" aria-label="Choose a reading version">
          {readingOptions.map((option) => (
            <span className="reading-option" key={option.value}>
              <input
                className="reading-radio"
                defaultChecked={option.value === "original"}
                id={`reading-${option.value}`}
                name="reading-version"
                type="radio"
                value={option.value}
              />
              <label htmlFor={`reading-${option.value}`}>{option.label}</label>
            </span>
          ))}
        </div>
      </fieldset>
      <div className="article-body" id="article-body">
        {readingOptions.map((option) => (
          <div className={`article-version article-version-${option.value}`} key={option.value}>
            {articleMockup.readingVersions[option.value].map((paragraph, index) => (
              <p className={index === 0 ? "article-opening" : undefined} key={`${option.value}-${index}`}>
                {highlightTerm(paragraph)}
              </p>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}

function highlightTerm(paragraph: string) {
  const highlighted = /(basis points|lower monthly payment|not the whole picture)/gi;
  return paragraph.split(highlighted).map((part, index) => {
    if (/^basis points$/i.test(part)) return <mark className="article-term" key={index}>{part}</mark>;
    if (/^lower monthly payment$/i.test(part)) return <strong key={index}>{part}</strong>;
    if (/^not the whole picture$/i.test(part)) return <em key={index}>{part}</em>;
    return <span key={index}>{part}</span>;
  });
}

export function RatingControl() {
  return (
    <fieldset className="article-rating">
      <legend className="ledger-label">Was this explanation clear?</legend>
      <div className="rating-stars" role="radiogroup" aria-label="Rate this illustrative story">
        {[1, 2, 3, 4, 5].map((star) => (
          <span className="rating-option" key={star}>
            <input className="rating-radio" id={`rating-${star}`} name="article-rating" type="radio" value={star} />
            <label aria-label={`${star} ${star === 1 ? "star" : "stars"}`} className="rating-star" htmlFor={`rating-${star}`}>
              <span aria-hidden="true">★</span>
            </label>
          </span>
        ))}
      </div>
      <div aria-live="polite" className="rating-response">
        <p className="rating-response-empty">Choose a star to record a local sample rating.</p>
        {[1, 2, 3, 4, 5].map((star) => (
          <p className={`rating-response-${star}`} key={star}>Your illustrative rating: {star} out of 5.</p>
        ))}
      </div>
    </fieldset>
  );
}

export function WhyThis() {
  return (
    <details className="article-why">
      <summary className="why-this-button">Why this?</summary>
      <p>This sample is filed under Personal Finance to demonstrate the article layout. No reader profile or recommendation system is active here.</p>
    </details>
  );
}

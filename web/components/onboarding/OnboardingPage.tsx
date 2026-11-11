"use client";

import Link from "next/link";
import { useState } from "react";
import { knowledgeLevels, onboardingTopics, wideOnboardingTopics, type KnowledgeLevel, type OnboardingTopic } from "../../data/onboarding";

const requiredTopicCount = 5;

function OnboardingMasthead() {
  return (
    <header className="onboarding-masthead" id="top">
      <div className="onboarding-overline ledger-label">
        <span>A considered daily edition</span>
        <span>Choose your sections</span>
        <span>For curious readers</span>
      </div>
      <Link className="onboarding-brand-link" href="/" aria-label="The Daily Ledger front page">
        <span className="onboarding-brand">The Daily Ledger</span>
      </Link>
      <p className="onboarding-tagline">Markets and money, made legible.</p>
      <nav className="onboarding-nav ledger-label" aria-label="Publication navigation">
        <Link href="/">Front page</Link>
        <span aria-current="page">Your edition</span>
      </nav>
    </header>
  );
}

export function OnboardingPage() {
  const [selectedTopics, setSelectedTopics] = useState<OnboardingTopic[]>([]);
  const [knowledgeLevel, setKnowledgeLevel] = useState<KnowledgeLevel | "">("");
  const [showPreview, setShowPreview] = useState(false);
  const selectionLimitReached = selectedTopics.length === requiredTopicCount;
  const canContinue = selectedTopics.length === requiredTopicCount;

  function toggleTopic(topic: OnboardingTopic) {
    setShowPreview(false);
    setSelectedTopics((current) => {
      if (current.includes(topic)) return current.filter((item) => item !== topic);
      if (current.length >= requiredTopicCount) return current;
      return [...current, topic];
    });
  }

  function chooseKnowledgeLevel(level: KnowledgeLevel) {
    setKnowledgeLevel(level);
    setShowPreview(false);
  }

  return (
    <main className="onboarding-page">
      <a className="onboarding-skip-link" href="#topic-selection">Skip to topic selection</a>
      <div className="onboarding-frame">
        <OnboardingMasthead />

        <section className="onboarding-intro" aria-labelledby="onboarding-title">
          <p className="onboarding-kicker ledger-label">A paper shaped around you</p>
          <h1 id="onboarding-title">Your paper. Your interests.</h1>
          <p className="onboarding-deck">
            Choose five subjects you’d like to understand better. We’ll use them to shape your daily edition.
          </p>
          <p className="onboarding-illustrative ledger-label">Static onboarding mockup · choices stay in this page</p>
        </section>

        <section className="onboarding-selection" id="topic-selection" aria-labelledby="topic-heading">
          <div className="onboarding-section-heading">
            <div>
              <p className="ledger-label">The section index</p>
              <h2 id="topic-heading">What belongs in your paper?</h2>
            </div>
            <p className="topic-counter" aria-live="polite" aria-atomic="true">
              <strong>{selectedTopics.length} of {requiredTopicCount}</strong> chosen
            </p>
          </div>

          <p className="topic-instruction" id="topic-instruction">
            Choose five sections. You can change your selection before continuing.
          </p>
          <div className="topic-index" role="group" aria-label="Choose five newspaper sections" aria-describedby="topic-instruction topic-limit-message">
            {onboardingTopics.map((topic, index) => {
              const selected = selectedTopics.includes(topic);
              const blockedByLimit = selectionLimitReached && !selected;

              return (
                <button
                  aria-pressed={selected}
                  className={`topic-tag${selected ? " topic-tag--selected" : ""}${wideOnboardingTopics.includes(topic) ? " topic-tag--wide" : ""}`}
                  disabled={blockedByLimit}
                  key={topic}
                  onClick={() => toggleTopic(topic)}
                  type="button"
                >
                  <span className="topic-tag-number" aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
                  <span>{topic}</span>
                  <span className="topic-tag-state" aria-hidden="true">{selected ? "✓" : "+"}</span>
                </button>
              );
            })}
          </div>
          <p className="topic-limit-message" id="topic-limit-message" aria-live="polite">
            {selectionLimitReached
              ? "Five sections chosen. Remove one to make room for another."
              : "Your five choices will set the rhythm of each edition."}
          </p>
        </section>

        <section className="knowledge-section" aria-labelledby="knowledge-heading">
          <div className="knowledge-intro">
            <p className="ledger-label">A note on the language</p>
            <h2 id="knowledge-heading">How familiar is finance to you?</h2>
            <p>This is optional. Choose the level of explanation that feels right today.</p>
          </div>
          <fieldset className="knowledge-options">
            <legend className="ledger-label">Choose a reading level (optional)</legend>
            <div className="knowledge-grid">
              {knowledgeLevels.map((level) => (
                <div className="knowledge-option" key={level.id}>
                  <input
                    checked={knowledgeLevel === level.id}
                    id={`knowledge-${level.id}`}
                    name="knowledge-level"
                    onChange={() => chooseKnowledgeLevel(level.id)}
                    type="radio"
                    value={level.id}
                  />
                  <label htmlFor={`knowledge-${level.id}`}>
                    <span className="knowledge-option-title">{level.label}</span>
                    <span>{level.description}</span>
                  </label>
                </div>
              ))}
            </div>
          </fieldset>
        </section>

        <section className="onboarding-actions" aria-label="Finish this mockup">
          <div>
            <button
              className="onboarding-continue"
              disabled={!canContinue}
              onClick={() => setShowPreview(true)}
              type="button"
            >
              Continue to your paper <span aria-hidden="true">→</span>
            </button>
            <p className="continue-caption">Available once you’ve chosen five sections.</p>
          </div>
          <p className="onboarding-advice">For learning and information only. Not financial advice.</p>
        </section>

        {showPreview && (
          <aside className="onboarding-preview" role="status" aria-live="polite">
            <p className="ledger-label">Your sample edition is ready to imagine</p>
            <p><strong>Sections:</strong> {selectedTopics.join(", ")}</p>
            <p><strong>Reading level:</strong> {knowledgeLevels.find((item) => item.id === knowledgeLevel)?.label ?? "Not selected"}</p>
            <p>This static mockup does not save preferences or open a personalised edition.</p>
          </aside>
        )}
      </div>
    </main>
  );
}

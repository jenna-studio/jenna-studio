"use client";

import { useEffect, useState } from "react";
import { chromeThemes } from "../content";
import { castVote, fetchVoteCounts, themeVoteId, votedThemes, votingEnabled } from "../theme-votes";

export default function ThemeGallery() {
  const [counts, setCounts] = useState<Record<string, number>>({});
  const [voted, setVoted] = useState<string[]>([]);
  const [pending, setPending] = useState<string | null>(null);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    if (!votingEnabled) return;
    setVoted(votedThemes());
    fetchVoteCounts().then(setCounts).catch((err) => { console.warn("[theme votes] disabled:", err); setFailed(true); });
  }, []);

  const vote = async (themeId: string) => {
    setPending(themeId);
    try {
      await castVote(themeId);
      setVoted((prev) => [...new Set([...prev, themeId])]);
      setCounts((prev) => ({ ...prev, [themeId]: (prev[themeId] ?? 0) + 1 }));
    } catch (err) {
      console.warn("[theme votes] vote failed:", err);
      setFailed(true);
    } finally {
      setPending(null);
    }
  };

  const leader = chromeThemes.map(([name, , url]) => [name, counts[themeVoteId(url)] ?? 0] as const).sort((a, b) => b[1] - a[1])[0];
  const showVoting = votingEnabled && !failed;

  return (
    <>
      {showVoting && <p className="theme-vote-intro">Which one is your favourite? Vote for as many as you like{leader && leader[1] > 0 ? `. Leading right now: ${leader[0]}` : "."}</p>}
      <div className="theme-gallery">
        {chromeThemes.map(([name, file, url]) => {
          const themeId = themeVoteId(url);
          const hasVoted = voted.includes(themeId);
          return (
            <div className="theme-card" key={name}>
              <a className="theme-shot" href={url} target="_blank" rel="noreferrer" tabIndex={-1} aria-hidden="true"><img src={`/media/chrome-theme-thumbnails/${file}`} alt="" /></a>
              <div className="theme-card-foot">
                <a href={url} target="_blank" rel="noreferrer"><span>{name} ↗︎</span></a>
                {showVoting && (
                  <button type="button" className="theme-vote" onClick={() => vote(themeId)} disabled={hasVoted || pending === themeId} aria-label={hasVoted ? `You voted for ${name}` : `Vote for ${name}`} aria-pressed={hasVoted}>
                    <b aria-hidden="true">{hasVoted ? "♥" : "♡"}</b>{counts[themeId] ?? 0}
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

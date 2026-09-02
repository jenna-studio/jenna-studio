"use client";

import { useEffect, useMemo, useRef, useState } from "react";

type Contribution = { date: string; count: number; level: number };

export function ContributionActivity() {
  const [days, setDays] = useState<Contribution[]>([]);
  const [failed, setFailed] = useState(false);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    fetch("https://github-contributions-api.jogruber.de/v4/jenna-studio?y=last")
      .then((response) => response.ok ? response.json() : Promise.reject())
      .then((data) => setDays((data.contributions || []).sort((a: Contribution, b: Contribution) => a.date.localeCompare(b.date))))
      .catch(() => setFailed(true));
  }, []);

  // Narrow screens cannot show a full year, so open on the most recent weeks and
  // let the reader scroll left into the past.
  useEffect(() => {
    const grid = gridRef.current;
    if (grid) grid.scrollLeft = grid.scrollWidth;
  }, [days]);

  const stats = useMemo(() => {
    const total = days.reduce((sum, day) => sum + (day.count || 0), 0);
    let longest = 0;
    let run = 0;
    days.forEach((day) => { run = day.count > 0 ? run + 1 : 0; longest = Math.max(longest, run); });
    let current = 0;
    for (let index = days.length - 1; index >= 0; index -= 1) {
      if (days[index].count > 0) current += 1;
      else if (index !== days.length - 1) break;
    }
    return { total, longest, current };
  }, [days]);

  return (
    <section className="content-section contribution-section">
      <div className="content-heading"><p className="section-kicker">Open source</p><h2>Contribution Activity</h2></div>
      <div className="contribution-panel">
        <div className="contribution-panel-top"><strong>GitHub <span>@jenna-studio</span></strong><a href="https://github.com/jenna-studio" target="_blank" rel="noreferrer">View profile ↗︎</a></div>
        {failed ? <p>Could not load contribution data. <a href="https://github.com/jenna-studio" target="_blank" rel="noreferrer">View on GitHub →</a></p> : days.length ? (
          <>
            <div className="contribution-grid" ref={gridRef} aria-label="GitHub contribution activity">
              {days.map((day) => <span className={`level-${day.level}`} title={`${day.count} contributions on ${day.date}`} key={day.date} />)}
            </div>
            <div className="contribution-stats">
              <div><b>{stats.total.toLocaleString()}</b><span>Contributions in the last year</span></div>
              <div><b>{stats.longest}</b><span>Longest streak</span></div>
              <div><b>{stats.current}</b><span>Current streak · {stats.current > 0 ? "Keep it up" : "Start one today"}</span></div>
            </div>
            <div className="contribution-legend"><span>Less</span>{[0,1,2,3,4].map((level) => <i className={`level-${level}`} key={level} />)}<span>More</span></div>
          </>
        ) : <p>Loading contributions…</p>}
      </div>
    </section>
  );
}

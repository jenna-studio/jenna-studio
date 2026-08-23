// Tolerate a project URL pasted with a trailing slash or a /rest/v1 suffix.
const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL?.replace(/\/+$/, "").replace(/\/rest\/v1$/, "");
const SUPABASE_ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

// Voting stays hidden until both build-time vars are set, so the gallery keeps
// working unchanged before Supabase is wired up.
export const votingEnabled = Boolean(SUPABASE_URL && SUPABASE_ANON_KEY);

const VOTER_KEY = "jenna-studio-voter-id";
const VOTED_KEY = "jenna-studio-voted-themes";

// The Chrome Web Store extension id is the last path segment of every listing
// URL and never changes, so it is a safer vote key than the display name.
export const themeVoteId = (storeUrl: string) => storeUrl.split("?")[0].replace(/\/$/, "").split("/").pop() ?? storeUrl;

const readJson = <T,>(key: string, fallback: T): T => {
  try {
    const raw = localStorage.getItem(key);
    return raw ? (JSON.parse(raw) as T) : fallback;
  } catch {
    return fallback;
  }
};

export const votedThemes = (): string[] => (typeof window === "undefined" ? [] : readJson<string[]>(VOTED_KEY, []));

const rememberVote = (themeId: string) => {
  try {
    localStorage.setItem(VOTED_KEY, JSON.stringify([...new Set([...votedThemes(), themeId])]));
  } catch {
    // Private mode or blocked storage: the vote still counted server-side.
  }
};

const voterId = (): string => {
  try {
    const existing = localStorage.getItem(VOTER_KEY);
    if (existing) return existing;
    const fresh = crypto.randomUUID();
    localStorage.setItem(VOTER_KEY, fresh);
    return fresh;
  } catch {
    return crypto.randomUUID();
  }
};

const headers = { apikey: SUPABASE_ANON_KEY ?? "", Authorization: `Bearer ${SUPABASE_ANON_KEY ?? ""}` };

export async function fetchVoteCounts(): Promise<Record<string, number>> {
  if (!votingEnabled) return {};
  const res = await fetch(`${SUPABASE_URL}/rest/v1/theme_vote_counts?select=theme_id,votes`, { headers });
  if (!res.ok) throw new Error(`vote counts failed: ${res.status} ${await res.text()}`);
  const rows = (await res.json()) as { theme_id: string; votes: number }[];
  return Object.fromEntries(rows.map((row) => [row.theme_id, row.votes]));
}

export async function castVote(themeId: string): Promise<void> {
  if (!votingEnabled) return;
  const res = await fetch(`${SUPABASE_URL}/rest/v1/theme_votes`, {
    method: "POST",
    headers: { ...headers, "Content-Type": "application/json", Prefer: "return=minimal" },
    body: JSON.stringify({ theme_id: themeId, voter_id: voterId() }),
  });
  // 409 means this browser already voted for the theme, which is a success here.
  if (!res.ok && res.status !== 409) throw new Error(`vote failed: ${res.status} ${await res.text()}`);
  rememberVote(themeId);
}

-- Run once in the Supabase SQL editor (Dashboard > SQL Editor > New query).

create table if not exists public.theme_votes (
  id         bigint generated always as identity primary key,
  theme_id   text        not null,
  voter_id   uuid        not null,
  created_at timestamptz not null default now(),
  unique (theme_id, voter_id)
);

create index if not exists theme_votes_theme_id_idx on public.theme_votes (theme_id);

alter table public.theme_votes enable row level security;

-- Visitors may add a vote and nothing else: no select, update, or delete policy
-- exists, so the raw rows (and voter ids) are never readable from the browser.
drop policy if exists "anyone can vote" on public.theme_votes;
create policy "anyone can vote" on public.theme_votes for insert to anon with check (true);

-- Aggregate view. security_invoker = false runs it as the owner, so anon can
-- read the totals without being able to read the underlying table.
create or replace view public.theme_vote_counts with (security_invoker = false) as
  select theme_id, count(*)::int as votes
  from public.theme_votes
  group by theme_id;

grant select on public.theme_vote_counts to anon;

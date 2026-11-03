-- BLACKOUT FACTORY — classement partagé (Supabase / PostgreSQL)
-- 1. Créer un projet Supabase.
-- 2. Dans Authentication > Providers > Anonymous, autoriser les connexions anonymes.
-- 3. Coller ce script dans SQL Editor > Run.
-- 4. Copier Project URL + clé anon/publishable dans factory/config.js.
-- ATTENTION : jamais la clé service_role dans un site public.
create table if not exists public.blackout_factory_scores (
  id uuid primary key default gen_random_uuid(),
  room text not null check (length(room) between 2 and 24),
  user_id uuid not null references auth.users(id) on delete cascade,
  nickname text not null check (length(nickname) between 2 and 24),
  team text not null default 'Solo' check (length(team) between 1 and 24),
  score integer not null default 0 check (score between 0 and 2400),
  progress integer not null default 0 check (progress between 0 and 5),
  elapsed_seconds integer not null default 0 check (elapsed_seconds between 0 and 86400),
  updated_at timestamptz not null default now(),
  constraint blackout_room_user unique (room, user_id)
);
create index if not exists blackout_factory_room_score_idx
  on public.blackout_factory_scores(room,score desc,elapsed_seconds asc);
alter table public.blackout_factory_scores enable row level security;
drop policy if exists "bf_select" on public.blackout_factory_scores;
drop policy if exists "bf_insert_own" on public.blackout_factory_scores;
drop policy if exists "bf_update_own" on public.blackout_factory_scores;
create policy "bf_select" on public.blackout_factory_scores
  for select to authenticated using (true);
create policy "bf_insert_own" on public.blackout_factory_scores
  for insert to authenticated with check (auth.uid() = user_id);
create policy "bf_update_own" on public.blackout_factory_scores
  for update to authenticated using (auth.uid() = user_id)
  with check (auth.uid() = user_id);
-- Autoriser la diffusion des changements de score.
do $$
begin
  if not exists (
    select 1 from pg_publication_tables
    where pubname='supabase_realtime'
      and schemaname='public'
      and tablename='blackout_factory_scores'
  ) then
    alter publication supabase_realtime add table public.blackout_factory_scores;
  end if;
end $$;
-- Classement ludique, NON CERTIFICATIF : les scores soumis par le client
-- peuvent être manipulés. Pour un classement antifraude, utiliser un
-- serveur qui attribue les points et valide les réponses.

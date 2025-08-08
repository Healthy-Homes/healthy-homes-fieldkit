-- Create mailing list subscribers table
create table if not exists public.mailing_list_subscribers (
  id uuid primary key default gen_random_uuid(),
  email text not null,
  created_at timestamptz not null default now(),
  referrer text,
  user_agent text,
  ip text,
  constraint email_format_chk check (email ~* '^[^@\s]+@[^@\s]+\.[^@\s]+$')
);

-- Ensure emails are stored lowercase and trimmed
create or replace function public.normalize_email_before_insert()
returns trigger as $$
begin
  new.email := lower(trim(new.email));
  return new;
end;
$$ language plpgsql;

-- Attach trigger (create if not exists pattern via drop/create for idempotency)
drop trigger if exists trg_normalize_email_before_insert on public.mailing_list_subscribers;
create trigger trg_normalize_email_before_insert
before insert on public.mailing_list_subscribers
for each row execute function public.normalize_email_before_insert();

-- Case-insensitive unique constraint on email
create unique index if not exists mailing_list_subscribers_email_unique_ci
  on public.mailing_list_subscribers (lower(email));

-- Helpful index for recency queries
create index if not exists idx_mailing_list_subscribers_created_at
  on public.mailing_list_subscribers (created_at desc);

-- Enable Row Level Security
alter table public.mailing_list_subscribers enable row level security;

-- Allow anonymous and authenticated clients to insert rows (no read access by default)
create policy if not exists "Allow anonymous inserts for mailing list"
  on public.mailing_list_subscribers
  for insert
  to anon, authenticated
  with check (true);

-- Note: No SELECT/UPDATE/DELETE policies added, so public clients cannot read or modify data.

-- Fix function clause order and set search_path safely
create or replace function public.normalize_email_before_insert()
returns trigger
language plpgsql
set search_path = public
as $$
begin
  new.email := lower(trim(new.email));
  return new;
end;
$$;
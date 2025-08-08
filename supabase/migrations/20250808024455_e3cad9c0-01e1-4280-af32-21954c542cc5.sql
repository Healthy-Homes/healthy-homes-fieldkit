-- Secure function by fixing mutable search_path
create or replace function public.normalize_email_before_insert()
set search_path = public
returns trigger as $$
begin
  new.email := lower(trim(new.email));
  return new;
end;
$$ language plpgsql;
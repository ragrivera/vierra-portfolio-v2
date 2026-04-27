import { Placeholder } from '../components/Placeholder';

export function SiteEditor() {
  return (
    <Placeholder
      title="Site settings"
      note="Singleton form: handle, hero subtitle/status/location/stack/commits, HUD toggles, contact email + socials, footer line. Wires to PATCH /admin/site once the API is built."
    />
  );
}

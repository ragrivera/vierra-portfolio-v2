import { Placeholder } from '../components/Placeholder';

export function AboutEditor() {
  return (
    <Placeholder
      title="About"
      note="Singleton editor: bodyMd (with <em>/<cy>/<pu> inline accents) + idCardRows[] (label/value/accent). Wires to PATCH /admin/about."
    />
  );
}

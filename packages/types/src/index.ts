// Non-DB shared types. DB-derived types live in @vierra/db.

export type Social = { label: string; href: string };
export type IdCardRow = { label: string; value: string; accent?: 'ok' | 'pink' };

export type AccentMode = 'balanced' | 'purple' | 'pink' | 'cyan';
export type Density = 'compact' | 'comfortable' | 'spacious';

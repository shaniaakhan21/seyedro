interface IconProps {
  size?: number;
  stroke?: string;
}

export function ShieldCheckIcon({ size = 26, stroke = '#0A0A0A' }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={stroke} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3l7 2.6v5.4c0 4.4-3 6.9-7 8.4-4-1.5-7-4-7-8.4V5.6z" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  );
}

export function CoinIcon({ size = 26, stroke = '#0A0A0A' }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={stroke} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="8" />
      <path d="M12 7v10M9.5 9.2A2.4 2.4 0 0 1 12 8c1.4 0 2.5.8 2.5 1.9M14.5 14.4A2.6 2.6 0 0 1 12 16c-1.4 0-2.5-.8-2.5-2" />
    </svg>
  );
}

export function TruckIcon({ size = 26, stroke = '#0A0A0A' }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={stroke} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 7h11v8H3z" />
      <path d="M14 10h4l3 3v2h-7z" />
      <circle cx="7" cy="17" r="1.8" />
      <circle cx="17.5" cy="17" r="1.8" />
    </svg>
  );
}

export function GlobeIcon({ size = 26, stroke = '#0A0A0A' }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={stroke} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18" />
    </svg>
  );
}

export function PaintIcon({ size = 28, stroke = 'var(--brand-accent)' }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={stroke} strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="4" width="13" height="6" rx="1.2" />
      <path d="M16 7h2.6a1.4 1.4 0 0 1 1.4 1.4V11a1 1 0 0 1-1 1h-7" />
      <path d="M9.6 12v3.5H8a1 1 0 0 0-1 1V21" />
    </svg>
  );
}

export function ResinIcon({ size = 28, stroke = 'var(--brand-accent)' }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={stroke} strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 3h6" />
      <path d="M10.5 3v5L6.5 16.5A1.5 1.5 0 0 0 7.9 18.8h8.2a1.5 1.5 0 0 0 1.4-2.3L13.5 8V3" />
      <path d="M8.4 14h7.2" />
    </svg>
  );
}

export function ThinnerIcon({ size = 28, stroke = 'var(--brand-accent)' }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={stroke} strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      <path d="M8 2h8" />
      <path d="M9 2v4l-3 4v9a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-9l-3-4V2" />
      <path d="M6.5 14h11" />
    </svg>
  );
}

export function BitumenIcon({ size = 28, stroke = 'var(--brand-accent)' }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={stroke} strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3s5.5 6 5.5 10A5.5 5.5 0 0 1 6.5 13C6.5 9 12 3 12 3Z" />
    </svg>
  );
}

export function WaterproofIcon({ size = 28, stroke = 'var(--brand-accent)' }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={stroke} strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3l7 2.6v5.4c0 4.4-3 6.9-7 8.4-4-1.5-7-4-7-8.4V5.6z" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  );
}

export function PoolIcon({ size = 28, stroke = 'var(--brand-accent)' }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={stroke} strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 8c2-1.5 4-1.5 6 0s4 1.5 6 0 4-1.5 6 0" />
      <path d="M3 13c2-1.5 4-1.5 6 0s4 1.5 6 0 4-1.5 6 0" />
      <path d="M3 18c2-1.5 4-1.5 6 0s4 1.5 6 0 4-1.5 6 0" />
    </svg>
  );
}

export function MailIcon({ size = 26, stroke = '#0A0A0A' }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={stroke} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  );
}

export function PhoneIcon({ size = 26, stroke = '#0A0A0A' }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={stroke} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L16 13l5 2v3a1 1 0 0 1-1 1A16 16 0 0 1 4 5a1 1 0 0 1 1-1Z" />
    </svg>
  );
}

export function WhatsAppIcon({ size = 27, fill = '#0A0A0A' }: { size?: number; fill?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={fill}>
      <path d="M12 2a10 10 0 0 0-8.6 15l-1.3 4.7 4.8-1.3A10 10 0 1 0 12 2Zm5.3 14.1c-.2.6-1.3 1.2-1.8 1.2-.5.1-1 .2-3.3-.7-2.8-1.1-4.5-3.9-4.7-4.1-.1-.2-1.1-1.4-1.1-2.7s.7-1.9.9-2.2c.2-.2.5-.3.6-.3h.5c.2 0 .4 0 .6.5l.8 2c.1.2.1.4 0 .5l-.4.6c-.2.2-.3.4-.1.7.2.3.9 1.4 1.9 2.3 1.3 1.1 2.3 1.5 2.6 1.6.3.1.5.1.6-.1l.7-.9c.2-.2.4-.2.6-.1l1.9.9c.3.2.5.3.5.4.1.2.1.8-.1 1.5Z" />
    </svg>
  );
}

export function PinIcon({ size = 26, stroke = '#0A0A0A' }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={stroke} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 21s-7-6-7-11a7 7 0 0 1 14 0c0 5-7 11-7 11Z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  );
}

export function CloseIcon({ size = 22, stroke = '#fff' }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={stroke} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 6l12 12M18 6 6 18" />
    </svg>
  );
}

export function MenuIcon({ size = 26, stroke = '#fff' }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={stroke} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  );
}

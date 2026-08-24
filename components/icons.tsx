type IconProps = { className?: string };

const base = "1.6";

export function IconNPK({ className }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className}>
      <path
        d="M12 20c0-4.4 3.6-8 8-8h8c4.4 0 8 3.6 8 8v14a2 2 0 0 1-2 2H14a2 2 0 0 1-2-2V20Z"
        stroke="currentColor"
        strokeWidth={base}
        strokeLinejoin="round"
      />
      <path d="M17 12c0-2.2 1.8-4 4-4h6c2.2 0 4 1.8 4 4" stroke="currentColor" strokeWidth={base} />
      <path d="M18 26h12M18 31h12" stroke="currentColor" strokeWidth={base} strokeLinecap="round" />
    </svg>
  );
}

export function IconOrganic({ className }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className}>
      <path
        d="M14 20c-2 1.5-3 4-3 7 0 5.5 4.5 9.5 10 9.5v-4.5"
        stroke="currentColor"
        strokeWidth={base}
        strokeLinecap="round"
      />
      <ellipse cx="24" cy="19" rx="11" ry="9" stroke="currentColor" strokeWidth={base} />
      <path d="M13 19c2-4 6-7 11-7s9 3 11 7" stroke="currentColor" strokeWidth={base} strokeLinecap="round" />
      <path d="M15 36h18" stroke="currentColor" strokeWidth={base} strokeLinecap="round" />
    </svg>
  );
}

export function IconLiquid({ className }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className}>
      <rect x="17" y="16" width="14" height="22" rx="3" stroke="currentColor" strokeWidth={base} />
      <path d="M20 16v-4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v4" stroke="currentColor" strokeWidth={base} />
      <path d="M17 25h14" stroke="currentColor" strokeWidth={base} />
      <path d="M21 30c0 1.2 1 1.6 1.5 2.4.5.8.5 1.6-.5 2" stroke="currentColor" strokeWidth={1.3} strokeLinecap="round" />
    </svg>
  );
}

export function IconUrea({ className }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className}>
      <path
        d="M13 18c0-3.3 2.7-6 6-6h10c3.3 0 6 2.7 6 6v15a3 3 0 0 1-3 3H16a3 3 0 0 1-3-3V18Z"
        stroke="currentColor"
        strokeWidth={base}
        strokeLinejoin="round"
      />
      <path d="M17 12c0-2.2 1.8-4 4-4h6c2.2 0 4 1.8 4 4" stroke="currentColor" strokeWidth={base} />
      <circle cx="24" cy="26" r="5" stroke="currentColor" strokeWidth={base} />
      <path d="M24 23.5v5M21.8 26h4.4" stroke="currentColor" strokeWidth={1.3} strokeLinecap="round" />
    </svg>
  );
}

export function IconSprayer({ className }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className}>
      <rect x="14" y="20" width="12" height="16" rx="4" stroke="currentColor" strokeWidth={base} />
      <path d="M20 20v-4" stroke="currentColor" strokeWidth={base} />
      <path d="M16 16h8l3-3" stroke="currentColor" strokeWidth={base} strokeLinecap="round" strokeLinejoin="round" />
      <path d="M27 11h6M31 8l3 3-3 3" stroke="currentColor" strokeWidth={base} strokeLinecap="round" strokeLinejoin="round" />
      <path d="M30 24h6M31 30h5" stroke="currentColor" strokeWidth={1.3} strokeLinecap="round" />
    </svg>
  );
}

export function IconSoil({ className }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className}>
      <path d="M24 28V15" stroke="currentColor" strokeWidth={base} strokeLinecap="round" />
      <path d="M24 18c0-4 3-6 7-6-1 4-3 6-7 6Z" stroke="currentColor" strokeWidth={base} strokeLinejoin="round" />
      <path d="M24 22c0-3.4-2.6-5-6-5 .9 3.4 2.6 5 6 5Z" stroke="currentColor" strokeWidth={base} strokeLinejoin="round" />
      <path d="M11 32c3-2.5 7-4 13-4s10 1.5 13 4" stroke="currentColor" strokeWidth={base} strokeLinecap="round" />
      <path d="M9 36c3.5-2 9-3 15-3s11.5 1 15 3" stroke="currentColor" strokeWidth={base} strokeLinecap="round" />
    </svg>
  );
}

export function IconQuality({ className }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className}>
      <path
        d="M24 8c0 6-4.5 9-10 9 .5 8.5 4.5 16 10 19 5.5-3 9.5-10.5 10-19-5.5 0-10-3-10-9Z"
        stroke="currentColor"
        strokeWidth={base}
        strokeLinejoin="round"
      />
      <path d="M19.5 24l3 3 6-6.5" stroke="currentColor" strokeWidth={base} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function IconDelivery({ className }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className}>
      <rect x="7" y="17" width="20" height="14" rx="2" stroke="currentColor" strokeWidth={base} />
      <path d="M27 22h7l5 5v4h-12v-9Z" stroke="currentColor" strokeWidth={base} strokeLinejoin="round" />
      <circle cx="16" cy="34" r="3" stroke="currentColor" strokeWidth={base} />
      <circle cx="34" cy="34" r="3" stroke="currentColor" strokeWidth={base} />
    </svg>
  );
}

export function IconSecure({ className }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className}>
      <path
        d="M24 6l14 5v10c0 9-6 15.5-14 19-8-3.5-14-10-14-19V11l14-5Z"
        stroke="currentColor"
        strokeWidth={base}
        strokeLinejoin="round"
      />
      <path d="M18.5 24l3.8 3.8 7.2-8" stroke="currentColor" strokeWidth={base} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function IconSupport({ className }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className}>
      <path d="M10 26v-3a14 14 0 0 1 28 0v3" stroke="currentColor" strokeWidth={base} strokeLinecap="round" />
      <rect x="7" y="25" width="7" height="10" rx="2.5" stroke="currentColor" strokeWidth={base} />
      <rect x="34" y="25" width="7" height="10" rx="2.5" stroke="currentColor" strokeWidth={base} />
      <path d="M38 35v1a6 6 0 0 1-6 6h-4" stroke="currentColor" strokeWidth={base} strokeLinecap="round" />
    </svg>
  );
}

export const categoryIcons = {
  npk: IconNPK,
  organic: IconOrganic,
  liquid: IconLiquid,
  urea: IconUrea,
  sprayer: IconSprayer,
  soil: IconSoil,
} as const;

export const featureIcons = {
  quality: IconQuality,
  delivery: IconDelivery,
  secure: IconSecure,
  support: IconSupport,
} as const;

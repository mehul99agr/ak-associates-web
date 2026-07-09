import type { CSSProperties } from 'react'

type IconProps = { name: string; size?: number; style?: CSSProperties }

// Thin-line icon set (24x24). Inherits currentColor; set color on a wrapping element.
const paths: Record<string, React.ReactNode> = {
  building: (
    <>
      <path d="M3 21h18" />
      <path d="M5 21V5a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v16" />
      <path d="M19 21V11a2 2 0 0 0-2-2h-2" />
      <path d="M9 7h2M9 11h2M9 15h2" />
    </>
  ),
  document: (
    <>
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <path d="M14 2v6h6" />
      <path d="M8 13h8M8 17h8M8 9h2" />
    </>
  ),
  globe: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18" />
      <path d="M12 3a14 14 0 0 1 0 18 14 14 0 0 1 0-18z" />
    </>
  ),
  chart: (
    <>
      <path d="M3 3v18h18" />
      <path d="M7 14l3-3 3 3 5-6" />
    </>
  ),
  shield: (
    <>
      <path d="M12 2l8 3v6c0 5-3.5 8.5-8 11-4.5-2.5-8-6-8-11V5z" />
      <path d="M9 12l2 2 4-4" />
    </>
  ),
  analytics: (
    <>
      <path d="M3 3v18h18" />
      <rect x="7" y="11" width="3" height="6" />
      <rect x="12" y="7" width="3" height="10" />
      <rect x="17" y="13" width="3" height="4" />
    </>
  ),
  scale: (
    <>
      <path d="M12 3v18" />
      <path d="M5 21h14" />
      <path d="M5 7l-3 6h6z" />
      <path d="M19 7l-3 6h6z" />
      <path d="M5 7h14" />
      <path d="M12 3a2 2 0 0 0-2 2h4a2 2 0 0 0-2-2z" />
    </>
  ),
  scroll: (
    <>
      <path d="M6 3h11a2 2 0 0 1 2 2v13a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V6" />
      <path d="M4 6a2 2 0 0 1 2-2" />
      <path d="M9 8h7M9 12h7M9 16h4" />
    </>
  ),
  rocket: (
    <>
      <path d="M5 15c-1.5 1.5-2 5-2 5s3.5-.5 5-2" />
      <path d="M14 4c3 0 6 3 6 6 0 4-4 8-9 11l-3-3C11 13 10 7 14 4z" />
      <circle cx="14.5" cy="9.5" r="1.5" />
    </>
  ),
  rupee: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M9 8h6M9 11h6M9 8c3 0 4 1 4 3s-2 3-4 3l4 4" />
    </>
  ),
  sprout: (
    <>
      <path d="M12 21v-8" />
      <path d="M12 13C12 9 9 7 4 7c0 4 3 6 8 6z" />
      <path d="M12 13c0-3 2-5 6-5 0 3-2 5-6 5z" />
    </>
  ),
  check: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M8 12l3 3 5-6" />
    </>
  ),
  users: (
    <>
      <circle cx="9" cy="8" r="3" />
      <path d="M3 20c0-3 2.5-5 6-5s6 2 6 5" />
      <circle cx="17" cy="8.5" r="2.5" />
      <path d="M15.5 20c0-2.5 1-4.5 3.5-5" />
    </>
  ),
  phone: (
    <>
      <path d="M6.6 10.8c1.4 2.8 3.8 5.2 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C11.4 21 3 12.6 3 2.9c0-.6.4-1 1-1h3.4c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1z" />
    </>
  ),
  award: (
    <>
      <circle cx="12" cy="8" r="5" />
      <path d="M9 12.5L7 21l5-3 5 3-2-8.5" />
    </>
  ),
  zap: (
    <>
      <path d="M13 2 4 14h6l-1 8 9-12h-6l1-8z" />
    </>
  ),
  briefcase: (
    <>
      <rect x="3" y="7" width="18" height="13" rx="2" />
      <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
      <path d="M3 12h18" />
    </>
  ),
  lock: (
    <>
      <rect x="4" y="11" width="16" height="10" rx="2" />
      <path d="M8 11V7a4 4 0 0 1 8 0v4" />
    </>
  ),
  handshake: (
    <>
      <path d="M2 13l4.5-4.5L11 12l2-2 4.5 4.5-3 3-1.5-1.5L9.5 19 6 15.5 4.5 17 2 13z" />
    </>
  ),
  landmark: (
    <>
      <path d="M3 21h18" />
      <path d="M4 21V10M8 21V10M12 21V10M16 21V10M20 21V10" />
      <path d="M2 10l10-6 10 6" />
    </>
  ),
  refresh: (
    <>
      <path d="M21 12a9 9 0 1 1-3-6.7" />
      <path d="M21 3v6h-6" />
    </>
  ),
  search: (
    <>
      <circle cx="11" cy="11" r="7" />
      <path d="M21 21l-4.3-4.3" />
    </>
  ),
  flag: (
    <>
      <path d="M5 3v18" />
      <path d="M5 4h11l-2 4 2 4H5" />
    </>
  ),
  package: (
    <>
      <path d="M21 8l-9-5-9 5 9 5 9-5z" />
      <path d="M3 8v9l9 5 9-5V8" />
      <path d="M12 13v9" />
    </>
  ),
  mapPin: (
    <>
      <path d="M12 21s7-7.5 7-12a7 7 0 1 0-14 0c0 4.5 7 12 7 12z" />
      <circle cx="12" cy="9" r="2.5" />
    </>
  ),
  calendar: (
    <>
      <rect x="3" y="5" width="18" height="16" rx="2" />
      <path d="M16 3v4M8 3v4M3 10h18" />
    </>
  ),
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3 6l9 7 9-7" />
    </>
  ),
}

export default function Icon({ name, size = 40, style }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      style={style}
    >
      {paths[name] ?? paths.document}
    </svg>
  )
}

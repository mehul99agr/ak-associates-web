'use client'
import { AnchorHTMLAttributes, MouseEventHandler, ReactNode } from 'react'

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void
  }
}

type TrackedLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode
  method: 'call' | 'whatsapp' | 'email' | 'booking'
  location: string
}

export default function TrackedLink({ children, method, location, onClick, ...rest }: TrackedLinkProps) {
  const handleClick: MouseEventHandler<HTMLAnchorElement> = (e) => {
    window.gtag?.('event', 'contact_click', { method, location })
    onClick?.(e)
  }
  return (
    <a onClick={handleClick} {...rest}>
      {children}
    </a>
  )
}

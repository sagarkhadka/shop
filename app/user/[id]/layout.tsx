import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'User Account Setting',
  description: `Nepal's best top rated online shopping platform`
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return <>{children}</>
}

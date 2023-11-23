import '@/styles/globals.css'

import { Noto_Sans } from 'next/font/google'
import type { Metadata } from 'next'

import { cn } from '@/lib/utils'

const NotoSans = Noto_Sans({ subsets: ['latin'], weight: ['300', '400', '500', '600', '700', '800'] })

export const metadata: Metadata = {
  title: 'Juliana Barbosa de França Amaral',
  description: 'Advogada - Curriculo',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body className={cn(NotoSans.className)}>{children}</body>
    </html>
  )
}

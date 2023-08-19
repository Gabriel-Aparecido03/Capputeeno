"use client"

import StyledComponentsRegistry from '@/lib/registry'
import type { Metadata } from 'next'
import { Inter, Saira } from 'next/font/google'

import { GlobalStyle } from '@/styles/global'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from '@/styles/theme/default'
import { Header } from '@/components/Header'
import { CartContextProvider } from '@/context/cartContext'
import { FilterContextProvider } from '@/context/filterContext'

const saira = Saira({ 
  subsets: ['latin'],
  weight : ['300','400','500','600'],
  variable : '--font-body'
})

export const metadata: Metadata = {
  title: 'Capputeeno',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <StyledComponentsRegistry>
        <ThemeProvider theme={defaultTheme}>
          <CartContextProvider>
            <FilterContextProvider>
              <body className={saira.className}>
                <Header />
                {children}
              </body>
            </FilterContextProvider>
          </CartContextProvider>
        </ThemeProvider>
        <GlobalStyle/>
      </StyledComponentsRegistry>
    </html>
  )
}

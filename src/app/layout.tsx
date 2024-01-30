import type { Metadata } from 'next'
import { Public_Sans } from 'next/font/google'
import '@/styles/global.css'

const fontFamily = Public_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Portofolio App',
}

interface TProps {
  children : React.ReactNode;
}

const RootLayout =(props:TProps)=> {
  const {children} = props
  return (
    <html lang="en">
      <body className={fontFamily.className}>
        <main className='container-page'>
          {children}
        </main>
      </body>
    </html>
  )
}

export default RootLayout

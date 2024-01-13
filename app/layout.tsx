import './globals.css'
import { Inter } from 'next/font/google'
// import { Provider } from '@/components'
// import NextTopLoader from 'nextjs-toploader';

const inter = Inter({ subsets: ['latin'] })

export const metadeta={
  title:'Expense Tracker',
  description:'Track your expenses efficiently'
}

export default function RootLayout({children}:{children:React.ReactNode}) {
  return (
    <html lang="en">
      <body 
      className={`${inter.className} text-white bg-blue-600`} 
      // id='gradient'
      >
        {/* <Provider> */}
        {/* <NextTopLoader /> */}
          {children}
        {/* </Provider> */}
      </body>
    </html>
  )
}

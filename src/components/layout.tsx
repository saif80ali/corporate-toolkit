import { ReactNode } from 'react';
import Head from 'next/head';
import Navbar from './SideNavBar';
import Footer from './footer';
import Header from './header';
import { Montserrat } from 'next/font/google'
 
const montserrat = Montserrat({
  weight: '400',
  subsets: ['latin'],
})


export default function Layout({ children, title = "Corporate Toolkit" }: { children: ReactNode; title?: string }) {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <div className={`h-screen flex flex-col ${montserrat.className}`}>
        <Header></Header>
        <div className='flex flex-1'>
          <Navbar />
          <main className='flex-1 p-6'>{children}</main>
        </div>
        <Footer></Footer>
      </div>
    </>
  )
}
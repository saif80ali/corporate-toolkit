import { ReactNode } from 'react';
import Navbar from './SideNavBar';
import Footer from './footer';
import Header from './header';
 

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className='h-dvh flex flex-col'>
      <Header></Header>
      <div className='flex flex-1'>
        <Navbar />
        <main className='flex-1'>{children}</main>
      </div>
      <Footer></Footer>
    </div>
  )
}
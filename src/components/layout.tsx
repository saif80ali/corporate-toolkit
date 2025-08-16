import { ReactNode } from 'react';
import Navbar from './SideNavBar';
 

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className='flex'>
      <Navbar />
      <main className='flex-1 p-6'>{children}</main>
    </div>
  )
}
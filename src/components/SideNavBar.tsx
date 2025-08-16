import {
  Home,
  Calculator,
  Calendar,
  Mail,
  Sparkles,
} from "lucide-react";
import Footer from './footer';
import Link from "next/link";

export default function sidebar() {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="w-64 bg-gray-900 text-white flex flex-col">
        <div className="px-6 py-4 text-2xl font-bold border-b border-gray-700">
          Corporate Toolkit
        </div>

        <nav className="flex-1 px-4 py-6 space-y-2">
          <Link href="/" className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-gray-700 transition"><Home size={20} />
            Home</Link>
          <Link href="/hike-calculator" className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-gray-700 transition"><Calculator size={20} />
            Hike Calculator</Link>
          <Link href="/notice-period-calculator" className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-gray-700 transition"><Calendar size={20} />
            Notice Period Calculator</Link>
          <Link href="/mail-generator" className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-gray-700 transition"><Mail size={20} />
            <span className="relative">Mail Templates<Sparkles className="absolute -top-2 -right-4" size={15} /></span></Link>
        </nav>
        

      <Footer></Footer>
        
      </div>
      
    </div>
  );
}

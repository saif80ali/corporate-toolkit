import {
  Home,
  Calculator,
  Calendar,
  Mail,
  Sparkles,
} from "lucide-react";
import Link from "next/link";

export default function sidebar() {
  return (
    <div className="w-80 text-gray flex flex-col border-r border-gray-950/5 dark:border-white/10">
      <nav className="flex-1 px-4 py-6 space-y-2">
        <Link href="/" className="flex items-center gap-3 px-4 py-2 rounded-lg hover:text-fuchsia-600 transition"><Home size={20} />
          Home</Link>
        <Link href="/hike-calculator" className="flex items-center gap-3 px-4 py-2 rounded-lg hover:text-fuchsia-600 transition"><Calculator size={20} />
          Hike Calculator</Link>
        <Link href="/notice-period-calculator" className="flex items-center gap-3 px-4 py-2 rounded-lg hover:text-fuchsia-600 transition"><Calendar size={20} />
          Notice Period Calculator</Link>
        <Link href="/mail-generator" className="flex items-center gap-3 px-4 py-2 rounded-lg hover:text-fuchsia-600 transition"><Mail size={20} />
          <span className="relative">Mail Templates<Sparkles className="absolute -top-2 -right-4" size={15} /></span></Link>
      </nav>
    </div>

  );
}

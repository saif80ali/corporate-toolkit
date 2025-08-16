import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div className="flex">

      {/* Main Content */}
      <div>
        <h1 className="text-2xl font-semibold">Welcome!</h1>
        <p className="mt-2 text-gray-600">
          Select an option from the sidebar to get started.
        </p>
      </div>
    </div>
    
  );
}

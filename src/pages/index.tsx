import React from "react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="text-slate-800">
      {/* HERO */}
      <section className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <div className="lg:col-span-6">
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight leading-tight text-indigo-700">Make HR & finance simple — in one toolkit.</h2>
          <p className="mt-4 text-lg text-slate-600">Calculate notice periods, estimate salary hikes and generate professional emails with AI — all in one elegant dashboard designed for speed and accuracy.</p>

          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#features" className="inline-flex items-center gap-2 rounded-full border border-indigo-200 px-4 py-2 text-sm font-medium hover:bg-indigo-50 text-indigo-600">Explore features</a>
          </div>
        </div>

        <div className="lg:col-span-6 flex justify-center lg:justify-end">
          <div className="relative w-full max-w-md">
            <Image src="/Hero-image.svg" alt="Hero illustration" width={600} height={420} className="select-none" />
            <div className="absolute -bottom-6 left-6 bg-white/80 backdrop-blur rounded-xl p-3 shadow-lg border border-indigo-100">
              <p className="text-xs text-slate-600">AI-powered email templates • Accurate notice & hike maths</p>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section id="features" className="max-w-7xl mx-auto mt-6">
        <h3 className="text-2xl font-semibold text-indigo-600">Features</h3>
        <p className="text-slate-600 mt-2">Everything you need to speed up routine HR tasks.</p>

        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <FeatureCard
            title="Notice Period Calculator"
            description="Enter your resignation date and notice days — get your last working day and recommended handover schedule."
            imgSrc="/resignation.svg"
          />

          <FeatureCard
            title="Hike Calculator"
            description="Quickly estimate new CTC, increment %, and monthly take-home after a proposed hike."
            imgSrc="/hike.svg"
          />

          <FeatureCard
            title="AI Mail Generator"
            description="Generate polished resignation, negotiation and onboarding emails. Choose tone and personalize in one click."
            imgSrc="/email.svg"
          />
        </div>
      </section>

      {/* FOOTER / CTA */}
      <footer className="mt-12 border-t border-indigo-100 bg-gradient-to-t from-indigo-50 to-transparent">
        <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <h4 className="text-lg font-semibold text-indigo-700">Ready to simplify HR workflows?</h4>
            <p className="text-slate-600 text-sm">Sign up for early access and get instant templates and calculators.</p>
          </div>
          <div className="flex items-center gap-3 w-full md:w-auto">
            <input placeholder="Your work email" className="flex-1 md:w-72 rounded-lg border px-3 py-2 text-sm" />
            <button className="rounded-lg bg-indigo-600 px-4 py-2 text-white font-medium hover:bg-indigo-600">Notify me</button>
          </div>
        </div>
      </footer>
    </div>
  );
}

type FeatureCardProps = {
  title: string;
  description: string;
  imgSrc: string;
};

function FeatureCard({ title, description, imgSrc }: FeatureCardProps) {
  return (
    <article className="bg-white rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow duration-200 flex flex-col gap-4 border border-indigo-100">
      <div className="relative hidden sm:block w-full h-20">
          <Image src={imgSrc} alt={title} fill className="object-contain" />
        </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div>
            <h5 className="text-lg font-semibold text-indigo-700">{title}</h5>
            <p className="text-sm text-slate-500">{description}</p>
          </div>
        </div>
      </div>

      <div className="mt-2 flex gap-2">
        <a className="text-sm font-medium text-indigo-600 hover:underline">Open</a>
        <a className="text-sm text-slate-500 hover:text-indigo-600">Learn more</a>
      </div>
    </article>
  );
}

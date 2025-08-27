import React from 'react'

export default function header() {
  return (
    <header className="border-b border-gray-950/5 dark:border-white/10 px-4 py-2">
      <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-indigo-600 to-indigo-700 flex items-center justify-center text-white font-bold shadow-lg">
            CT
          </div>
          <div>
            <h1 className="text-lg font-semibold text-indigo-600">Corporate Toolkit</h1>
            <p className="text-sm text-slate-500">Tools for faster workflows</p>
          </div>
        </div>
    </header>
  )
}

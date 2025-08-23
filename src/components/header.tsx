import React from 'react'

export default function header() {
  return (
    <header className="border-b border-gray-950/5 dark:border-white/10">
        <div  aria-label="Global" className="mx-auto flex items-center p-4 lg:px-8">
            <a href="#" className="-m-1.5 p-1.5 mr-2">
                <span className="sr-only">Corporate toolkit</span>
                <img src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600" alt="" className="h-8 w-auto" />
            </a>
            <h2 className="text-2xl/7 font-bold text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">Corporate toolkit</h2>
        </div>
    </header>
  )
}

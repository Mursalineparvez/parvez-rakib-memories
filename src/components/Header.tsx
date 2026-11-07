import React, { useState, useEffect } from 'react';
import { Sun, Moon, Search, Heart, Sparkles, BookOpen, Images, Clock, Users, MessageSquareQuote } from 'lucide-react';
import AmbientPlayer from './AmbientPlayer';

interface HeaderProps {
  onSearchClick: () => void;
}

export default function Header({ onSearchClick }: HeaderProps) {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Sync document dark mode
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-md bg-amber-50/80 dark:bg-slate-950/80 border-b border-amber-200/60 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-8">
        
        {/* Zone 1: Brand Wordmark (Single text element) */}
        <a
          href="#"
          className="serif-font text-lg sm:text-xl font-bold tracking-tight text-amber-950 dark:text-amber-100 hover:text-amber-700 dark:hover:text-amber-300 transition-colors whitespace-nowrap shrink-0 flex items-center gap-2"
        >
          <Heart className="w-5 h-5 text-amber-600 dark:text-amber-400 fill-amber-500/20" />
          <span>পারভেজ ও সাঈদের স্মৃতিকথা</span>
        </a>

        {/* Zone 2: Single-line Navigation Links */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-700 dark:text-slate-300">
          <a
            href="#letter"
            className="hover:text-amber-700 dark:hover:text-amber-400 transition-colors whitespace-nowrap shrink-0 flex items-center gap-1.5"
          >
            <BookOpen className="w-4 h-4 text-amber-600/70" />
            <span>আমাদের চিঠি</span>
          </a>
          <a
            href="#gallery"
            className="hover:text-amber-700 dark:hover:text-amber-400 transition-colors whitespace-nowrap shrink-0 flex items-center gap-1.5"
          >
            <Images className="w-4 h-4 text-amber-600/70" />
            <span>স্মৃতি অ্যালবাম (৮৬টি)</span>
          </a>
          <a
            href="#timeline"
            className="hover:text-amber-700 dark:hover:text-amber-400 transition-colors whitespace-nowrap shrink-0 flex items-center gap-1.5"
          >
            <Clock className="w-4 h-4 text-amber-600/70" />
            <span>৮ বছরের টাইমলাইন</span>
          </a>
          <a
            href="#friends"
            className="hover:text-amber-700 dark:hover:text-amber-400 transition-colors whitespace-nowrap shrink-0 flex items-center gap-1.5"
          >
            <Users className="w-4 h-4 text-amber-600/70" />
            <span>বন্ধুমহল</span>
          </a>
          <a
            href="#advice"
            className="hover:text-amber-700 dark:hover:text-amber-400 transition-colors whitespace-nowrap shrink-0 flex items-center gap-1.5"
          >
            <Sparkles className="w-4 h-4 text-amber-600/70" />
            <span>শেষ নসিহত</span>
          </a>
        </nav>

        {/* Zone 3: Actions & Controls */}
        <div className="flex items-center gap-3 shrink-0">
          {/* Ambient Music Player */}
          <div className="hidden sm:block">
            <AmbientPlayer />
          </div>

          {/* Quick Memory Search Button */}
          <button
            onClick={onSearchClick}
            className="p-2 rounded-full text-slate-600 dark:text-slate-300 hover:bg-amber-100 dark:hover:bg-slate-800 transition-colors focus:outline-none focus:ring-2 focus:ring-amber-500"
            title="স্মৃতি ও ছবি খুঁজুন"
            aria-label="Search memories"
          >
            <Search className="w-4 h-4" />
          </button>

          {/* Theme Toggle */}
          <button
            onClick={() => setIsDark(!isDark)}
            className="p-2 rounded-full text-slate-600 dark:text-slate-300 hover:bg-amber-100 dark:hover:bg-slate-800 transition-colors focus:outline-none focus:ring-2 focus:ring-amber-500"
            title={isDark ? 'লাইট মোড' : 'ডার্ক মোড'}
            aria-label="Toggle dark mode"
          >
            {isDark ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-amber-700" />}
          </button>

          {/* CTA Button */}
          <a
            href="#letter"
            className="hidden lg:inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-amber-700 hover:bg-amber-800 dark:bg-amber-600 dark:hover:bg-amber-500 rounded-lg shadow-sm transition-all whitespace-nowrap shrink-0"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>খোলা চিঠি পড়ুন</span>
          </a>
        </div>
      </div>
    </header>
  );
}

import React, { useState, useEffect } from 'react';
import { BookOpen, Images, Heart, MapPin, Calendar, ArrowRight, Play, Pause, ChevronLeft, ChevronRight, Sparkles, ShieldCheck } from 'lucide-react';
import { MEMORY_ALBUMS, MemoryAlbum } from '../data/memoriesData';

interface HeroProps {
  onReadLetter: () => void;
  onExploreGallery: () => void;
  onSelectAlbum?: (album: MemoryAlbum, photoIndex?: number) => void;
}

// Select 6 top high-impact featured albums with actual photos from the dataset
const HERO_FEATURED_ALBUMS = MEMORY_ALBUMS.filter(a => a.photos && a.photos.length > 0).slice(0, 10);

export default function Hero({ onReadLetter, onExploreGallery, onSelectAlbum }: HeroProps) {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-play slideshow every 4 seconds
  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setActiveSlideIndex((prev) => (prev + 1) % HERO_FEATURED_ALBUMS.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const currentAlbum = HERO_FEATURED_ALBUMS[activeSlideIndex] || MEMORY_ALBUMS[0];
  const currentPhoto = currentAlbum.photos[0];

  const handleNext = () => {
    setActiveSlideIndex((prev) => (prev + 1) % HERO_FEATURED_ALBUMS.length);
  };

  const handlePrev = () => {
    setActiveSlideIndex((prev) => (prev - 1 + HERO_FEATURED_ALBUMS.length) % HERO_FEATURED_ALBUMS.length);
  };

  return (
    <section className="relative overflow-hidden py-10 sm:py-16 lg:py-20 paper-bg border-b border-amber-200/60 dark:border-slate-800">
      {/* Glow Backdrops */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-amber-400/15 dark:bg-amber-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-10 right-10 w-72 h-72 bg-rose-400/10 dark:bg-rose-900/10 rounded-full blur-2xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Split Hero Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Storytelling & Action CTAs */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            {/* Kicker Metadata */}
            <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-amber-900 dark:text-amber-300 mb-4 tracking-wide bg-amber-100/80 dark:bg-amber-950/60 px-3.5 py-1.5 rounded-full border border-amber-300/60 dark:border-amber-800/60 w-fit shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />
              <span>২০১৭ – ২০২৬</span>
              <span aria-hidden="true">·</span>
              <span>৮ বছরের প্রকৃত ভ্রাতৃত্ব</span>
              <span aria-hidden="true">·</span>
              <span>৮৬টি আসল গ্যালারি</span>
            </div>

            {/* Main Headline */}
            <h1 className="serif-font text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-slate-100 leading-[1.2] text-wrap">
              যেখানে দূরত্ব বাড়ে, সেখানে দোয়ার বন্ধন আরও শক্ত হয়
            </h1>

            {/* Subtitle */}
            <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
              সাঈদ (রাকিব)-এর প্রবাসে পাড়ি জমানোর প্রাক্কালে পারভেজের হৃদয় নিংড়ানো চিঠি, ৮ বছরের সহস্রাধিক রিয়েল গোগল ড্রাইভ ছবি, বান্দরবান-কক্সবাজারের সফর কাহিনী ও অকৃত্রিম স্মৃতিকথা।
            </p>

            {/* Emotional Quote Callout */}
            <div className="mt-6 p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-amber-50 to-orange-50 dark:from-slate-900 dark:to-amber-950/40 border border-amber-200/90 dark:border-slate-800 shadow-sm relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-3 opacity-10 text-amber-800 dark:text-amber-300 font-serif text-6xl select-none">
                “
              </div>
              <p className="serif-font italic text-slate-800 dark:text-amber-100 text-sm sm:text-base leading-relaxed relative z-10">
                “ভৌগোলিক দূরত্ব তৈরি হবে, প্রতিদিন দেখা হবে না। কিন্তু দূরত্ব কখনো আমাদের সম্পর্কের গভীরতা কমাতে পারবে না, ইন শা আল্লাহ। পৃথিবীর যেখানেই থাকো না কেন, তোমার জন্য বাংলাদেশে একজন পারভেজ সব সময় অপেক্ষায় থাকবে।”
              </p>
              <div className="mt-3 text-xs font-bold text-amber-900 dark:text-amber-400 flex items-center justify-between relative z-10 pt-2 border-t border-amber-200/50 dark:border-slate-800">
                <span className="flex items-center gap-1.5">
                  <Heart className="w-3.5 h-3.5 text-rose-600 dark:text-rose-400 fill-rose-600 dark:fill-rose-400" />
                  — পারভেজ (সাঈদের উদ্দেশ্যে খোলা চিঠি)
                </span>
                <span className="font-mono text-amber-700 dark:text-amber-500">২০২৬</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <button
                onClick={onReadLetter}
                className="inline-flex items-center gap-2.5 px-6 py-3.5 text-sm font-semibold text-white bg-amber-800 hover:bg-amber-900 dark:bg-amber-600 dark:hover:bg-amber-500 rounded-xl shadow-lg shadow-amber-900/20 hover:shadow-amber-900/30 transition-all group cursor-pointer"
              >
                <BookOpen className="w-4 h-4" />
                <span>খোলা চিঠিটি পড়ুন</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={onExploreGallery}
                className="inline-flex items-center gap-2.5 px-6 py-3.5 text-sm font-semibold text-slate-800 dark:text-slate-200 bg-white dark:bg-slate-900 hover:bg-amber-50 dark:hover:bg-slate-800 border border-amber-300/80 dark:border-slate-700 rounded-xl shadow-xs transition-all cursor-pointer"
              >
                <Images className="w-4 h-4 text-amber-700 dark:text-amber-400" />
                <span>৮৬টি আসল ছবি দেখুন</span>
              </button>
            </div>
          </div>

          {/* Right Column: Dynamic Interactive Photo Polaroid Showcase */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            
            {/* Polaroid Frame Card */}
            <div className="relative bg-white dark:bg-slate-900 p-3 sm:p-4 rounded-2xl border border-amber-200 dark:border-slate-800 shadow-2xl hover:shadow-amber-500/10 transition-all duration-500 group">
              
              {/* Image Box */}
              <div 
                className="relative aspect-4/3 rounded-xl overflow-hidden bg-slate-900 cursor-pointer"
                onClick={() => onSelectAlbum && onSelectAlbum(currentAlbum, 0)}
              >
                <img
                  key={currentPhoto?.driveId}
                  src={currentPhoto?.thumbnailUrl}
                  alt={currentAlbum.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 animate-fadeIn"
                />

                {/* Dark Scrim overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/25 to-transparent" />

                {/* Top Badge Overlay */}
                <div className="absolute top-3 left-3 right-3 flex items-center justify-between text-xs text-white">
                  <span className="bg-slate-950/70 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/20 font-semibold flex items-center gap-1.5">
                    <Sparkles className="w-3 h-3 text-amber-400" />
                    আসল গ্যালারি ফটো #{activeSlideIndex + 1}
                  </span>
                  <span className="bg-amber-800/80 backdrop-blur-md px-2.5 py-1 rounded-full font-mono text-[11px] font-bold">
                    {currentAlbum.year}
                  </span>
                </div>

                {/* Bottom Details Overlay */}
                <div className="absolute bottom-0 inset-x-0 p-4 text-white">
                  <div className="flex items-center gap-2 text-xs text-amber-300 font-medium mb-1">
                    {currentAlbum.location && (
                      <>
                        <MapPin className="w-3.5 h-3.5 text-amber-400" />
                        <span>{currentAlbum.location}</span>
                        <span>·</span>
                      </>
                    )}
                    <Calendar className="w-3.5 h-3.5 text-amber-400" />
                    <span>{currentAlbum.photos.length}টি ছবি</span>
                  </div>
                  <h3 className="serif-font text-lg font-bold text-white line-clamp-1">
                    {currentAlbum.title}
                  </h3>
                  <p className="text-xs text-slate-300 line-clamp-1 mt-0.5">
                    {currentAlbum.subtitle || currentAlbum.description}
                  </p>
                </div>
              </div>

              {/* Polaroid Footer Controls */}
              <div className="mt-3 pt-2 px-1 flex items-center justify-between text-xs text-slate-600 dark:text-slate-400">
                
                {/* Auto-play & Nav Buttons */}
                <div className="flex items-center gap-2">
                  <button
                    onClick={handlePrev}
                    className="p-1.5 rounded-lg bg-amber-100/70 dark:bg-slate-800 hover:bg-amber-200 dark:hover:bg-slate-700 transition-colors text-slate-700 dark:text-slate-200"
                    title="পূর্ববর্তী ছবি"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                    className="p-1.5 rounded-lg bg-amber-100/70 dark:bg-slate-800 hover:bg-amber-200 dark:hover:bg-slate-700 transition-colors text-slate-700 dark:text-slate-200 flex items-center gap-1 font-medium text-[11px]"
                  >
                    {isAutoPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
                    <span>{isAutoPlaying ? 'পজ' : 'প্লে'}</span>
                  </button>
                  <button
                    onClick={handleNext}
                    className="p-1.5 rounded-lg bg-amber-100/70 dark:bg-slate-800 hover:bg-amber-200 dark:hover:bg-slate-700 transition-colors text-slate-700 dark:text-slate-200"
                    title="পরবর্তী ছবি"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>

                {/* Direct Album Trigger */}
                <button
                  onClick={() => onSelectAlbum && onSelectAlbum(currentAlbum, 0)}
                  className="font-semibold text-amber-800 dark:text-amber-400 hover:underline flex items-center gap-1"
                >
                  <span>অ্যালবামটি খুলুন</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>

            {/* Thumbnail Strip */}
            <div className="mt-4 flex items-center justify-center gap-2 overflow-x-auto pb-1 max-w-full">
              {HERO_FEATURED_ALBUMS.slice(0, 7).map((album, idx) => (
                <button
                  key={album.id}
                  onClick={() => {
                    setActiveSlideIndex(idx);
                    setIsAutoPlaying(false);
                  }}
                  className={`relative w-12 h-12 rounded-lg overflow-hidden shrink-0 border-2 transition-all ${
                    idx === activeSlideIndex
                      ? 'border-amber-600 dark:border-amber-400 scale-110 shadow-md ring-2 ring-amber-500/30'
                      : 'border-transparent opacity-60 hover:opacity-100'
                  }`}
                >
                  <img
                    src={album.photos[0]?.thumbnailUrl}
                    alt={album.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>

          </div>

        </div>

        {/* Quantitative Metrics Row */}
        <div className="mt-12 pt-8 border-t border-amber-200/60 dark:border-slate-800 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
          <div className="p-4 rounded-2xl bg-white/60 dark:bg-slate-900/60 border border-amber-200/60 dark:border-slate-800 shadow-xs hover:border-amber-300 transition-colors">
            <span className="block text-2xl sm:text-3xl font-bold font-mono tabular-nums text-amber-800 dark:text-amber-400">
              ৮ বছর
            </span>
            <span className="text-xs text-slate-600 dark:text-slate-400 font-medium mt-1 block">
              অকৃত্রিম পথচলা (২০১৭-২০২৬)
            </span>
          </div>

          <div className="p-4 rounded-2xl bg-white/60 dark:bg-slate-900/60 border border-amber-200/60 dark:border-slate-800 shadow-xs hover:border-amber-300 transition-colors">
            <span className="block text-2xl sm:text-3xl font-bold font-mono tabular-nums text-amber-800 dark:text-amber-400">
              ৮৬টি
            </span>
            <span className="text-xs text-slate-600 dark:text-slate-400 font-medium mt-1 block">
              গুগল ড্রাইভ স্মৃতি অ্যালবাম
            </span>
          </div>

          <div className="p-4 rounded-2xl bg-white/60 dark:bg-slate-900/60 border border-amber-200/60 dark:border-slate-800 shadow-xs hover:border-amber-300 transition-colors">
            <span className="block text-2xl sm:text-3xl font-bold font-mono tabular-nums text-amber-800 dark:text-amber-400">
              ১৮০+
            </span>
            <span className="text-xs text-slate-600 dark:text-slate-400 font-medium mt-1 block">
              বাস্তব স্মৃতির আলোকচিত্র
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}

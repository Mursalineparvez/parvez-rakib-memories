import React from 'react';
import { BookOpen, Images, Heart, ShieldCheck, MapPin, Calendar, Compass, ArrowRight } from 'lucide-react';

interface HeroProps {
  onReadLetter: () => void;
  onExploreGallery: () => void;
}

export default function Hero({ onReadLetter, onExploreGallery }: HeroProps) {
  return (
    <section className="relative overflow-hidden py-12 sm:py-16 lg:py-20 paper-bg border-b border-amber-200/50 dark:border-slate-800">
      {/* Background Decorative Lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-amber-400/10 dark:bg-amber-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Split Hero Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          
          {/* Left Column: Typographic Narrative & CTAs */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            {/* Kicker Metadata (Clean, Unboxed Text) */}
            <div className="flex items-center gap-2 text-xs sm:text-sm font-medium text-amber-800 dark:text-amber-300 mb-4 tracking-wide">
              <span>২০১৭ – ২০২৬</span>
              <span aria-hidden="true">·</span>
              <span>৮ বছরের অকৃত্রিম বন্ধন</span>
              <span aria-hidden="true">·</span>
              <span>জয়দেবপুর থেকে ঢাকা ও প্রবাস</span>
            </div>

            {/* Headline */}
            <h1 className="serif-font text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 dark:text-slate-100 leading-tight text-wrap">
              যেখানে দূরত্ব বাড়ে, সেখানে দোয়ার বন্ধন আরও শক্ত হয়
            </h1>

            {/* Subtitle */}
            <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
              সাঈদ (রাকিব)-এর প্রবাসে পাড়ি জমানোর প্রাক্কালে পারভেজের হৃদয় নিংড়ানো চিঠি, ৮ বছরের সহস্রাধিক হাসিকান্নার মুহূর্ত, ভ্রমণকাহিনী ও বন্ধুত্বের চিরস্থায়ী ডিজিটাল স্মৃতিকথা।
            </p>

            {/* Featured Letter Quote Callout */}
            <div className="mt-6 p-4 rounded-xl bg-amber-100/70 dark:bg-slate-900/80 border border-amber-200 dark:border-slate-800 text-slate-800 dark:text-amber-100 relative">
              <p className="serif-font italic text-sm sm:text-base leading-relaxed">
                “ভৌগোলিক দূরত্ব তৈরি হবে, প্রতিদিন দেখা হবে না। কিন্তু দূরত্ব কখনো আমাদের সম্পর্কের গভীরতা কমাতে পারবে না, ইন শা আল্লাহ। পৃথিবীর যেখানেই থাকো না কেন, তোমার জন্য বাংলাদেশে একজন পারভেজ সব সময় অপেক্ষায় থাকবে।”
              </p>
              <div className="mt-2 text-xs font-semibold text-amber-800 dark:text-amber-400 flex items-center justify-between">
                <span>— পারভেজ (সাঈদের উদ্দেশ্যে লেখা খোলা চিঠি)</span>
                <span className="text-amber-700 dark:text-amber-500">২০২৬</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <button
                onClick={onReadLetter}
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-amber-800 hover:bg-amber-900 dark:bg-amber-600 dark:hover:bg-amber-500 rounded-xl shadow-md transition-all group"
              >
                <BookOpen className="w-4 h-4" />
                <span>খোলা চিঠিটি পড়ুন</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={onExploreGallery}
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-slate-800 dark:text-slate-200 bg-amber-100/80 hover:bg-amber-200/80 dark:bg-slate-800 dark:hover:bg-slate-700 border border-amber-300/60 dark:border-slate-700 rounded-xl transition-all"
              >
                <Images className="w-4 h-4 text-amber-700 dark:text-amber-400" />
                <span>স্মৃতি অ্যালবাম দেখুন (৮৬টি)</span>
              </button>
            </div>
          </div>

          {/* Right Column: Hero Memory Visual Container */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-amber-200/80 dark:border-slate-800 group h-full min-h-[320px]">
              <img
                src="/src/assets/images/hero_brotherhood_memory_1793779615814.jpg"
                alt="পারভেজ ও সাঈদের নদীর তীরের স্মৃতিকথা"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              {/* Gradient Scrim for Contrast */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />

              {/* Scrim Overlay Details */}
              <div className="absolute bottom-0 inset-x-0 p-5 text-white">
                <div className="flex items-center gap-2 text-xs text-amber-300 font-medium mb-1">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>জয়দেবপুর, শনির আখড়া ও বান্দরবান</span>
                  <span className="mx-1">·</span>
                  <Calendar className="w-3.5 h-3.5" />
                  <span>২০১৭-২০২৬</span>
                </div>
                <h3 className="serif-font text-lg font-bold text-amber-100">
                  ভ্রাতৃত্বের অটুট বন্ধন ও যৌথ স্মৃতি
                </h3>
                <p className="text-xs text-slate-300 mt-1 line-clamp-2">
                  নিউমার্কেটের প্রথম রাত থেকে শুরু করে বান্দরবানের মেঘ পাহাড়ের সফর ও ২০২৬-এর ঈদ।
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Full-width Quantitative Metrics Row below the split */}
        <div className="mt-12 pt-8 border-t border-amber-200/60 dark:border-slate-800 grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
          <div className="p-4 rounded-xl bg-amber-100/40 dark:bg-slate-900/40 border border-amber-200/40 dark:border-slate-800">
            <span className="block text-2xl sm:text-3xl font-bold font-mono tabular-nums text-amber-800 dark:text-amber-400">
              ৮ বছর
            </span>
            <span className="text-xs text-slate-600 dark:text-slate-400 font-medium mt-1 block">
              যৌথ পথচলা (২০১৭ - ২০২৬)
            </span>
          </div>

          <div className="p-4 rounded-xl bg-amber-100/40 dark:bg-slate-900/40 border border-amber-200/40 dark:border-slate-800">
            <span className="block text-2xl sm:text-3xl font-bold font-mono tabular-nums text-amber-800 dark:text-amber-400">
              ৮৬টি
            </span>
            <span className="text-xs text-slate-600 dark:text-slate-400 font-medium mt-1 block">
              সংরক্ষিত স্মৃতি অ্যালবাম
            </span>
          </div>

          <div className="p-4 rounded-xl bg-amber-100/40 dark:bg-slate-900/40 border border-amber-200/40 dark:border-slate-800">
            <span className="block text-2xl sm:text-3xl font-bold font-mono tabular-nums text-amber-800 dark:text-amber-400">
              ১৮০+
            </span>
            <span className="text-xs text-slate-600 dark:text-slate-400 font-medium mt-1 block">
              গুগল ড্রাইভ আলোকচিত্র
            </span>
          </div>

          <div className="p-4 rounded-xl bg-amber-100/40 dark:bg-slate-900/40 border border-amber-200/40 dark:border-slate-800">
            <span className="block text-2xl sm:text-3xl font-bold font-mono tabular-nums text-amber-800 dark:text-amber-400">
              ১১ জন
            </span>
            <span className="text-xs text-slate-600 dark:text-slate-400 font-medium mt-1 block">
              বন্ধুমহল ও নিকটতম সহযাত্রী
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}

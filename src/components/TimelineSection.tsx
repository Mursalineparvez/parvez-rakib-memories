import React from 'react';
import { TIMELINE_MILESTONES } from '../data/memoriesData';
import { Clock, MapPin, Sparkles, ArrowRight } from 'lucide-react';

interface TimelineSectionProps {
  onYearSelect: (year: number) => void;
}

export default function TimelineSection({ onYearSelect }: TimelineSectionProps) {
  return (
    <section id="timeline" className="py-16 sm:py-24 bg-amber-50/70 dark:bg-slate-950/80 border-b border-amber-200/50 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 dark:bg-amber-900/40 text-amber-800 dark:text-amber-300 text-xs font-semibold mb-3">
            <Clock className="w-3.5 h-3.5" />
            <span>৮ বছরের যৌথ পথচলা</span>
          </div>
          <h2 className="serif-font text-3xl sm:text-4xl font-bold text-slate-900 dark:text-slate-100 tracking-tight">
            ২০১৭ থেকে ২০২৬—ইতিহাসের মাইফলকসমূহ
          </h2>
          <p className="mt-3 text-base text-slate-600 dark:text-slate-400">
            নিউমার্কেটের প্রথম রাত থেকে শুরু করে বান্দরবানের পাহাড় আর ২০২৬-এর ঈদ পর্যন্ত বছরের পর বছর গড়ে ওঠা আমাদের সোনালী স্মৃতিসমূহ।
          </p>
        </div>

        {/* Feature Visual Banner */}
        <div className="relative rounded-3xl overflow-hidden mb-16 border border-amber-200 dark:border-slate-800 shadow-xl h-64 sm:h-80 group">
          <img
            src="/src/assets/images/friendship_travel_journey_1793779614708.jpg"
            alt="বান্দরবানের পাহাড়ের চূড়ায় বন্ধুত্বের মুহূর্ত"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent p-6 sm:p-10 flex flex-col justify-end text-white">
            <div className="flex items-center gap-2 text-xs font-semibold text-amber-300 mb-2">
              <Sparkles className="w-4 h-4" />
              <span>জীবনের সেরা মুহূর্তগুলোর মেলবন্ধন</span>
            </div>
            <h3 className="serif-font text-xl sm:text-2xl font-bold text-amber-100">
              "স্মৃতিগুলো বলতে শুরু করলে হয়তো লেখা শেষ হবে, কিন্তু স্মৃতির শেষ হবে না।"
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 mt-2 max-w-2xl">
              বান্দরবান, কক্সবাজার, পিরোজপুরের পেয়ারা বাগান, সিলেট, মেঘনা নদী ও ডেমরার অলিগলি—প্রতিটি ধূলিকণায় জমে থাকা বন্ধুত্বের পদচিহ্ন।
            </p>
          </div>
        </div>

        {/* Vertical Timeline Tree */}
        <div className="relative border-l-2 border-amber-300 dark:border-slate-800 ml-4 sm:ml-32 space-y-12">
          {TIMELINE_MILESTONES.map((item, idx) => (
            <div key={item.year} className="relative pl-6 sm:pl-10 group">
              
              {/* Timeline Year Badge Node */}
              <div className="absolute -left-[17px] top-1 w-8 h-8 rounded-full bg-amber-700 dark:bg-amber-600 text-white font-mono font-bold text-xs flex items-center justify-center shadow-md border-2 border-white dark:border-slate-950 group-hover:scale-110 transition-transform">
                {idx + 1}
              </div>

              {/* Mobile/Desktop Year Display */}
              <div className="sm:absolute sm:-left-32 sm:top-1 text-amber-800 dark:text-amber-400 font-mono font-bold text-lg sm:text-right sm:w-24 mb-1 sm:mb-0">
                {item.year}
              </div>

              {/* Milestone Card */}
              <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-amber-200/80 dark:border-slate-800 shadow-sm hover:shadow-md transition-all">
                <div className="flex items-center justify-between flex-wrap gap-2 mb-2">
                  <div className="flex items-center gap-1.5 text-xs font-medium text-amber-800 dark:text-amber-400">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{item.location}</span>
                  </div>
                  <span className="text-xs text-slate-500 font-mono">
                    {item.tagline}
                  </span>
                </div>

                <h3 className="serif-font text-xl font-bold text-slate-900 dark:text-amber-100">
                  {item.title}
                </h3>

                <p className="mt-2 text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                  {item.description}
                </p>

                {/* Jump to Gallery Action */}
                <div className="mt-4 pt-3 border-t border-amber-100 dark:border-slate-800 flex justify-end">
                  <button
                    onClick={() => {
                      onYearSelect(item.year);
                      const el = document.getElementById('gallery');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-amber-800 dark:text-amber-400 hover:text-amber-900 dark:hover:text-amber-300 transition-colors"
                  >
                    <span>{item.year}-এর অ্যালবাম দেখুন</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

import React from 'react';
import { PARVEZ_ADVICE_POINTS } from '../data/memoriesData';
import { ShieldCheck, DoorOpen, HeartHandshake, Users, Sparkles, Heart } from 'lucide-react';

export default function AdviceCards() {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'ShieldCheck': return <ShieldCheck className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />;
      case 'DoorOpen': return <DoorOpen className="w-6 h-6 text-amber-600 dark:text-amber-400" />;
      case 'HeartHandshake': return <HeartHandshake className="w-6 h-6 text-blue-600 dark:text-blue-400" />;
      case 'Users': return <Users className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />;
      default: return <Sparkles className="w-6 h-6 text-purple-600 dark:text-purple-400" />;
    }
  };

  return (
    <section id="advice" className="py-16 sm:py-24 bg-gradient-to-b from-amber-100/40 via-amber-50/30 to-amber-100/20 dark:from-slate-900/90 dark:via-slate-950 dark:to-slate-900/60 border-b border-amber-200/60 dark:border-slate-800 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-amber-400/10 dark:bg-amber-600/5 rounded-full blur-3xl pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-200/80 dark:bg-amber-900/40 text-amber-900 dark:text-amber-300 text-xs font-semibold mb-3">
            <Heart className="w-3.5 h-3.5 fill-current" />
            <span>দিকনির্দেশনা ও শেষ বার্তা</span>
          </div>
          <h2 className="serif-font text-3xl sm:text-4xl font-bold text-slate-900 dark:text-slate-100 tracking-tight">
            প্রবাসের নতুন অধ্যায়ে পারভেজের ৫টি বিশেষ আবেদন
          </h2>
          <p className="mt-3 text-base text-slate-600 dark:text-slate-400">
            সাঈদের উজ্জ্বল ভবিষ্যতের জন্য পারভেজের অন্তর থেকে উঠে আসা অমূল্য পরামর্শ ও প্রতিশ্রুতি।
          </p>
        </div>

        {/* 5 Advice Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {PARVEZ_ADVICE_POINTS.map((item) => (
            <div
              key={item.number}
              className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-amber-200/80 dark:border-slate-800 shadow-md hover:shadow-xl transition-all relative overflow-hidden flex flex-col justify-between group"
            >
              <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-amber-500/5 dark:bg-amber-400/5 rounded-full blur-xl pointer-events-none" />

              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-2xl bg-amber-50 dark:bg-slate-800 border border-amber-200/60 dark:border-slate-700">
                    {getIcon(item.icon)}
                  </div>
                  <span className="font-mono text-xl font-bold text-amber-800 dark:text-amber-400">
                    {item.number}
                  </span>
                </div>

                <h3 className="serif-font text-xl font-bold text-slate-900 dark:text-amber-100 group-hover:text-amber-700 dark:group-hover:text-amber-400 transition-colors">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                  {item.text}
                </p>
              </div>

              <div className="mt-6 pt-3 border-t border-amber-100 dark:border-slate-800 text-xs font-semibold text-amber-800 dark:text-amber-400 flex items-center gap-1">
                <Sparkles className="w-3.5 h-3.5" />
                <span>পারভেজের অকৃত্রিম নসিহত</span>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

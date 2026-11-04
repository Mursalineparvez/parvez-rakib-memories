import React from 'react';
import { Heart, ArrowUp, Sparkles, BookOpen, Images, Clock, Users } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-amber-950 text-amber-100 dark:bg-slate-950 border-t border-amber-900/60 dark:border-slate-800 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-amber-900/50 dark:border-slate-800 items-start">
          
          {/* Brand & Mission Column */}
          <div className="md:col-span-6 space-y-3">
            <div className="serif-font text-xl font-bold text-amber-200 flex items-center gap-2">
              <Heart className="w-5 h-5 text-amber-400 fill-amber-400/30" />
              <span>Memory of Parvez & Syed (Rakib)</span>
            </div>
            <p className="text-xs sm:text-sm text-amber-200/80 leading-relaxed font-normal max-w-lg">
              ২০১৭ থেকে ২০২৬—আট বছরের প্রতিটি পদে পাশে থাকা দুই ভাই পারভেজ ও সাঈদ (রাকিব)-এর অমলিন স্মৃতিগাথা, অ্যালবাম, চিঠিপত্র ও বন্ধুত্বের চিরস্থায়ী ডিজিটাল স্মৃতিকথা।
            </p>
            <div className="text-xs text-amber-400/90 italic font-serif">
              "পৃথিবীর যেখানেই থাকো না কেন, তোমার জন্য বাংলাদেশে একজন পারভেজ সব সময় অপেক্ষায় থাকবে।"
            </div>
          </div>

          {/* Quick Nav Links */}
          <div className="md:col-span-4 space-y-2">
            <div className="text-xs font-semibold text-amber-400 uppercase tracking-wider mb-2">
              ন্যাভিগেশন
            </div>
            <div className="grid grid-cols-2 gap-2 text-xs font-medium">
              <a href="#letter" className="hover:text-white transition-colors flex items-center gap-1.5">
                <BookOpen className="w-3.5 h-3.5 text-amber-400" />
                <span>খোলা চিঠি</span>
              </a>
              <a href="#gallery" className="hover:text-white transition-colors flex items-center gap-1.5">
                <Images className="w-3.5 h-3.5 text-amber-400" />
                <span>স্মৃতি অ্যালবাম</span>
              </a>
              <a href="#timeline" className="hover:text-white transition-colors flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-amber-400" />
                <span>৮ বছরের টাইমলাইন</span>
              </a>
              <a href="#friends" className="hover:text-white transition-colors flex items-center gap-1.5">
                <Users className="w-3.5 h-3.5 text-amber-400" />
                <span>বন্ধুমহল</span>
              </a>
            </div>
          </div>

          {/* Back to Top */}
          <div className="md:col-span-2 flex justify-start md:justify-end">
            <button
              onClick={scrollToTop}
              className="p-3 rounded-2xl bg-amber-900/60 hover:bg-amber-800 text-amber-200 hover:text-white border border-amber-800 transition-all focus:outline-none flex items-center gap-2 text-xs font-medium"
              title="উপরে যান"
            >
              <ArrowUp className="w-4 h-4" />
              <span>উপরে উঠুন</span>
            </button>
          </div>

        </div>

        {/* Bottom Rights Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-amber-300/70 gap-4">
          <div>
            © ২০১৭ – ২০২৬ পারভেজ ও সাঈদ (রাকিব)। সর্বস্বত্ব সংরক্ষিত।
          </div>
          <div className="flex items-center gap-2">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>আল্লাহ আমাদের ভ্রাতৃত্ব দুনিয়া ও আখিরাত—উভয় জীবনের জন্য কবুল করুন। আমিন।</span>
          </div>
        </div>

      </div>
    </footer>
  );
}

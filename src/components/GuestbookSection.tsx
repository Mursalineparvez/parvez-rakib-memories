import React, { useState, useEffect } from 'react';
import { MessageSquareQuote, Send, Heart, Sparkles, User, Calendar } from 'lucide-react';

interface NoteItem {
  id: string;
  senderName: string;
  relation: string;
  message: string;
  date: string;
  likes: number;
}

const INITIAL_NOTES: NoteItem[] = [
  {
    id: 'n1',
    senderName: 'তরিকুল',
    relation: 'ঘনিষ্ঠ বন্ধু',
    message: 'সাঈদ ভাই, তোমার নতুন যাত্রার জন্য অনেক অনেক শুভকামনা। পারভেজের লেখা চিঠিটা পড়ে চোখের পানি ধরে রাখতে পারিনি। আল্লাহ তোমায় প্রবাসে সুখে-শান্তিতে ও ঈমানের সাথে রাখুন।',
    date: '২০২৬-১১-০৪',
    likes: 12,
  },
  {
    id: 'n2',
    senderName: 'মেহেদি',
    relation: 'প্রবাসের ভাই',
    message: 'কক্সবাজার-বান্দরবান সফরের সেই সুন্দর দিনগুলোর কথা আজ খুব মনে পড়ে। বিদেশে প্রথম প্রথম একা লাগবে, কিন্তু মনে রাখবে পারভেজ আর আমরা সবাই তোমার জন্য বাংলাদেশে হাত তুলে দোয়া করছি।',
    date: '২০২৬-১১-০৩',
    likes: 9,
  },
  {
    id: 'n3',
    senderName: 'সাগর স্যার',
    relation: 'শিক্ষক',
    message: 'শনির আখড়ায় কোচিংয়ের দিনগুলো থেকেই তোমাদের ভ্রাতৃত্ব দেখে আসছি। সাঈদ, প্রবাস জীবনে সফলতা তোমার কদম চুকুক, দ্বীনের পথে অবিচল থেকো। দোয়া রলো।',
    date: '২০২৬-১১-০২',
    likes: 15,
  },
];

export default function GuestbookSection() {
  const [notes, setNotes] = useState<NoteItem[]>(() => {
    const saved = localStorage.getItem('parvez_syed_guestbook');
    return saved ? JSON.parse(saved) : INITIAL_NOTES;
  });

  const [senderName, setSenderName] = useState('');
  const [relation, setRelation] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    localStorage.setItem('parvez_syed_guestbook', JSON.stringify(notes));
  }, [notes]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!senderName.trim() || !message.trim()) return;

    const newNote: NoteItem = {
      id: Date.now().toString(),
      senderName: senderName.trim(),
      relation: relation.trim() || 'শুভাকাঙ্ক্ষী',
      message: message.trim(),
      date: new Date().toISOString().split('T')[0],
      likes: 1,
    };

    setNotes([newNote, ...notes]);
    setSenderName('');
    setRelation('');
    setMessage('');
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  const handleLike = (id: string) => {
    setNotes(
      notes.map((n) => (n.id === id ? { ...n, likes: n.likes + 1 } : n))
    );
  };

  return (
    <section id="guestbook" className="py-16 sm:py-24 paper-bg border-b border-amber-200/50 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 dark:bg-amber-900/40 text-amber-800 dark:text-amber-300 text-xs font-semibold mb-3">
            <MessageSquareQuote className="w-3.5 h-3.5" />
            <span>শুভকামনা ও চিরন্তন দোয়া</span>
          </div>
          <h2 className="serif-font text-3xl sm:text-4xl font-bold text-slate-900 dark:text-slate-100 tracking-tight">
            সাঈদ (রাকিব)-এর প্রবাস যাত্রায় আপনার সুন্দর বার্তা রেখে যান
          </h2>
          <p className="mt-3 text-base text-slate-600 dark:text-slate-400">
            বন্ধুমহল, আত্মীয়স্বজন ও শুভাকাঙ্ক্ষীদের ভালোবাসার বার্তা ও দোয়ার দেওয়াল।
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Write Message Form */}
          <div className="lg:col-span-5 bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-amber-200/80 dark:border-slate-800 shadow-xl">
            <h3 className="serif-font text-xl font-bold text-slate-900 dark:text-amber-100 mb-2 flex items-center gap-2">
              <Heart className="w-5 h-5 text-amber-600 fill-current" />
              <span>শুভকামনা বার্তা লিখুন</span>
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 mb-6">
              সাঈদের নতুন ভবিষ্যতের জন্য আপনার ভালোবাসা ও দোয়ার কথাগুলো এখানে জমা রাখুন।
            </p>

            {submitted && (
              <div className="mb-6 p-4 rounded-2xl bg-emerald-50 dark:bg-emerald-900/40 border border-emerald-200 text-emerald-800 dark:text-emerald-200 text-xs font-semibold flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-emerald-600" />
                <span>আপনার বার্তাটি সফলভাবে যুক্ত হয়েছে! জাজাকাল্লাহু খাইরান।</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  আপনার নাম <span className="text-amber-600">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={senderName}
                  onChange={(e) => setSenderName(e.target.value)}
                  placeholder="যেমন: তরিকুল / বন্ধু"
                  className="w-full px-4 py-2.5 bg-amber-50/50 dark:bg-slate-800 border border-amber-200 dark:border-slate-700 rounded-xl text-sm text-slate-900 dark:text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  সম্পর্ক / পরিচয়
                </label>
                <input
                  type="text"
                  value={relation}
                  onChange={(e) => setRelation(e.target.value)}
                  placeholder="যেমন: শুভাকাঙ্ক্ষী / সহপাঠী"
                  className="w-full px-4 py-2.5 bg-amber-50/50 dark:bg-slate-800 border border-amber-200 dark:border-slate-700 rounded-xl text-sm text-slate-900 dark:text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  আপনার দোয়া বা হৃদয়ের কথা <span className="text-amber-600">*</span>
                </label>
                <textarea
                  required
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="সাঈদ (রাকিব) ও পারভেজের বন্ধন এবং নতুন যাত্রার জন্য লিখুন..."
                  className="w-full px-4 py-2.5 bg-amber-50/50 dark:bg-slate-800 border border-amber-200 dark:border-slate-700 rounded-xl text-sm text-slate-900 dark:text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-500 resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white bg-amber-800 hover:bg-amber-900 dark:bg-amber-600 dark:hover:bg-amber-500 shadow-md transition-all"
              >
                <Send className="w-4 h-4" />
                <span>বার্তা পাঠান</span>
              </button>
            </form>
          </div>

          {/* Messages Display List */}
          <div className="lg:col-span-7 space-y-4">
            <div className="text-xs font-semibold text-slate-500 dark:text-slate-400 px-1 uppercase tracking-wider flex items-center justify-between">
              <span>দেওয়ালে জমা বার্তা ({notes.length}টি)</span>
              <span className="font-mono text-amber-700 dark:text-amber-400">সর্বশেষ বার্তাগুলি</span>
            </div>

            {notes.map((item) => (
              <div
                key={item.id}
                className="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-amber-200/80 dark:border-slate-800 shadow-sm hover:shadow-md transition-all"
              >
                <div className="flex items-center justify-between gap-4 mb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-amber-100 dark:bg-amber-900/60 text-amber-800 dark:text-amber-300 font-bold text-sm flex items-center justify-center">
                      <User className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="serif-font text-base font-bold text-slate-900 dark:text-amber-100">
                        {item.senderName}
                      </h4>
                      <div className="text-xs text-amber-700 dark:text-amber-400 font-medium">
                        {item.relation}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-1 text-xs text-slate-400 font-mono">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{item.date}</span>
                  </div>
                </div>

                <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-normal">
                  {item.message}
                </p>

                <div className="mt-4 pt-3 border-t border-amber-100 dark:border-slate-800 flex items-center justify-between">
                  <span className="text-xs text-slate-400 italic">
                    সাঈদ ও পারভেজের চিরন্তন বন্ধন
                  </span>

                  <button
                    onClick={() => handleLike(item.id)}
                    className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 dark:bg-slate-800 hover:bg-amber-100 text-amber-800 dark:text-amber-300 text-xs font-medium transition-colors"
                  >
                    <Heart className="w-3.5 h-3.5 fill-current text-rose-500" />
                    <span className="font-mono tabular-nums">{item.likes}</span>
                  </button>
                </div>

              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}

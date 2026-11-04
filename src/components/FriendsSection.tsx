import React from 'react';
import { FRIENDS_LIST } from '../data/memoriesData';
import { Users, Heart, Sparkles } from 'lucide-react';

interface FriendsSectionProps {
  onFriendSelect: (friendName: string) => void;
}

export default function FriendsSection({ onFriendSelect }: FriendsSectionProps) {
  return (
    <section id="friends" className="py-16 sm:py-24 paper-bg border-b border-amber-200/50 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 dark:bg-amber-900/40 text-amber-800 dark:text-amber-300 text-xs font-semibold mb-3">
            <Users className="w-3.5 h-3.5" />
            <span>বন্ধুমহল ও সহযাত্রী</span>
          </div>
          <h2 className="serif-font text-3xl sm:text-4xl font-bold text-slate-900 dark:text-slate-100 tracking-tight">
            যাদের সান্নিধ্যে রঙিন হয়েছিল প্রতিটি দিন
          </h2>
          <p className="mt-3 text-base text-slate-600 dark:text-slate-400">
            সাঈদ ও পারভেজের ৮ বছরের যাত্রায় পাশে থাকা অকৃত্রিম সুহৃদ ও পরম সহযাত্রীগণ।
          </p>
        </div>

        {/* 3-in-a-row Desktop Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {FRIENDS_LIST.map((friend) => (
            <div
              key={friend.id}
              className="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-amber-200/80 dark:border-slate-800 shadow-sm hover:shadow-lg transition-all group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-4 mb-4">
                  {/* Avatar Circle with Initials */}
                  <div className={`w-14 h-14 rounded-2xl ${friend.color} font-bold text-lg flex items-center justify-center shadow-md shrink-0 group-hover:scale-105 transition-transform`}>
                    {friend.initials}
                  </div>

                  <div>
                    <h3 className="serif-font text-lg font-bold text-slate-900 dark:text-amber-100 group-hover:text-amber-700 dark:group-hover:text-amber-400 transition-colors">
                      {friend.name}
                    </h3>
                    <div className="text-xs font-medium text-amber-800 dark:text-amber-400 mt-0.5">
                      {friend.role}
                    </div>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                  {friend.bio}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-amber-100 dark:border-slate-800 flex items-center justify-between text-xs">
                <span className="text-slate-500 font-mono">
                  {friend.memoriesCount}+ যৌথ স্মৃতি
                </span>

                <button
                  onClick={() => {
                    onFriendSelect(friend.name);
                    const el = document.getElementById('gallery');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="font-semibold text-amber-800 dark:text-amber-400 hover:underline"
                >
                  ছবি খুঁজুন
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

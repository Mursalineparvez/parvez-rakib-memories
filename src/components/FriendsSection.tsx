import React from 'react';
import { FRIENDS_LIST, MEMORY_ALBUMS, MemoryAlbum } from '../data/memoriesData';
import { Users, Heart, Camera, ArrowRight } from 'lucide-react';

interface FriendsSectionProps {
  onFriendSelect: (friendName: string) => void;
  onSelectAlbum?: (album: MemoryAlbum, photoIndex?: number) => void;
}

export default function FriendsSection({ onFriendSelect, onSelectAlbum }: FriendsSectionProps) {
  
  // Helper to find matching memory albums for each friend
  const getFriendAlbums = (friendName: string): MemoryAlbum[] => {
    const clean = friendName.toLowerCase();
    const query = clean.includes('সাঈদ') ? 'সাঈদ' :
                  clean.includes('পারভেজ') ? 'পারভেজ' :
                  clean.includes('তরিকুল') ? 'তরিকুল' :
                  clean.includes('মেহেদি') ? 'মেহেদি' :
                  clean.includes('টিপু') ? 'টিপু' :
                  clean.includes('ইমরান') ? 'ইমরান' :
                  clean.includes('ফাইজার') ? 'ফাইজার' :
                  clean.includes('সাগর') ? 'সাগর' :
                  clean.includes('সাকিব') ? 'সাকিব' :
                  clean.includes('জিহাদ') ? 'জিহাদ' :
                  clean.includes('লিমন') ? 'লিমন' : friendName;

    return MEMORY_ALBUMS.filter(a => 
      a.title.includes(query) || 
      a.story.includes(query) || 
      a.description.includes(query) ||
      (a.companions && a.companions.some(c => c.includes(query)))
    ).slice(0, 3);
  };

  return (
    <section id="friends" className="py-16 sm:py-24 paper-bg border-b border-amber-200/50 dark:border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-100 dark:bg-amber-950/60 text-amber-900 dark:text-amber-300 text-xs font-semibold mb-3 border border-amber-200/80 dark:border-amber-800">
            <Users className="w-4 h-4 text-amber-600 dark:text-amber-400" />
            <span>বন্ধুমহল ও অকৃত্রিম সুহৃদ</span>
          </div>
          <h2 className="serif-font text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-slate-100 tracking-tight">
            যাদের সান্নিধ্যে রঙিন হয়েছিল প্রতিটি দিন
          </h2>
          <p className="mt-3 text-base text-slate-600 dark:text-slate-400">
            সাঈদ ও পারভেজের ৮ বছরের যৌথ পথচলায় পাশে থাকা ১১ জন সহযাত্রীর প্রতিটি অ্যালবাম ও স্মৃতির গ্যালারি।
          </p>
        </div>

        {/* Friends Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {FRIENDS_LIST.map((friend) => {
            const friendAlbums = getFriendAlbums(friend.name);

            return (
              <div
                key={friend.id}
                className="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-amber-200/80 dark:border-slate-800 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Top Header */}
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`w-14 h-14 rounded-2xl ${friend.color} font-bold text-lg flex items-center justify-center shadow-md shrink-0 group-hover:scale-105 transition-transform`}>
                      {friend.initials}
                    </div>

                    <div>
                      <h3 className="serif-font text-lg font-bold text-slate-900 dark:text-amber-100 group-hover:text-amber-800 dark:group-hover:text-amber-400 transition-colors">
                        {friend.name}
                      </h3>
                      <div className="text-xs font-semibold text-amber-800 dark:text-amber-400 mt-0.5">
                        {friend.role}
                      </div>
                    </div>
                  </div>

                  {/* Bio */}
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                    {friend.bio}
                  </p>

                  {/* Actual Photo Memories Thumbnails for this Friend */}
                  {friendAlbums.length > 0 && (
                    <div className="mt-4 pt-3 border-t border-amber-100 dark:border-slate-800/80">
                      <div className="text-[11px] font-semibold text-slate-500 dark:text-slate-400 mb-2 flex items-center justify-between">
                        <span className="flex items-center gap-1">
                          <Camera className="w-3 h-3 text-amber-600" />
                          স্মৃতির আসল ছবিসমূহ:
                        </span>
                        <span className="text-amber-800 dark:text-amber-400 font-mono text-[10px]">
                          {friendAlbums.length}টি অ্যালবাম
                        </span>
                      </div>
                      <div className="grid grid-cols-3 gap-2">
                        {friendAlbums.map((album) => {
                          const photo = album.photos[0];
                          if (!photo) return null;
                          return (
                            <button
                              key={album.id}
                              onClick={() => onSelectAlbum && onSelectAlbum(album, 0)}
                              className="relative aspect-square rounded-lg overflow-hidden border border-amber-200 dark:border-slate-700 hover:scale-105 transition-transform group/photo cursor-pointer"
                              title={`${album.title} (${album.year})`}
                            >
                              <img
                                src={photo.thumbnailUrl}
                                alt={album.title}
                                referrerPolicy="no-referrer"
                                className="w-full h-full object-cover"
                              />
                              <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover/photo:opacity-100 transition-opacity flex items-center justify-center text-[10px] text-white font-bold text-center px-1">
                                {album.year}
                              </div>
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </div>

                {/* Footer Action */}
                <div className="mt-5 pt-3 border-t border-amber-100 dark:border-slate-800 flex items-center justify-between text-xs">
                  <span className="text-slate-500 dark:text-slate-400 font-mono text-[11px]">
                    {friend.memoriesCount}+ টি যৌথ অ্যালবাম
                  </span>

                  <button
                    onClick={() => {
                      onFriendSelect(friend.name);
                      const el = document.getElementById('gallery');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="font-semibold text-amber-800 dark:text-amber-400 hover:underline inline-flex items-center gap-1 cursor-pointer"
                  >
                    <span>গ্যালারিতে খুঁজুন</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

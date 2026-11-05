import React from 'react';
import { TIMELINE_MILESTONES, MEMORY_ALBUMS, MemoryAlbum } from '../data/memoriesData';
import { Clock, MapPin, Sparkles, ArrowRight, Camera } from 'lucide-react';

interface TimelineSectionProps {
  onYearSelect: (year: number) => void;
  onSelectAlbum?: (album: MemoryAlbum, photoIndex?: number) => void;
}

export default function TimelineSection({ onYearSelect, onSelectAlbum }: TimelineSectionProps) {

  // Featured banner album: Bandarban 2023 or Cox's Bazar
  const featuredAlbum = MEMORY_ALBUMS.find(a => a.year === 2023 && a.photos.length > 0) || MEMORY_ALBUMS[0];
  const featuredPhoto = featuredAlbum?.photos[0];

  return (
    <section id="timeline" className="py-16 sm:py-24 bg-amber-50/70 dark:bg-slate-950/80 border-b border-amber-200/50 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-100 dark:bg-amber-950/60 text-amber-900 dark:text-amber-300 text-xs font-semibold mb-3 border border-amber-200/80 dark:border-amber-800">
            <Clock className="w-4 h-4 text-amber-600 dark:text-amber-400" />
            <span>৮ বছরের যৌথ পথচলা</span>
          </div>
          <h2 className="serif-font text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-slate-100 tracking-tight">
            ২০১৭ থেকে ২০২৬—ইতিহাসের মাইফলকসমূহ
          </h2>
          <p className="mt-3 text-base text-slate-600 dark:text-slate-400">
            নিউমার্কেটের প্রথম রাত থেকে শুরু করে বান্দরবানের পাহাড় আর ২০২৬-এর ঈদ পর্যন্ত বছরের পর বছর গড়ে ওঠা আমাদের আসল স্মৃতির মেলবন্ধন।
          </p>
        </div>

        {/* Feature Visual Banner using Real Drive Photo */}
        <div 
          className="relative rounded-3xl overflow-hidden mb-16 border border-amber-200 dark:border-slate-800 shadow-2xl h-72 sm:h-96 group cursor-pointer"
          onClick={() => onSelectAlbum && onSelectAlbum(featuredAlbum, 0)}
        >
          <img
            src={featuredPhoto?.thumbnailUrl}
            alt={featuredAlbum.title}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/50 to-transparent p-6 sm:p-10 flex flex-col justify-end text-white">
            <div className="flex items-center gap-2 text-xs font-semibold text-amber-300 mb-2">
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span>জীবনের সেরা সোনালী সময় · {featuredAlbum.year}</span>
            </div>
            <h3 className="serif-font text-xl sm:text-2xl lg:text-3xl font-bold text-amber-100">
              "{featuredAlbum.title}"
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 mt-2 max-w-2xl line-clamp-2">
              {featuredAlbum.story}
            </p>
            <div className="mt-3 flex items-center gap-2 text-xs text-amber-400 font-semibold">
              <Camera className="w-3.5 h-3.5" />
              <span>আসল ছবি খুলতে ক্লিক করুন ({featuredAlbum.photos.length}টি ছবি)</span>
            </div>
          </div>
        </div>

        {/* Vertical Timeline Tree */}
        <div className="relative border-l-2 border-amber-300 dark:border-slate-800 ml-4 sm:ml-32 space-y-12">
          {TIMELINE_MILESTONES.map((item, idx) => {
            // Find albums from dataset for this milestone year
            const yearAlbums = MEMORY_ALBUMS.filter(a => a.year === item.year && a.photos.length > 0).slice(0, 4);

            return (
              <div key={item.year} className="relative pl-6 sm:pl-10 group">
                
                {/* Timeline Node Badge */}
                <div className="absolute -left-[17px] top-1 w-8 h-8 rounded-full bg-amber-700 dark:bg-amber-600 text-white font-mono font-bold text-xs flex items-center justify-center shadow-md border-2 border-white dark:border-slate-950 group-hover:scale-110 transition-transform">
                  {idx + 1}
                </div>

                {/* Year Label */}
                <div className="sm:absolute sm:-left-32 sm:top-1 text-amber-900 dark:text-amber-400 font-mono font-bold text-lg sm:text-right sm:w-24 mb-1 sm:mb-0">
                  {item.year}
                </div>

                {/* Milestone Card */}
                <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-amber-200/80 dark:border-slate-800 shadow-sm hover:shadow-lg transition-all">
                  <div className="flex items-center justify-between flex-wrap gap-2 mb-2">
                    <div className="flex items-center gap-1.5 text-xs font-semibold text-amber-800 dark:text-amber-400">
                      <MapPin className="w-3.5 h-3.5" />
                      <span>{item.location}</span>
                    </div>
                    <span className="text-xs text-slate-500 dark:text-slate-400 font-mono">
                      {item.tagline}
                    </span>
                  </div>

                  <h3 className="serif-font text-xl font-bold text-slate-900 dark:text-amber-100">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                    {item.description}
                  </p>

                  {/* Real Photo Album Thumbnails for this Milestone */}
                  {yearAlbums.length > 0 && (
                    <div className="mt-4 pt-3 border-t border-amber-100 dark:border-slate-800">
                      <div className="text-xs font-semibold text-slate-600 dark:text-slate-400 mb-2 flex items-center gap-1.5">
                        <Camera className="w-3.5 h-3.5 text-amber-600" />
                        <span>{item.year}-এর আসল গুগল ড্রাইভ অ্যালবামের ছবি:</span>
                      </div>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                        {yearAlbums.map((album) => {
                          const photo = album.photos[0];
                          if (!photo) return null;
                          return (
                            <button
                              key={album.id}
                              onClick={() => onSelectAlbum && onSelectAlbum(album, 0)}
                              className="relative aspect-4/3 rounded-lg overflow-hidden border border-amber-200 dark:border-slate-700 hover:scale-105 transition-transform group/ph cursor-pointer text-left"
                            >
                              <img
                                src={photo.thumbnailUrl}
                                alt={album.title}
                                referrerPolicy="no-referrer"
                                className="w-full h-full object-cover"
                              />
                              <div className="absolute inset-0 bg-slate-950/50 opacity-0 group-hover/ph:opacity-100 transition-opacity p-2 flex flex-col justify-end text-white text-[10px]">
                                <span className="font-bold line-clamp-1">{album.title}</span>
                              </div>
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  )}

                  {/* Jump to Gallery Action */}
                  <div className="mt-4 pt-3 border-t border-amber-100 dark:border-slate-800 flex justify-end">
                    <button
                      onClick={() => {
                        onYearSelect(item.year);
                        const el = document.getElementById('gallery');
                        if (el) el.scrollIntoView({ behavior: 'smooth' });
                      }}
                      className="inline-flex items-center gap-1 text-xs font-semibold text-amber-800 dark:text-amber-400 hover:text-amber-900 dark:hover:text-amber-300 transition-colors cursor-pointer"
                    >
                      <span>{item.year}-এর সকল অ্যালবাম খুঁজুন ({yearAlbums.length}টি)</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

import React, { useState, useMemo } from 'react';
import { MEMORY_ALBUMS, CATEGORIES, MemoryAlbum } from '../data/memoriesData';
import { Search, Filter, Images, MapPin, Calendar, Users, ExternalLink, Sparkles, X, Shuffle } from 'lucide-react';

interface GallerySectionProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  onSelectAlbum: (album: MemoryAlbum, photoIndex?: number) => void;
}

export default function GallerySection({ searchQuery, onSearchChange, onSelectAlbum }: GallerySectionProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedYear, setSelectedYear] = useState<number | 'all'>('all');

  const yearsList = [2026, 2025, 2024, 2023, 2022, 2021, 2019, 2018, 2017];

  const handleRandomMemory = () => {
    const randomIndex = Math.floor(Math.random() * MEMORY_ALBUMS.length);
    const randomAlbum = MEMORY_ALBUMS[randomIndex];
    if (randomAlbum) {
      onSelectAlbum(randomAlbum, 0);
    }
  };

  const filteredAlbums = useMemo(() => {
    return MEMORY_ALBUMS.filter((album) => {
      // Category match
      const categoryMatch = selectedCategory === 'all' || album.category === selectedCategory;

      // Year match
      const yearMatch = selectedYear === 'all' || album.year === selectedYear;

      // Search match
      const query = searchQuery.trim().toLowerCase();
      const searchMatch =
        !query ||
        album.title.toLowerCase().includes(query) ||
        album.description.toLowerCase().includes(query) ||
        (album.location && album.location.toLowerCase().includes(query)) ||
        album.year.toString().includes(query) ||
        (album.companions && album.companions.some((c) => c.toLowerCase().includes(query)));

      return categoryMatch && yearMatch && searchMatch;
    });
  }, [selectedCategory, selectedYear, searchQuery]);

  return (
    <section id="gallery" className="py-16 sm:py-24 paper-bg border-b border-amber-200/50 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 dark:bg-amber-900/40 text-amber-800 dark:text-amber-300 text-xs font-semibold mb-3">
              <Images className="w-3.5 h-3.5" />
              <span>স্মৃতির ডিজিটাল অ্যালবাম (৮৬টি)</span>
            </div>
            <h2 className="serif-font text-3xl sm:text-4xl font-bold text-slate-900 dark:text-slate-100 tracking-tight">
              আমাদের সকল যৌথ ছবি ও অমলিন গল্পগাথা
            </h2>
            <p className="mt-2 text-base text-slate-600 dark:text-slate-400">
              ২০১৭ থেকে ২০২৬ পর্যন্ত জয়দেবপুর, ঢাকা, বান্দরবান, সিলেটসহ সারা বাংলাদেশের প্রতিটি সফরের অ্যালবাম।
            </p>
          </div>

          {/* Search & Random Memory Action */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full md:w-auto shrink-0">
            <button
              onClick={handleRandomMemory}
              className="inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white rounded-xl text-xs font-semibold shadow-md shadow-amber-600/20 hover:shadow-amber-600/30 transition-all cursor-pointer whitespace-nowrap group"
              title="যেকোনো একটি র্যান্ডম অ্যালবাম খুলুন"
            >
              <Shuffle className="w-3.5 h-3.5 group-hover:rotate-180 transition-transform duration-500" />
              <span>দৈব স্মৃতি আবিষ্কার</span>
            </button>

            <div className="relative w-full sm:w-72">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                placeholder="স্মৃতি বা জায়গার নাম খুঁজুন..."
                className="w-full pl-10 pr-9 py-2.5 bg-white dark:bg-slate-900 border border-amber-200 dark:border-slate-800 rounded-xl text-sm text-slate-900 dark:text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-500 shadow-sm"
              />
              {searchQuery && (
                <button
                  onClick={() => onSearchChange('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-slate-400 hover:text-slate-600 focus:outline-none"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Filter Toolbar (Segmented Buttons for Categories) */}
        <div className="space-y-4 mb-8">
          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {CATEGORIES.map((cat) => {
              const isActive = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-3.5 py-1.5 text-xs font-semibold rounded-xl transition-all whitespace-nowrap shrink-0 flex items-center gap-1.5 ${
                    isActive
                      ? 'bg-amber-800 text-white dark:bg-amber-600 shadow-sm'
                      : 'bg-white/80 dark:bg-slate-900/80 text-slate-700 dark:text-slate-300 hover:bg-amber-100/70 border border-amber-200/60 dark:border-slate-800'
                  }`}
                >
                  <span>{cat.nameBn}</span>
                </button>
              );
            })}
          </div>

          {/* Year Filter Buttons */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 shrink-0 mr-1">
              বছর অনুযায়ী:
            </span>
            <button
              onClick={() => setSelectedYear('all')}
              className={`px-3 py-1 text-xs font-mono font-medium rounded-lg transition-colors whitespace-nowrap shrink-0 ${
                selectedYear === 'all'
                  ? 'bg-slate-900 text-white dark:bg-amber-400 dark:text-slate-950 font-bold'
                  : 'bg-amber-100/60 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 hover:bg-amber-200/60'
              }`}
            >
              সকল বছর
            </button>
            {yearsList.map((yr) => (
              <button
                key={yr}
                onClick={() => setSelectedYear(yr)}
                className={`px-3 py-1 text-xs font-mono font-medium rounded-lg transition-colors whitespace-nowrap shrink-0 ${
                  selectedYear === yr
                    ? 'bg-slate-900 text-white dark:bg-amber-400 dark:text-slate-950 font-bold'
                    : 'bg-amber-100/60 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 hover:bg-amber-200/60'
                }`}
              >
                {yr}
              </button>
            ))}
          </div>
        </div>

        {/* Results Info Bar */}
        <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 mb-6 px-1">
          <div>
            প্রদর্শিত হচ্ছে <span className="font-bold text-amber-800 dark:text-amber-300 font-mono tabular-nums">{filteredAlbums.length}টি</span> স্মৃতির অ্যালবাম
          </div>
          {(selectedCategory !== 'all' || selectedYear !== 'all' || searchQuery) && (
            <button
              onClick={() => {
                setSelectedCategory('all');
                setSelectedYear('all');
                onSearchChange('');
              }}
              className="text-amber-700 dark:text-amber-400 hover:underline font-medium"
            >
              ফিল্টার রিসেট করুন
            </button>
          )}
        </div>

        {/* Album Cards Grid (3 Columns on Desktop) */}
        {filteredAlbums.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredAlbums.map((album) => {
              const coverPhoto = album.photos[0];

              return (
                <div
                  key={album.id}
                  onClick={() => onSelectAlbum(album, 0)}
                  className="group bg-white dark:bg-slate-900 rounded-2xl overflow-hidden border border-amber-200/80 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col justify-between"
                >
                  {/* Photo Container */}
                  <div className="relative aspect-[4/3] bg-slate-100 dark:bg-slate-950 overflow-hidden">
                    <img
                      src={`https://drive.google.com/thumbnail?id=${coverPhoto.driveId}&sz=w800`}
                      alt={album.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

                    {/* Top Badges */}
                    <div className="absolute top-3 inset-x-3 flex items-center justify-between text-xs font-medium text-white">
                      <span className="bg-slate-900/80 backdrop-blur-md px-2.5 py-1 rounded-md border border-slate-700 font-mono tabular-nums">
                        {album.year}
                      </span>
                      {album.photos.length > 1 && (
                        <span className="bg-amber-600/90 backdrop-blur-md px-2 py-1 rounded-md font-mono tabular-nums flex items-center gap-1 text-white">
                          <Images className="w-3 h-3" />
                          <span>{album.photos.length}টি ছবি</span>
                        </span>
                      )}
                    </div>

                    {/* Featured Star */}
                    {album.featured && (
                      <div className="absolute bottom-3 left-3 bg-amber-500 text-slate-950 px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider flex items-center gap-1 shadow">
                        <Sparkles className="w-3 h-3" />
                        <span>বিশেষ স্মৃতি</span>
                      </div>
                    )}
                  </div>

                  {/* Content Info Container */}
                  <div className="p-5 flex-1 flex flex-col justify-between">
                    <div>
                      {/* Location Kicker */}
                      {album.location && (
                        <div className="flex items-center gap-1 text-xs text-amber-800 dark:text-amber-400 font-medium mb-1.5">
                          <MapPin className="w-3 h-3 shrink-0" />
                          <span className="truncate">{album.location}</span>
                        </div>
                      )}

                      <h3 className="serif-font text-lg font-bold text-slate-900 dark:text-amber-100 group-hover:text-amber-700 dark:group-hover:text-amber-400 transition-colors line-clamp-1">
                        {album.title}
                      </h3>

                      <p className="mt-2 text-xs text-slate-600 dark:text-slate-300 leading-relaxed line-clamp-2">
                        {album.description}
                      </p>
                    </div>

                    {/* Companions & View Action */}
                    <div className="mt-4 pt-3 border-t border-amber-100 dark:border-slate-800 flex items-center justify-between text-xs">
                      {album.companions && album.companions.length > 0 ? (
                        <div className="text-slate-500 dark:text-slate-400 truncate max-w-[70%]">
                          {album.companions.slice(0, 3).join(', ')}
                          {album.companions.length > 3 ? '...' : ''}
                        </div>
                      ) : (
                        <span className="text-slate-400">সাঈদ ও পারভেজ</span>
                      )}

                      <span className="font-semibold text-amber-800 dark:text-amber-400 group-hover:translate-x-1 transition-transform flex items-center gap-1 shrink-0">
                        <span>ছবি দেখুন</span>
                        <ExternalLink className="w-3 h-3" />
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          /* Empty Search State */
          <div className="text-center py-16 bg-white dark:bg-slate-900 rounded-3xl border border-amber-200/80 dark:border-slate-800 p-8 max-w-lg mx-auto">
            <Images className="w-12 h-12 text-amber-500 mx-auto mb-4 opacity-70" />
            <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100">
              কোনো মিল পাওয়া যায়নি
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-2">
              আপনার দেওয়া ফিল্টার বা অনুসন্ধানে কোনো অ্যালবামের নাম মেলেনি। দয়া করে অন্য নাম দিয়ে খুঁজুন।
            </p>
            <button
              onClick={() => {
                setSelectedCategory('all');
                setSelectedYear('all');
                onSearchChange('');
              }}
              className="mt-5 px-4 py-2 text-xs font-semibold text-white bg-amber-700 hover:bg-amber-800 rounded-xl transition-colors"
            >
              সকল স্মৃতি দেখুন
            </button>
          </div>
        )}

      </div>
    </section>
  );
}

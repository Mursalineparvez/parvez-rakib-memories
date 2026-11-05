import React, { useState } from 'react';
import { PARVEZ_LETTER_CHAPTERS, MEMORY_ALBUMS, MemoryAlbum } from '../data/memoriesData';
import { BookOpen, Bookmark, Copy, Check, Volume2, VolumeX, Sparkles, ChevronRight, ChevronLeft, Camera } from 'lucide-react';

interface LetterSectionProps {
  onSelectAlbum?: (album: MemoryAlbum, photoIndex?: number) => void;
}

export default function LetterSection({ onSelectAlbum }: LetterSectionProps) {
  const [activeChapterId, setActiveChapterId] = useState<string>('ch1');
  const [fontSize, setFontSize] = useState<'normal' | 'large' | 'xlarge'>('normal');
  const [copiedQuote, setCopiedQuote] = useState<string | null>(null);
  const [bookmarkedChapters, setBookmarkedChapters] = useState<string[]>(['ch1']);
  const [isReading, setIsReading] = useState(false);

  const activeChapter = PARVEZ_LETTER_CHAPTERS.find((ch) => ch.id === activeChapterId) || PARVEZ_LETTER_CHAPTERS[0];

  // Helper to map chapter number to corresponding memory albums with real photos
  const getChapterPhotos = (chapterNum: number): MemoryAlbum[] => {
    switch (chapterNum) {
      case 1: // Visa & Farewell
        return MEMORY_ALBUMS.filter(a => a.category === 'farewell' || a.year === 2026).slice(0, 3);
      case 2: // 2017 & First Night in Dhaka
        return MEMORY_ALBUMS.filter(a => a.year === 2017).slice(0, 3);
      case 3: // 2018 & Shonir Akhra
        return MEMORY_ALBUMS.filter(a => a.year === 2018).slice(0, 3);
      case 4: // 8-Year Memories & Travels
        return MEMORY_ALBUMS.filter(a => a.category === 'travel').slice(0, 3);
      case 5: // Advice & Brotherhood
        return MEMORY_ALBUMS.filter(a => a.category === 'eid' || a.category === 'home').slice(0, 3);
      case 6: // Farewell & Prayers
        return MEMORY_ALBUMS.filter(a => a.year === 2026 || a.category === 'celebration').slice(0, 3);
      default:
        return MEMORY_ALBUMS.slice(0, 3);
    }
  };

  const chapterAlbums = getChapterPhotos(activeChapter.chapterNumber);

  const toggleBookmark = (id: string) => {
    if (bookmarkedChapters.includes(id)) {
      setBookmarkedChapters(bookmarkedChapters.filter((chId) => chId !== id));
    } else {
      setBookmarkedChapters([...bookmarkedChapters, id]);
    }
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedQuote(text);
    setTimeout(() => setCopiedQuote(null), 2500);
  };

  // Web Speech API for Bengali reading
  const handleReadAloud = () => {
    if (isReading) {
      window.speechSynthesis.cancel();
      setIsReading(false);
      return;
    }

    if ('speechSynthesis' in window) {
      const textToRead = `${activeChapter.title}। ${activeChapter.content.join(' ')}`;
      const utterance = new SpeechSynthesisUtterance(textToRead);
      utterance.lang = 'bn-BD';
      utterance.rate = 0.9;
      
      utterance.onend = () => setIsReading(false);
      utterance.onerror = () => setIsReading(false);

      window.speechSynthesis.speak(utterance);
      setIsReading(true);
    } else {
      alert('আপনার ব্রাউজারে স্পিচ ফিচার সমর্থিত নয়।');
    }
  };

  const currentChapterIndex = PARVEZ_LETTER_CHAPTERS.findIndex((ch) => ch.id === activeChapterId);

  const fontClass = {
    normal: 'text-base sm:text-lg leading-relaxed',
    large: 'text-lg sm:text-xl leading-loose',
    xlarge: 'text-xl sm:text-2xl leading-loose',
  }[fontSize];

  return (
    <section id="letter" className="py-16 sm:py-24 bg-amber-50/60 dark:bg-slate-950/80 border-b border-amber-200/50 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-100 dark:bg-amber-950/60 text-amber-900 dark:text-amber-300 text-xs font-semibold mb-3 border border-amber-200/80 dark:border-amber-800">
            <BookOpen className="w-4 h-4 text-amber-600 dark:text-amber-400" />
            <span>পারভেজের হৃদয় নিংড়ানো খোলা চিঠি</span>
          </div>
          <h2 className="serif-font text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-slate-100 tracking-tight">
            চিরন্তন বন্ধুত্বের এক অমর উপাখ্যান
          </h2>
          <p className="mt-3 text-base text-slate-600 dark:text-slate-400">
            সাঈদ (রাকিব)-এর প্রবাসে পাড়ি জমানোর প্রাক্কালে পারভেজের লেখা চিঠিটি ৬টি সুবিন্যস্ত অধ্যায়ে সুন্দরভাবে সাজানো হয়েছে।
          </p>
        </div>

        {/* Reading Layout Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Chapter Navigation List (Left Column) */}
          <div className="lg:col-span-4 space-y-3 sticky top-20">
            
            {/* Visual Header Card using Real Photo */}
            {chapterAlbums[0] && chapterAlbums[0].photos[0] && (
              <div 
                className="relative rounded-2xl overflow-hidden mb-6 border border-amber-200 dark:border-slate-800 shadow-md h-44 group cursor-pointer"
                onClick={() => onSelectAlbum && onSelectAlbum(chapterAlbums[0], 0)}
              >
                <img
                  src={chapterAlbums[0].photos[0].thumbnailUrl}
                  alt={chapterAlbums[0].title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent p-4 flex flex-col justify-end text-white">
                  <span className="text-[11px] text-amber-300 font-semibold flex items-center gap-1">
                    <Camera className="w-3 h-3" />
                    অধ্যায় {activeChapter.chapterNumber}-এর সাথে সম্পর্কিত আসল স্মৃতি
                  </span>
                  <h3 className="serif-font text-base font-bold text-amber-100 line-clamp-1">
                    {chapterAlbums[0].title}
                  </h3>
                </div>
              </div>
            )}

            {/* Chapter Buttons */}
            <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-md rounded-2xl p-3 border border-amber-200/70 dark:border-slate-800 shadow-sm space-y-2">
              <div className="text-xs font-semibold text-slate-500 dark:text-slate-400 px-3 py-1 uppercase tracking-wider">
                অধ্যায় নির্বাচন করুন ({PARVEZ_LETTER_CHAPTERS.length}টি)
              </div>

              {PARVEZ_LETTER_CHAPTERS.map((ch) => {
                const isActive = ch.id === activeChapterId;
                const isBookmarked = bookmarkedChapters.includes(ch.id);

                return (
                  <button
                    key={ch.id}
                    onClick={() => setActiveChapterId(ch.id)}
                    className={`w-full text-left p-3 rounded-xl transition-all flex items-start gap-3 text-wrap cursor-pointer ${
                      isActive
                        ? 'bg-amber-800 text-white shadow-md dark:bg-amber-600'
                        : 'hover:bg-amber-100/60 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-200'
                    }`}
                  >
                    <span
                      className={`w-6 h-6 rounded-full text-xs font-bold font-mono flex items-center justify-center shrink-0 ${
                        isActive
                          ? 'bg-white/20 text-white'
                          : 'bg-amber-100 dark:bg-slate-800 text-amber-800 dark:text-amber-400'
                      }`}
                    >
                      {ch.chapterNumber}
                    </span>
                    <div className="flex-1 min-w-0">
                      <div className="text-xs font-semibold truncate flex items-center justify-between">
                        <span>অধ্যায় {ch.chapterNumber}</span>
                        {isBookmarked && (
                          <Bookmark className={`w-3.5 h-3.5 fill-current ${isActive ? 'text-amber-200' : 'text-amber-600'}`} />
                        )}
                      </div>
                      <div className={`text-sm font-medium mt-0.5 line-clamp-1 ${isActive ? 'text-amber-50' : 'text-slate-900 dark:text-slate-100'}`}>
                        {ch.title}
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Reading Helper Tools */}
            <div className="p-3 bg-white/80 dark:bg-slate-900/80 rounded-xl border border-amber-200/60 dark:border-slate-800 flex items-center justify-between text-xs text-slate-600 dark:text-slate-400">
              <span className="font-medium">পাঠ্য আকার:</span>
              <div className="flex items-center gap-1">
                <button
                  onClick={() => setFontSize('normal')}
                  className={`px-2 py-1 rounded cursor-pointer ${fontSize === 'normal' ? 'bg-amber-800 text-white' : 'hover:bg-amber-100 dark:hover:bg-slate-800'}`}
                >
                  স্বাভাবিক
                </button>
                <button
                  onClick={() => setFontSize('large')}
                  className={`px-2 py-1 rounded cursor-pointer ${fontSize === 'large' ? 'bg-amber-800 text-white' : 'hover:bg-amber-100 dark:hover:bg-slate-800'}`}
                >
                  বড়
                </button>
                <button
                  onClick={() => setFontSize('xlarge')}
                  className={`px-2 py-1 rounded cursor-pointer ${fontSize === 'xlarge' ? 'bg-amber-800 text-white' : 'hover:bg-amber-100 dark:hover:bg-slate-800'}`}
                >
                  আরও বড়
                </button>
              </div>
            </div>

          </div>

          {/* Main Reading View Pane (Right Column) */}
          <div className="lg:col-span-8 bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-10 border border-amber-200/80 dark:border-slate-800 shadow-xl relative">
            
            {/* Reading Toolbar Header */}
            <div className="flex items-center justify-between pb-6 border-b border-amber-100 dark:border-slate-800">
              <div className="flex items-center gap-2 text-xs font-semibold text-amber-800 dark:text-amber-400">
                <Sparkles className="w-4 h-4" />
                <span>অধ্যায় {activeChapter.chapterNumber} of {PARVEZ_LETTER_CHAPTERS.length}</span>
              </div>

              <div className="flex items-center gap-2">
                {/* Audio Read Aloud */}
                <button
                  onClick={handleReadAloud}
                  className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-medium transition-colors cursor-pointer ${
                    isReading
                      ? 'bg-amber-800 text-white animate-pulse'
                      : 'bg-amber-100 dark:bg-slate-800 text-amber-900 dark:text-amber-200 hover:bg-amber-200'
                  }`}
                  title="চিঠি পড়ে শোনান"
                >
                  {isReading ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5" />}
                  <span>{isReading ? 'পড়া থামান' : 'পড়ে শোনান'}</span>
                </button>

                {/* Bookmark Chapter */}
                <button
                  onClick={() => toggleBookmark(activeChapter.id)}
                  className={`p-2 rounded-xl text-xs transition-colors cursor-pointer ${
                    bookmarkedChapters.includes(activeChapter.id)
                      ? 'bg-amber-100 text-amber-800 dark:bg-amber-900/40 dark:text-amber-300'
                      : 'hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-500'
                  }`}
                  title="বুকমার্ক করুন"
                >
                  <Bookmark className={`w-4 h-4 ${bookmarkedChapters.includes(activeChapter.id) ? 'fill-current' : ''}`} />
                </button>
              </div>
            </div>

            {/* Chapter Header Title */}
            <div className="mt-6">
              <h3 className="serif-font text-2xl sm:text-3xl font-bold text-slate-900 dark:text-amber-100 leading-snug">
                {activeChapter.title}
              </h3>
              <p className="text-sm font-medium text-amber-700 dark:text-amber-400 mt-1">
                {activeChapter.subtitle}
              </p>
            </div>

            {/* Key Quote Callout */}
            {activeChapter.keyQuote && (
              <div className="my-6 p-4 sm:p-5 rounded-2xl bg-amber-50 dark:bg-slate-950 border border-amber-200 dark:border-slate-800 relative">
                <p className="serif-font italic text-base sm:text-lg text-amber-950 dark:text-amber-200">
                  “{activeChapter.keyQuote}”
                </p>
                <div className="mt-3 flex items-center justify-between text-xs text-amber-700 dark:text-amber-400 font-medium">
                  <span>চিঠির বিশেষ অনুভূতি</span>
                  <button
                    onClick={() => copyToClipboard(activeChapter.keyQuote!)}
                    className="flex items-center gap-1 hover:text-amber-900 dark:hover:text-amber-200 transition-colors cursor-pointer"
                  >
                    {copiedQuote === activeChapter.keyQuote ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-600" />
                        <span className="text-emerald-600">কপি হয়েছে</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>কপি করুন</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            )}

            {/* Chapter Paragraphs */}
            <div className={`space-y-5 text-slate-800 dark:text-slate-200 font-normal ${fontClass}`}>
              {activeChapter.content.map((paragraph, idx) => (
                <p key={idx} className="indent-4 sm:indent-8">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Embedded Real Photo Cards for this Chapter */}
            {chapterAlbums.length > 0 && (
              <div className="mt-8 pt-6 border-t border-amber-100 dark:border-slate-800">
                <div className="text-xs font-bold text-amber-900 dark:text-amber-300 mb-3 flex items-center gap-1.5">
                  <Camera className="w-4 h-4 text-amber-600" />
                  <span>এই অধ্যায়ের সাথে সম্পর্কিত আসল স্মৃতি অ্যালবাম:</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {chapterAlbums.map((album) => {
                    const photo = album.photos[0];
                    if (!photo) return null;
                    return (
                      <div
                        key={album.id}
                        onClick={() => onSelectAlbum && onSelectAlbum(album, 0)}
                        className="bg-amber-50/70 dark:bg-slate-950 p-2 rounded-xl border border-amber-200 dark:border-slate-800 hover:shadow-md transition-all cursor-pointer group"
                      >
                        <div className="aspect-4/3 rounded-lg overflow-hidden bg-slate-900 mb-2">
                          <img
                            src={photo.thumbnailUrl}
                            alt={album.title}
                            referrerPolicy="no-referrer"
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                          />
                        </div>
                        <h4 className="serif-font text-xs font-bold text-slate-900 dark:text-slate-100 line-clamp-1">
                          {album.title}
                        </h4>
                        <span className="text-[10px] text-amber-700 dark:text-amber-400 font-mono">
                          {album.year} · {album.photos.length}টি ছবি
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Bottom Chapter Nav Buttons */}
            <div className="mt-10 pt-6 border-t border-amber-100 dark:border-slate-800 flex items-center justify-between">
              <button
                disabled={currentChapterIndex === 0}
                onClick={() => setActiveChapterId(PARVEZ_LETTER_CHAPTERS[currentChapterIndex - 1].id)}
                className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-medium transition-all cursor-pointer ${
                  currentChapterIndex === 0
                    ? 'opacity-40 cursor-not-allowed text-slate-400'
                    : 'bg-amber-100 text-amber-900 dark:bg-slate-800 dark:text-amber-200 hover:bg-amber-200'
                }`}
              >
                <ChevronLeft className="w-4 h-4" />
                <span>পূর্ববর্তী অধ্যায়</span>
              </button>

              <span className="text-xs font-mono tabular-nums text-slate-500">
                {currentChapterIndex + 1} / {PARVEZ_LETTER_CHAPTERS.length}
              </span>

              <button
                disabled={currentChapterIndex === PARVEZ_LETTER_CHAPTERS.length - 1}
                onClick={() => setActiveChapterId(PARVEZ_LETTER_CHAPTERS[currentChapterIndex + 1].id)}
                className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-medium transition-all cursor-pointer ${
                  currentChapterIndex === PARVEZ_LETTER_CHAPTERS.length - 1
                    ? 'opacity-40 cursor-not-allowed text-slate-400'
                    : 'bg-amber-800 text-white hover:bg-amber-900 dark:bg-amber-600'
                }`}
              >
                <span>পরবর্তী অধ্যায়</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

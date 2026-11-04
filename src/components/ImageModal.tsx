import React, { useEffect } from 'react';
import { MemoryAlbum, PhotoItem } from '../data/memoriesData';
import { X, ExternalLink, ChevronLeft, ChevronRight, MapPin, Calendar, Users, Images, Download } from 'lucide-react';

interface ImageModalProps {
  album: MemoryAlbum | null;
  selectedPhotoIndex: number;
  onClose: () => void;
  onNavigate: (newIndex: number) => void;
}

export default function ImageModal({ album, selectedPhotoIndex, onClose, onNavigate }: ImageModalProps) {
  if (!album) return null;

  const currentPhoto: PhotoItem = album.photos[selectedPhotoIndex] || album.photos[0];

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft' && selectedPhotoIndex > 0) onNavigate(selectedPhotoIndex - 1);
      if (e.key === 'ArrowRight' && selectedPhotoIndex < album.photos.length - 1) onNavigate(selectedPhotoIndex + 1);
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [album, selectedPhotoIndex, onClose, onNavigate]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/90 backdrop-blur-md animate-fade-in">
      
      {/* Container Box */}
      <div className="relative w-full max-w-5xl bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden shadow-2xl flex flex-col lg:flex-row max-h-[92vh]">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 rounded-full bg-slate-800/80 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors focus:outline-none"
          title="বন্ধ করুন (ESC)"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Media Viewing Column */}
        <div className="lg:w-3/4 relative bg-black flex items-center justify-center min-h-[350px] sm:min-h-[480px]">
          <img
            src={`https://drive.google.com/thumbnail?id=${currentPhoto.driveId}&sz=w1200`}
            alt={album.title}
            referrerPolicy="no-referrer"
            className="max-h-[75vh] w-auto max-w-full object-contain select-none"
          />

          {/* Left Arrow */}
          {selectedPhotoIndex > 0 && (
            <button
              onClick={() => onNavigate(selectedPhotoIndex - 1)}
              className="absolute left-3 top-1/2 -translate-y-1/2 p-3 rounded-full bg-slate-900/70 hover:bg-slate-800 text-white transition-all shadow-md focus:outline-none"
              title="পূর্ববর্তী ছবি"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
          )}

          {/* Right Arrow */}
          {selectedPhotoIndex < album.photos.length - 1 && (
            <button
              onClick={() => onNavigate(selectedPhotoIndex + 1)}
              className="absolute right-3 top-1/2 -translate-y-1/2 p-3 rounded-full bg-slate-900/70 hover:bg-slate-800 text-white transition-all shadow-md focus:outline-none"
              title="পরবর্তী ছবি"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          )}

          {/* Photo Count Counter Overlay */}
          {album.photos.length > 1 && (
            <div className="absolute bottom-4 left-4 bg-slate-900/80 backdrop-blur-md px-3 py-1 rounded-full text-xs font-mono tabular-nums text-amber-300 border border-slate-700">
              {selectedPhotoIndex + 1} / {album.photos.length}
            </div>
          )}
        </div>

        {/* Metadata Details Column */}
        <div className="lg:w-1/4 p-6 bg-slate-900 text-slate-100 flex flex-col justify-between overflow-y-auto">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-amber-400 mb-2">
              <Calendar className="w-3.5 h-3.5" />
              <span>{album.year} সালের স্মৃতি</span>
              {album.location && (
                <>
                  <span>·</span>
                  <MapPin className="w-3.5 h-3.5" />
                  <span className="truncate">{album.location}</span>
                </>
              )}
            </div>

            <h3 className="serif-font text-xl font-bold text-amber-100 leading-snug">
              {album.title}
            </h3>

            <p className="mt-3 text-sm text-slate-300 leading-relaxed font-normal">
              {album.description}
            </p>

            {/* Companions */}
            {album.companions && album.companions.length > 0 && (
              <div className="mt-5 pt-4 border-t border-slate-800">
                <div className="text-xs font-semibold text-slate-400 mb-2 flex items-center gap-1.5">
                  <Users className="w-3.5 h-3.5 text-amber-400" />
                  <span>স্মৃতির সহযাত্রীবৃন্দ:</span>
                </div>
                <div className="flex flex-wrap gap-1.5 text-xs text-slate-300">
                  {album.companions.map((comp, idx) => (
                    <span key={idx} className="bg-slate-800 border border-slate-700 rounded-md px-2 py-0.5">
                      {comp}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Album Thumbnails Strip */}
            {album.photos.length > 1 && (
              <div className="mt-6 pt-4 border-t border-slate-800">
                <div className="text-xs font-semibold text-slate-400 mb-2 flex items-center gap-1.5">
                  <Images className="w-3.5 h-3.5 text-amber-400" />
                  <span>অ্যালবামের ছবিসমূহ ({album.photos.length}টি):</span>
                </div>
                <div className="grid grid-cols-4 gap-2">
                  {album.photos.map((ph, idx) => (
                    <button
                      key={ph.id}
                      onClick={() => onNavigate(idx)}
                      className={`relative rounded-lg overflow-hidden h-14 border-2 transition-all ${
                        idx === selectedPhotoIndex ? 'border-amber-500 scale-105' : 'border-slate-800 opacity-60 hover:opacity-100'
                      }`}
                    >
                      <img
                        src={`https://drive.google.com/thumbnail?id=${ph.driveId}&sz=w200`}
                        alt="Thumbnail"
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Drive Direct Link Action */}
          <div className="mt-6 pt-4 border-t border-slate-800">
            <a
              href={currentPhoto.driveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold text-slate-900 bg-amber-400 hover:bg-amber-300 transition-colors shadow-sm"
            >
              <ExternalLink className="w-4 h-4" />
              <span>গুগল ড্রাইভে মূল ছবি দেখুন</span>
            </a>
          </div>

        </div>

      </div>
    </div>
  );
}

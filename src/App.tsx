/**
 * Memory of Parvez and Rakib (Syed)
 * Main Application Component
 */

import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import LetterSection from './components/LetterSection';
import GallerySection from './components/GallerySection';
import TimelineSection from './components/TimelineSection';
import FriendsSection from './components/FriendsSection';
import AdviceCards from './components/AdviceCards';
import GuestbookSection from './components/GuestbookSection';
import NostalgiaQuiz from './components/NostalgiaQuiz';
import Footer from './components/Footer';
import ImageModal from './components/ImageModal';
import { MemoryAlbum } from './data/memoriesData';

export default function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedAlbum, setSelectedAlbum] = useState<MemoryAlbum | null>(null);
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState(0);

  const handleOpenAlbum = (album: MemoryAlbum, photoIndex: number = 0) => {
    setSelectedAlbum(album);
    setSelectedPhotoIndex(photoIndex);
  };

  const handleCloseModal = () => {
    setSelectedAlbum(null);
  };

  const handleSearchClick = () => {
    const el = document.getElementById('gallery');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      // Focus search input
      const input = el.querySelector('input');
      if (input) input.focus();
    }
  };

  const handleReadLetter = () => {
    const el = document.getElementById('letter');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleExploreGallery = () => {
    const el = document.getElementById('gallery');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-amber-50/40 text-slate-800 dark:bg-slate-950 dark:text-slate-100 font-['Hind_Siliguri',sans-serif] transition-colors">
      
      {/* Navigation Top Bar */}
      <Header onSearchClick={handleSearchClick} />

      {/* Main Content Area */}
      <main className="flex-1">
        
        {/* Hero Section */}
        <Hero
          onReadLetter={handleReadLetter}
          onExploreGallery={handleExploreGallery}
          onSelectAlbum={handleOpenAlbum}
        />

        {/* Letter Reading Section */}
        <LetterSection
          onSelectAlbum={handleOpenAlbum}
        />

        {/* Parvez's 5 Advice Cards */}
        <AdviceCards />

        {/* Photo & Memory Gallery Section */}
        <GallerySection
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          onSelectAlbum={handleOpenAlbum}
        />

        {/* 8-Year Milestone Timeline */}
        <TimelineSection
          onYearSelect={(year) => {
            setSearchQuery(year.toString());
          }}
          onSelectAlbum={handleOpenAlbum}
        />

        {/* Friends & Companions Section */}
        <FriendsSection
          onFriendSelect={(friendName) => {
            setSearchQuery(friendName);
          }}
          onSelectAlbum={handleOpenAlbum}
        />

        {/* Nostalgia Quiz Interactive Section */}
        <NostalgiaQuiz />

        {/* Well-Wishes Guestbook Section */}
        <GuestbookSection />

      </main>

      {/* Footer */}
      <Footer />

      {/* High-Resolution Image Lightbox Modal */}
      <ImageModal
        album={selectedAlbum}
        selectedPhotoIndex={selectedPhotoIndex}
        onClose={handleCloseModal}
        onNavigate={(newIdx) => setSelectedPhotoIndex(newIdx)}
      />

    </div>
  );
}

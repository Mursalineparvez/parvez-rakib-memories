import React, { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX, Music, Play, Pause } from 'lucide-react';

export default function AmbientPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(0.3);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const timerRef = useRef<number | null>(null);

  // Synthesize peaceful nostalgic binaural chords using Web Audio API
  const startMelody = () => {
    if (audioCtxRef.current) return;

    try {
      const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      const ctx = new AudioContextClass();
      audioCtxRef.current = ctx;

      const masterGain = ctx.createGain();
      masterGain.gain.value = isMuted ? 0 : volume;
      masterGain.connect(ctx.destination);

      // Pentatonic warm nostalgic chord frequencies (C major 7 / Am9)
      const chordFrequencies = [261.63, 329.63, 392.00, 493.88, 523.25, 659.25];
      let step = 0;

      const playTone = () => {
        if (!audioCtxRef.current || ctx.state === 'closed') return;
        const osc = ctx.createOscillator();
        const toneGain = ctx.createGain();

        // Soft sine wave for gentle piano/musicbox feel
        osc.type = 'sine';
        const freq = chordFrequencies[step % chordFrequencies.length];
        osc.frequency.setValueAtTime(freq, ctx.currentTime);

        toneGain.gain.setValueAtTime(0.001, ctx.currentTime);
        toneGain.gain.exponentialRampToValueAtTime(0.12, ctx.currentTime + 0.8);
        toneGain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 4.5);

        osc.connect(toneGain);
        toneGain.connect(masterGain);

        osc.start();
        osc.stop(ctx.currentTime + 4.8);

        step++;
      };

      playTone();
      timerRef.current = window.setInterval(playTone, 2400);
    } catch (e) {
      console.error('Audio synthesizer initialization error:', e);
    }
  };

  const stopMelody = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
    if (audioCtxRef.current) {
      audioCtxRef.current.close();
      audioCtxRef.current = null;
    }
  };

  const togglePlay = () => {
    if (isPlaying) {
      stopMelody();
      setIsPlaying(false);
    } else {
      startMelody();
      setIsPlaying(true);
    }
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  useEffect(() => {
    return () => {
      stopMelody();
    };
  }, []);

  return (
    <div className="flex items-center gap-2 bg-amber-100/60 dark:bg-slate-800/80 backdrop-blur-md border border-amber-200/50 dark:border-slate-700/60 rounded-full px-3 py-1.5 text-xs text-amber-900 dark:text-amber-200 transition-all">
      <button
        onClick={togglePlay}
        className="flex items-center gap-1.5 font-medium hover:text-amber-600 dark:hover:text-amber-400 transition-colors focus:outline-none"
        title={isPlaying ? 'সুর বন্ধ করুন' : 'স্মৃতির সুর চালান'}
      >
        <Music className={`w-3.5 h-3.5 ${isPlaying ? 'animate-pulse text-amber-600 dark:text-amber-400' : ''}`} />
        <span>{isPlaying ? 'স্মৃতির সুর চলছে' : 'স্মৃতির আবোহ সুর'}</span>
        {isPlaying ? <Pause className="w-3.5 h-3.5 ml-1" /> : <Play className="w-3.5 h-3.5 ml-1" />}
      </button>

      {isPlaying && (
        <button
          onClick={toggleMute}
          className="p-1 hover:text-amber-600 dark:hover:text-amber-400 focus:outline-none"
          title={isMuted ? 'সাউন্ড চালু করুন' : 'মিউট করুন'}
        >
          {isMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5" />}
        </button>
      )}
    </div>
  );
}

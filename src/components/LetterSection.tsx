import React, { useState } from 'react';
import { MEMORY_ALBUMS, MemoryAlbum } from '../data/memoriesData';
import { BookOpen, Copy, Check, Volume2, VolumeX, Sparkles, Heart, Camera, ExternalLink } from 'lucide-react';

interface LetterSectionProps {
  onSelectAlbum?: (album: MemoryAlbum, photoIndex?: number) => void;
}

// Complete uninterrupted letter text from Parvez to Syed (Rakib)
const COMPLETE_LETTER_PARAGRAPHS = [
  "সাঈদ, যেদিন তুমি বললে তোমার ভিসা হয়ে গেছে, সেদিন জানি তোমার পরিবার, আত্মীয়স্বজন, বন্ধু-বান্ধবসহ সবাই অনেক খুশি হয়েছে। তোমার এই অর্জনে সবার আনন্দিত হওয়াটাই স্বাভাবিক। আমিও জানি, তোমার জন্য এটি জীবনের অনেক বড় একটি অর্জন এবং নতুন সম্ভাবনার দুয়ার। কিন্তু সত্যি বলতে, আমি সেদিন মন থেকে খুশি হতে পারিনি। বরং জানি না কেন, অন্য সবার চেয়ে হয়তো আমিই সবচেয়ে বেশি কষ্ট পেয়েছি। মনে হচ্ছিল, আমার শরীরের খুব গুরুত্বপূর্ণ কোনো একটি অংশ যেন হঠাৎ হারিয়ে যাচ্ছে। কেন এমন অনুভূতি হলো, তা নিজেও ঠিক বুঝতে পারিনি। শুধু এটুকু বুঝেছি, তোমার চলে যাওয়ার খবরটা আমার ভেতরে কোথাও একটা গভীর শূন্যতা তৈরি করেছে।",
  
  "তোমার সঙ্গে আমার পরিচয় তো জন্মের পর থেকেই। কিন্তু ২০১৭ সালের আগ পর্যন্ত আমাদের সম্পর্কের গভীরতা হয়তো কখনো সেভাবে অনুভব করতে পারিনি। ২০১৭ সালে যখন একটু বেশি বেশি বাড়িতে যাওয়া শুরু হলো, তখন তরিকুলের সঙ্গে ব্রিজে যাওয়ার সুবাদে তোমার সঙ্গে নতুন করে সময় কাটানো শুরু হয়। সেই সময় থেকেই তোমার পাশাপাশি মেহেদী, টিপু, ইমরানসহ আরও অনেকের সঙ্গে পরিচয় ও ঘনিষ্ঠতা তৈরি হয়। তবে ধীরে ধীরে তোমার সঙ্গে আমার সম্পর্কটা অন্য একটা জায়গায় পৌঁছাতে শুরু করে। এরপর ২০১৭ সালে তুমি ও তরিকুল যখন কলেজে ভর্তি হওয়ার জন্য ঢাকায় এলে এবং নিউমার্কেটে এলে, তখন তোমাদের সঙ্গে দেখা করার জন্য আমিও চলে গিয়েছিলাম। সেখান থেকে তোমার সঙ্গে তোমার জেঠার বাসায় যাওয়া এবং সেদিনই প্রথম তোমার সঙ্গে রাত কাটানো। সেই রাত থেকেই যেন আমাদের সম্পর্কের নতুন একটা অধ্যায় শুরু হয়।",
  
  "এরপর ঈদে বাড়ি গেলে একসঙ্গে দেখা, আড্ডা, গল্প—সবকিছু মিলিয়ে আমাদের সম্পর্কটা আরও গভীর হতে থাকে। তোমার বাসার সেই ছোট্ট খাটটার কথাও আজ খুব মনে পড়ে, যেখানে একজন মানুষেরই ঠিকমতো থাকা কষ্টকর ছিল, অথচ সেখানেও তুমি আমাকে আপন করে জায়গা করে দিতে। শুধু জায়গা দেওয়াই নয়, কতবার নিজের হাতে আমাকে খাইয়ে দিয়েছ! হয়তো তোমার কাছে ঘটনাগুলো খুব সাধারণ ছিল, কিন্তু আমার কাছে এগুলো কখনোই সাধারণ ছিল না। কারণ মানুষের আপনত্ব সব সময় বড় কোনো উপহার কিংবা বড় কোনো আয়োজনের মধ্যে প্রকাশ পায় না; কখনো ছোট্ট একটা খাটে জায়গা করে দেওয়া কিংবা নিজের খাবার থেকে কাউকে খাইয়ে দেওয়ার মধ্যেও যে কতটা ভালোবাসা লুকিয়ে থাকে, তা তোমার কাছ থেকেই অনুভব করেছি। আজ এত বছর পর সেই ছোট ছোট মুহূর্তগুলোই আমার কাছে অমূল্য স্মৃতি।",
  
  "২০১৮ সালের শুরুর দিকে যখন আমি গিরিধারায় চলে আসি, তখন তোমার সঙ্গে যোগাযোগ করে শনির আখড়ায় সাগর স্যারের কাছে কোচিং শুরু করি। আমার এখনো মনে আছে, সেদিন তুমি যখন স্যারের সঙ্গে পরিচয় করিয়ে দিতে গিয়ে বলেছিলে, “পারভেজ আমার ভাই।” জানি না কেন, কথাটা আমার মনে ভীষণভাবে দাগ কেটেছিল। সেদিন থেকেই হয়তো তোমাকে আমার জীবনের বিশেষ একজন মানুষ হিসেবে ভাবতে শুরু করি। এরপর একসঙ্গে ঘুরতে যাওয়া, বিভিন্ন জায়গায় সময় কাটানো, আমাদের পরিচিত ও শুভাকাঙ্ক্ষীদের সঙ্গে একে অপরের পরিচয় করিয়ে দেওয়া, বিভিন্ন সময় আত্মীয়স্বজনের বাসায় যাওয়া—কত কিছুই না হয়েছে!",
  
  "আমাদের সম্পর্কের সবচেয়ে বিশেষ একটা দিক ছিল, দিনশেষে আমরা দুজন দুজনের কাছে নিজেদের জীবনের এমন সব কথা, পরিবারের কথা, বংশের কথা, দুঃখ-কষ্ট, হতাশা ও না বলা অনুভূতিগুলো শেয়ার করতাম, যেগুলো হয়তো পরিবারের অনেক সদস্যের সঙ্গেও বলা সম্ভব হতো না। একে অপরের কথা শুনতাম, দীর্ঘশ্বাস ফেলতাম, আবার নতুন করে বাঁচার সাহস খুঁজতাম। সেই অভ্যাসটা এখনো রয়ে গেছে। একসঙ্গে কত পরিকল্পনা করেছি, কত স্বপ্ন দেখেছি, কত কিছু করার ইচ্ছা পোষণ করেছি! হয়তো আল্লাহ আমাদের জন্য সেসব পরিকল্পনার বাস্তবায়ন এভাবে রাখেননি। তাই অনেক কিছু চেয়েও একসঙ্গে করা হয়ে ওঠেনি। কিন্তু তাতে আমাদের স্মৃতিগুলোর কোনো কমতি হয়নি।",
  
  "২০১৮ থেকে ২০২৬—এই দীর্ঘ আট বছরে তোমার সঙ্গে আমার এবং আমার সঙ্গে তোমার এত এত স্মৃতি জমা হয়েছে যে, সেগুলো লিখতে শুরু করলে হয়তো শেষ করতে করতে একটা বিশাল উপন্যাস হয়ে যাবে। অবিশ্বাস্য মনে হলেও সত্যি, তোমার সঙ্গে আমার যত স্মৃতি, যত ছবি, যত মুহূর্ত জমা হয়েছে, আমার জীবনে এ পর্যন্ত যাদের সঙ্গে চলাফেরা করেছি, তাদের সবার স্মৃতি একত্র করলেও হয়তো তোমার সঙ্গে কাটানো সময়ের সমান হবে না। যাই হোক, আমাদের এই গল্পের লিখিত অধ্যায় আপাতত এখানেই শেষ করি। কারণ স্মৃতিগুলো বলতে শুরু করলে হয়তো লেখা শেষ হবে, কিন্তু স্মৃতির শেষ হবে না।",
  
  "এবার তোমার নতুন জীবনের অধ্যায় নিয়ে কিছু কথা বলি। আলহামদুলিল্লাহ! তুমি আজ এমন একটি জায়গায় যাওয়ার সুযোগ পেয়েছ, যেখানে পৌঁছানোর স্বপ্ন হয়তো অনেকেই কখনো দেখেছে, কিন্তু বাস্তবে পৌঁছাতে পারেনি। তোমার এই অর্জন শুধু তোমার একার নয়, আমাদের সবার জন্যই আনন্দ ও গর্বের বিষয়। আল্লাহ তোমাকে এমন একটি সুযোগ করে দিয়েছেন, এজন্য রবের দরবারে অন্তরের অন্তস্তল থেকে লাখো শুকরিয়া।",
  
  "আমি জানি, বাইরে থেকে জায়গাগুলো যতটা চকচকে ও আকর্ষণীয় মনে হয়, বাস্তবে সেখানে নিজেকে প্রতিষ্ঠিত করতে তোমাকে কতটা পরিশ্রম, ধৈর্য ও ত্যাগ স্বীকার করতে হবে। তোমার জীবনের সামনে এটি যেমন অনেক বড় একটি সুযোগ, তেমনি অনেক বড় একটি পরীক্ষাও। কারণ জীবনে এগিয়ে যাওয়ার জন্য তোমাকে নিজের আবেগ, আপনজন, পরিচিত পরিবেশ এবং দীর্ঘদিনের অভ্যাসগুলো পেছনে ফেলে যেতে হচ্ছে। এর চেয়ে কঠিন পরীক্ষা আর কী হতে পারে!",
  
  "তুমি এমন এক দূরত্বে যাচ্ছ, যেখানে বিপদে-আপদে চাইলেই পরিচিত কাউকে পাশে পাবে না। মন খারাপ হলে ইচ্ছা করলেই কারও সঙ্গে বসে মন খুলে কথা বলতে পারবে না। কখনো হয়তো খুব একা লাগবে, কখনো চারপাশে অনেক মানুষ থাকা সত্ত্বেও নিজের মানুষগুলোর অভাব অনুভব করবে। আর বাস্তবতার আরেকটি কঠিন দিক হলো, সেই দেশে যাওয়ার পর হয়তো অনেকের কাছে তুমি একজন মানুষ হিসেবে নয়, বরং উপার্জনের মাধ্যম কিংবা প্রয়োজন মেটানোর একটি যন্ত্র হিসেবে বিবেচিত হবে। তোমার অনুভূতি, ক্লান্তি, কষ্ট কিংবা সীমাবদ্ধতার চেয়ে হয়তো তোমার সামর্থ্য ও উপার্জনটাই বেশি গুরুত্ব পাবে। এমন পরিস্থিতিতে ধৈর্য ধরবে, নিজের বিবেক ও আত্মসম্মান বজায় রেখে সবকিছু সামলে নেওয়ার চেষ্টা করবে।",
  
  "তবে তোমার কাছে আমার সবচেয়ে বড় একটি অনুরোধ—কখনো ঈমান থেকে দূরে সরে যেয়ো না, আমল থেকে নিজেকে বিচ্ছিন্ন কোরো না। জীবনে যত বড়ই হও, যত সফলতাই অর্জন করো কিংবা যত অর্থ-সম্পদের মালিকই হও না কেন, মনে রেখো, একদিন মৃত্যু এসে দুনিয়ার সব অর্জন ও ব্যস্ততার ইতি টেনে দেবে। দুনিয়ার জীবন ক্ষণস্থায়ী, আর আখিরাতের জীবনই প্রকৃত ও চিরস্থায়ী। তুমি যে দেশে যাচ্ছ, সেখানে শুধু নিজের ভবিষ্যৎ গড়ার নিয়ত নিয়ে যেয়ো না; বরং এমন নিয়ত রেখো—হে আল্লাহ! আমি যে পরিবেশে যাচ্ছি, সেখানে যেন আমার মাধ্যমে দ্বীনের কিছু খেদমত হয়, আমার আচার-আচরণ ও আমলের মাধ্যমে যেন দ্বীনের সৌন্দর্য প্রকাশ পায়। আমি শুধু রিজিকের সন্ধানে নয়, একজন মুসলিম হিসেবে কিছু দায়িত্ব পালন করতেও যাচ্ছি। তোমাকে দেখে যেন আরও অনেকে অনুপ্রাণিত হয়, দ্বীনের পথে চলার আগ্রহ খুঁজে পায়।",
  
  "আর মনে রেখো, রিজিকের মালিক একমাত্র আল্লাহ। তাই রিজিকের জন্য কখনো ঈমান ও আমলের সঙ্গে আপস কোরো না। আল্লাহ না করুন, কখনো যদি এমন পরিস্থিতি তৈরি হয়, যেখানে দ্বীন পালন করতে কষ্ট হচ্ছে, ঈমান ধরে রাখা কঠিন হয়ে যাচ্ছে, তাহলে প্রয়োজনে সবকিছু ছেড়ে ফিরে এসো। একটি চাকরি, অর্থ কিংবা সুযোগ হারালে আবার ফিরে পাওয়া সম্ভব, কিন্তু ঈমান হারিয়ে ফেললে তার ক্ষতি কোনো দুনিয়াবি অর্জন দিয়ে পূরণ করা সম্ভব নয়। আর রিজিক নিয়ে কখনো চিন্তা কোরো না। প্রয়োজনে আমার সঙ্গে থেকো, ডাল-ভাত খেয়ে হলেও দুজন ভাগ করে খাব। পারভেজের বাসার দরজা তোমার জন্য সব সময়, সব পরিস্থিতিতে খোলা থাকবে, ইন শা আল্লাহ। কখনো ফিরে আসার প্রয়োজন হলে নিজেকে বোঝা মনে কোরো না, সংকোচ কোরো না। তোমার জন্য এখানে সব সময় একটা জায়গা থাকবে।",
  
  "সবশেষে আবারও আমার নিজের অনুভূতির কথায় ফিরে আসি। তুমি যেদিন বললে তোমার ভিসা হয়ে গেছে, সেদিন সবাই খুশি হলেও আমি কেন জানি মন থেকে খুশি হতে পারিনি। হয়তো কারণটা খুব সহজ—আমি তোমাকে শুধু একজন বন্ধু হিসেবে দেখি না; তোমাকে আমার জীবনের একটা অবিচ্ছেদ্য অংশ মনে করি। তোমার সঙ্গে কথা বলা, দেখা করা, হঠাৎ কোনো পরিকল্পনা করা, একসঙ্গে বসে হাসাহাসি করা কিংবা কোনো কিছু নিয়ে ঘণ্টার পর ঘণ্টা গল্প করা—এসব আমার জীবনের স্বাভাবিক অভ্যাস হয়ে গেছে। হঠাৎ মনে হচ্ছে, এই স্বাভাবিক মুহূর্তগুলোই হয়তো আর আগের মতো থাকবে না।",
  
  "যদি আমার সামর্থ্য থাকত, তাহলে নিজের সর্বোচ্চটুকু দিয়ে হলেও তোমাকে আমার পাশে রেখে দেওয়ার চেষ্টা করতাম। শুধু এইটুকুর জন্য যে, ইচ্ছা হলেই তোমার পাশে বসতে পারব, মন খুলে নিজের কথা বলতে পারব, তোমার কথা শুনতে পারব, একসঙ্গে হাসতে পারব। হয়তো এসব ছোট ছোট মুহূর্তের মূল্য আমরা তখন বুঝিনি, কিন্তু দূরত্ব তৈরি হওয়ার আগেই আজ সেগুলোর অভাব অনুভব করছি।",
  
  "তবে একটা কথা তোমাকে বলতে চাই— আমি পারভেজ, সব সময় তোমার পাশে আছি। হয়তো আমাদের মাঝে ভৌগোলিক দূরত্ব তৈরি হবে, হয়তো আগের মতো প্রতিদিন দেখা হবে না, হঠাৎ করে কোথাও যাওয়ার পরিকল্পনা করা হবে না। কিন্তু দূরত্ব কখনো আমাদের সম্পর্কের গভীরতা কমাতে পারবে না, ইন শা আল্লাহ। তুমি আমার জীবনের এমন একটি গুরুত্বপূর্ণ অংশ হয়েই থাকবে, যাকে দূরে গেলেও নিজের থেকে আলাদা করে ভাবতে পারব না।",
  
  "আর একটা কথা মনে রেখো, কখনো যদি এমন সময় আসে, যখন পুরো পৃথিবী তোমার বিপক্ষে দাঁড়ায়, তখনও পারভেজকে তোমার পাশে পাবে, ইন শা আল্লাহ। আমার শরীরে যতটুকু শক্তি, যতটুকু সামর্থ্য কিংবা এক ফোঁটা রক্তও অবশিষ্ট থাকবে, ততক্ষণ তোমার পাশে থাকার চেষ্টা করব। এমনকি কোনো একদিন যদি পুরো পৃথিবী তোমাকে অবিশ্বাস করে, আর তুমি যদি জানো যে তুমি সত্যের পথে আছ, তাহলে অন্তত আমার কাছে এসে নিজের কথাটা বলতে পারবে। আমি তোমার কথা মন দিয়ে শুনব, তোমার পাশে দাঁড়াব। তোমার প্রতি আমার বিশ্বাস এতটাই গভীর যে, তোমার সত্যতার ব্যাপারে আমার মনে সন্দেহ তৈরি করার আগে আমি হাজারবার ভাবব।",
  
  "আমি জানি না, জীবনের শেষ পর্যন্ত আমাদের পথচলা কতটা একসঙ্গে হবে, ভবিষ্যতে কে কোথায় থাকব, কে কতটা ব্যস্ত হয়ে পড়ব। কিন্তু এটুকু জানি, জীবনের একটা দীর্ঘ সময়জুড়ে তুমি আমার পাশে ছিলে, আমিও তোমার পাশে ছিলাম। এই সময়, এই স্মৃতি, এই ভালোবাসা ও ভ্রাতৃত্ব কোনো দূরত্বের কারণে মুছে যাওয়ার নয়।",
  
  "আল্লাহ তোমাকে সুস্থ রাখুন, নিরাপদে রাখুন, সব বিপদ-আপদ থেকে হেফাজত করুন। তোমার রিজিকে বরকত দান করুন, তোমার প্রতিটি ভালো স্বপ্ন পূরণ করুন। দুনিয়ার জীবনে সম্মানজনক সফলতা দান করার পাশাপাশি ঈমানের সঙ্গে জীবন পরিচালনা করার তাওফিক দিন এবং আখিরাতের জীবনকে সুন্দর করে দিন। তুমি অনেক দূরে চলে যাচ্ছ, কিন্তু আমার দোয়া, ভালোবাসা ও ভ্রাতৃত্বের জায়গা থেকে কখনো দূরে যাচ্ছ না।",
  
  "ভালো থেকো ভাই। নিজের যত্ন নিয়ো। আর ভুলে যেয়ো না, পৃথিবীর যেখানেই থাকো না কেন, তোমার জন্য বাংলাদেশে একজন পারভেজ সব সময় অপেক্ষায় থাকবে। আল্লাহ আমাদের এই ভ্রাতৃত্ব দুনিয়া ও আখিরাত—উভয় জীবনের জন্য কবুল করুন। আমিন।"
];

export default function LetterSection({ onSelectAlbum }: LetterSectionProps) {
  const [fontSize, setFontSize] = useState<'normal' | 'large' | 'xlarge'>('normal');
  const [isCopied, setIsCopied] = useState(false);
  const [isReading, setIsReading] = useState(false);

  // Key visual milestone memories mentioned in the letter
  const letterMemories = MEMORY_ALBUMS.filter(a => 
    a.year === 2017 || a.year === 2018 || a.year === 2023 || a.year === 2026
  ).slice(0, 4);

  const copyFullLetter = () => {
    const fullText = COMPLETE_LETTER_PARAGRAPHS.join('\n\n');
    navigator.clipboard.writeText(fullText);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2500);
  };

  // Web Speech API for reading the full Bengali letter
  const handleReadAloud = () => {
    if (isReading) {
      window.speechSynthesis.cancel();
      setIsReading(false);
      return;
    }

    if ('speechSynthesis' in window) {
      const textToRead = COMPLETE_LETTER_PARAGRAPHS.join(' ');
      const utterance = new SpeechSynthesisUtterance(textToRead);
      utterance.lang = 'bn-BD';
      utterance.rate = 0.88;
      
      utterance.onend = () => setIsReading(false);
      utterance.onerror = () => setIsReading(false);

      window.speechSynthesis.speak(utterance);
      setIsReading(true);
    } else {
      alert('আপনার ব্রাউজারে স্পিচ ফিচার সমর্থিত নয়।');
    }
  };

  const fontClass = {
    normal: 'text-base sm:text-lg leading-relaxed sm:leading-loose',
    large: 'text-lg sm:text-xl leading-loose',
    xlarge: 'text-xl sm:text-2xl leading-loose',
  }[fontSize];

  return (
    <section id="letter" className="py-16 sm:py-24 bg-gradient-to-b from-amber-50/70 via-amber-100/30 to-amber-50/80 dark:from-slate-950 dark:via-slate-900/60 dark:to-slate-950 border-b border-amber-200/60 dark:border-slate-800 relative overflow-hidden">
      
      {/* Decorative Warm Lighting */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-amber-400/10 dark:bg-amber-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-100 dark:bg-amber-950/70 text-amber-900 dark:text-amber-300 text-xs font-semibold mb-3 border border-amber-200/80 dark:border-amber-800 shadow-xs">
            <BookOpen className="w-4 h-4 text-amber-700 dark:text-amber-400" />
            <span>পারভেজের হৃদয় নিংড়ানো খোলা চিঠি</span>
          </div>
          <h2 className="serif-font text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-slate-100 tracking-tight leading-tight">
            চিরন্তন বন্ধুত্বের এক অমর উপাখ্যান
          </h2>
          <p className="mt-3 text-base text-slate-600 dark:text-slate-400 font-normal">
            সাঈদ (রাকিব)-এর প্রবাসে পাড়ি জমানোর প্রাক্কালে পারভেজের লেখা সম্পূর্ণ খোলা চিঠি—একসাথে, কোনো খণ্ড বা বিভাজন ছাড়াই।
          </p>
        </div>

        {/* Floating Action Bar (Read Aloud, Font Resize, Copy) */}
        <div className="bg-white/90 dark:bg-slate-900/90 backdrop-blur-md rounded-2xl p-3 sm:p-4 border border-amber-200/80 dark:border-slate-800 shadow-md mb-8 flex flex-wrap items-center justify-between gap-4 sticky top-20 z-30">
          
          {/* Read Aloud Button */}
          <button
            onClick={handleReadAloud}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer shadow-xs ${
              isReading
                ? 'bg-gradient-to-r from-amber-700 to-amber-800 text-white shadow-md'
                : 'bg-amber-100 hover:bg-amber-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-amber-900 dark:text-amber-200 border border-amber-300/70 dark:border-slate-700'
            }`}
            title="সম্পূর্ণ চিঠি পড়ে শোনান"
          >
            {isReading ? (
              <>
                <VolumeX className="w-4 h-4 text-amber-200" />
                <span>পড়া থামান</span>
                <span className="flex items-center gap-0.5 ml-1.5">
                  <span className="w-1 h-3.5 bg-amber-300 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                  <span className="w-1 h-4.5 bg-amber-300 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                  <span className="w-1 h-2.5 bg-amber-300 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                </span>
              </>
            ) : (
              <>
                <Volume2 className="w-4 h-4 text-amber-700 dark:text-amber-400" />
                <span>সম্পূর্ণ চিঠিটি শুনুন</span>
              </>
            )}
          </button>

          {/* Right Controls: Font Sizer & Copy Button */}
          <div className="flex items-center gap-3">
            {/* Font Sizer */}
            <div className="flex items-center gap-1 bg-amber-50 dark:bg-slate-800 p-1 rounded-xl border border-amber-200/60 dark:border-slate-700 text-xs">
              <span className="px-2 text-slate-500 font-medium hidden sm:inline">হরফ:</span>
              <button
                onClick={() => setFontSize('normal')}
                className={`px-2.5 py-1 rounded-lg transition-colors cursor-pointer ${
                  fontSize === 'normal' ? 'bg-amber-800 text-white font-bold' : 'hover:bg-amber-100 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300'
                }`}
              >
                স্বাভাবিক
              </button>
              <button
                onClick={() => setFontSize('large')}
                className={`px-2.5 py-1 rounded-lg transition-colors cursor-pointer ${
                  fontSize === 'large' ? 'bg-amber-800 text-white font-bold' : 'hover:bg-amber-100 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300'
                }`}
              >
                বড়
              </button>
              <button
                onClick={() => setFontSize('xlarge')}
                className={`px-2.5 py-1 rounded-lg transition-colors cursor-pointer ${
                  fontSize === 'xlarge' ? 'bg-amber-800 text-white font-bold' : 'hover:bg-amber-100 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300'
                }`}
              >
                আরও বড়
              </button>
            </div>

            {/* Copy Full Letter */}
            <button
              onClick={copyFullLetter}
              className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold bg-white dark:bg-slate-800 hover:bg-amber-50 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 border border-amber-200 dark:border-slate-700 transition-all cursor-pointer shadow-xs"
              title="সম্পূর্ণ চিঠি কপি করুন"
            >
              {isCopied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                  <span className="text-emerald-600">কপি হয়েছে</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-amber-700 dark:text-amber-400" />
                  <span>কপি করুন</span>
                </>
              )}
            </button>
          </div>

        </div>

        {/* The Complete Letter Manuscript Parchment Card */}
        <article className="bg-[#fffdf9] dark:bg-slate-900 rounded-3xl p-6 sm:p-12 lg:p-16 border-2 border-amber-200/90 dark:border-slate-800 shadow-2xl relative overflow-hidden">
          
          {/* Subtle Corner Calligraphic Accents */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-amber-400/10 via-transparent to-transparent pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-amber-400/10 via-transparent to-transparent pointer-events-none" />

          {/* Letter Headpiece */}
          <div className="text-center pb-8 mb-8 border-b-2 border-amber-200/60 dark:border-slate-800">
            <span className="text-xs uppercase tracking-widest font-mono text-amber-800 dark:text-amber-400 font-bold block mb-1">
              • সাঈদ (রাকিব)-এর উদ্দেশ্যে লেখা খোলা চিঠি •
            </span>
            <h1 className="serif-font text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 dark:text-amber-100">
              যেখানে দূরত্ব বাড়ে, সেখানে দোয়ার বন্ধন আরও শক্ত হয়
            </h1>
            <div className="mt-2 text-xs font-semibold text-slate-500 dark:text-slate-400 flex items-center justify-center gap-2">
              <span>লেখক: পারভেজ</span>
              <span>•</span>
              <span>প্রাপক: সাঈদ (রাকিব)</span>
              <span>•</span>
              <span className="font-mono text-amber-700 dark:text-amber-400">২০২৬</span>
            </div>
          </div>

          {/* Continuous Flowing Letter Text */}
          <div className={`space-y-6 text-slate-800 dark:text-slate-200 font-normal ${fontClass}`}>
            
            {/* Paragraph 1 */}
            <p className="indent-6 sm:indent-10 first-letter:text-4xl sm:first-letter:text-5xl first-letter:font-serif first-letter:font-bold first-letter:text-amber-800 dark:first-letter:text-amber-400 first-letter:mr-2 first-letter:float-left">
              {COMPLETE_LETTER_PARAGRAPHS[0]}
            </p>

            {/* Paragraph 2 */}
            <p className="indent-6 sm:indent-10">
              {COMPLETE_LETTER_PARAGRAPHS[1]}
            </p>

            {/* Paragraph 3 */}
            <p className="indent-6 sm:indent-10">
              {COMPLETE_LETTER_PARAGRAPHS[2]}
            </p>

            {/* Key Quote 1: The Small Bed & Food by Hand */}
            <div className="my-8 p-5 sm:p-6 rounded-2xl bg-amber-100/60 dark:bg-slate-950 border-l-4 border-amber-600 dark:border-amber-500 shadow-xs relative">
              <p className="serif-font italic text-base sm:text-lg text-amber-950 dark:text-amber-200 leading-relaxed">
                “তোমার বাসার সেই ছোট্ট খাটটার কথা আজ খুব মনে পড়ে, যেখানে একজন মানুষেরই ঠিকমতো থাকা কষ্টকর ছিল, অথচ সেখানেও তুমি আমাকে আপন করে জায়গা করে দিতে। শুধু জায়গা দেওয়াই নয়, কতবার নিজের হাতে আমাকে খাইয়ে দিয়েছ!”
              </p>
              <span className="block mt-2 text-xs font-bold text-amber-800 dark:text-amber-400">
                — ২০১৭ সালের নিউমার্কেটের স্মৃতিকথা
              </span>
            </div>

            {/* Paragraph 4: 2018 Sagar Sir */}
            <p className="indent-6 sm:indent-10">
              {COMPLETE_LETTER_PARAGRAPHS[3]}
            </p>

            {/* Paragraph 5: Shared Feelings & Secrets */}
            <p className="indent-6 sm:indent-10">
              {COMPLETE_LETTER_PARAGRAPHS[4]}
            </p>

            {/* Paragraph 6: 8-Year Memories & Novel */}
            <p className="indent-6 sm:indent-10">
              {COMPLETE_LETTER_PARAGRAPHS[5]}
            </p>

            {/* Key Quote 2: Memories like a Novel */}
            <div className="my-8 p-5 sm:p-6 rounded-2xl bg-amber-100/60 dark:bg-slate-950 border-l-4 border-amber-600 dark:border-amber-500 shadow-xs relative">
              <p className="serif-font italic text-base sm:text-lg text-amber-950 dark:text-amber-200 leading-relaxed">
                “অবিশ্বাস্য মনে হলেও সত্যি, তোমার সঙ্গে আমার যত স্মৃতি, যত ছবি, যত মুহূর্ত জমা হয়েছে, আমার জীবনে এ পর্যন্ত যাদের সঙ্গে চলাফেরা করেছি, তাদের সবার স্মৃতি একত্র করলেও হয়তো তোমার সঙ্গে কাটানো সময়ের সমান হবে না।”
              </p>
              <span className="block mt-2 text-xs font-bold text-amber-800 dark:text-amber-400">
                — ২০১৮ থেকে ২০২৬—আট বছরের চিরন্তন ভ্রাতৃত্ব
              </span>
            </div>

            {/* Paragraph 7: New Chapter & Gratitude to Allah */}
            <p className="indent-6 sm:indent-10">
              {COMPLETE_LETTER_PARAGRAPHS[6]}
            </p>

            {/* Paragraph 8: Hard work & Sacrifice */}
            <p className="indent-6 sm:indent-10">
              {COMPLETE_LETTER_PARAGRAPHS[7]}
            </p>

            {/* Paragraph 9: Loneliness & Self-respect */}
            <p className="indent-6 sm:indent-10">
              {COMPLETE_LETTER_PARAGRAPHS[8]}
            </p>

            {/* Paragraph 10: Faith, Akhirah & Purpose */}
            <p className="indent-6 sm:indent-10">
              {COMPLETE_LETTER_PARAGRAPHS[9]}
            </p>

            {/* Paragraph 11: Parvez's Open Door & Dal-Bhat */}
            <p className="indent-6 sm:indent-10">
              {COMPLETE_LETTER_PARAGRAPHS[10]}
            </p>

            {/* Key Quote 3: Parvez's Open Door */}
            <div className="my-8 p-5 sm:p-6 rounded-2xl bg-gradient-to-r from-amber-100/80 to-orange-100/60 dark:from-slate-950 dark:to-amber-950/40 border-l-4 border-amber-600 dark:border-amber-500 shadow-xs relative">
              <p className="serif-font italic text-base sm:text-lg text-amber-950 dark:text-amber-200 leading-relaxed">
                “রিজিক নিয়ে কখনো চিন্তা কোরো না। প্রয়োজনে আমার সঙ্গে থেকো, ডাল-ভাত খেয়ে হলেও দুজন ভাগ করে খাব। পারভেজের বাসার দরজা তোমার জন্য সব সময়, সব পরিস্থিতিতে খোলা থাকবে, ইন শা আল্লাহ। কখনো ফিরে আসার প্রয়োজন হলে নিজেকে বোঝা মনে কোরো না।”
              </p>
              <span className="block mt-2 text-xs font-bold text-amber-800 dark:text-amber-400">
                — পারভেজের আজীবন অঙ্গীকার
              </span>
            </div>

            {/* Paragraph 12: Inner pain of separation */}
            <p className="indent-6 sm:indent-10">
              {COMPLETE_LETTER_PARAGRAPHS[11]}
            </p>

            {/* Paragraph 13: Wishes to keep him close */}
            <p className="indent-6 sm:indent-10">
              {COMPLETE_LETTER_PARAGRAPHS[12]}
            </p>

            {/* Paragraph 14: Distance cannot reduce depth */}
            <p className="indent-6 sm:indent-10">
              {COMPLETE_LETTER_PARAGRAPHS[13]}
            </p>

            {/* Paragraph 15: Standing with him if world turns against */}
            <p className="indent-6 sm:indent-10">
              {COMPLETE_LETTER_PARAGRAPHS[14]}
            </p>

            {/* Paragraph 16: Enduring bond */}
            <p className="indent-6 sm:indent-10">
              {COMPLETE_LETTER_PARAGRAPHS[15]}
            </p>

            {/* Paragraph 17: Prayers for health, provision & Akhirah */}
            <p className="indent-6 sm:indent-10">
              {COMPLETE_LETTER_PARAGRAPHS[16]}
            </p>

            {/* Paragraph 18: Final farewell & eternal waiting */}
            <p className="indent-6 sm:indent-10 font-medium text-amber-950 dark:text-amber-100">
              {COMPLETE_LETTER_PARAGRAPHS[17]}
            </p>

          </div>

          {/* Letter Closing & Signature Box */}
          <div className="mt-12 pt-8 border-t-2 border-amber-200/80 dark:border-slate-800 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6">
            <div>
              <div className="text-xs uppercase tracking-wider text-slate-500 font-semibold mb-1">
                চিরন্তন ভ্রাতৃত্বের স্বাক্ষর
              </div>
              <div className="serif-font text-2xl sm:text-3xl font-bold text-amber-900 dark:text-amber-300">
                ইতি, তোমার ভাই — পারভেজ
              </div>
              <div className="text-xs text-slate-600 dark:text-slate-400 mt-1">
                স্থান: ঢাকা ও জয়দেবপুর · সময়: ২০২৬
              </div>
            </div>

            <div className="text-left sm:text-right">
              <div className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-amber-100 dark:bg-slate-800 text-amber-900 dark:text-amber-300 text-xs font-semibold border border-amber-200 dark:border-slate-700">
                <Heart className="w-4 h-4 text-rose-600 fill-rose-600" />
                <span>আমিন ছুম্মা আমিন</span>
              </div>
            </div>
          </div>

          {/* Related Real Photos Row from the Letter */}
          <div className="mt-12 pt-8 border-t border-amber-100 dark:border-slate-800">
            <div className="flex items-center justify-between mb-4">
              <div className="text-xs font-bold text-amber-900 dark:text-amber-300 flex items-center gap-1.5">
                <Camera className="w-4 h-4 text-amber-600" />
                <span>চিঠিতে উল্লেখিত স্মরণীয় মুহূর্তগুলোর আসল ড্রাইভ ছবি:</span>
              </div>
              <a
                href="#gallery"
                className="text-xs font-semibold text-amber-800 dark:text-amber-400 hover:underline flex items-center gap-1"
              >
                <span>সকল ৮৭টি অ্যালবাম</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {letterMemories.map((album) => {
                const photo = album.photos[0];
                if (!photo) return null;
                return (
                  <button
                    key={album.id}
                    onClick={() => onSelectAlbum && onSelectAlbum(album, 0)}
                    className="group rounded-xl overflow-hidden border border-amber-200 dark:border-slate-800 bg-amber-50/50 dark:bg-slate-950 p-1.5 hover:shadow-md transition-all text-left cursor-pointer"
                  >
                    <div className="aspect-4/3 rounded-lg overflow-hidden bg-slate-900 mb-1.5">
                      <img
                        src={photo.thumbnailUrl}
                        alt={album.title}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="serif-font text-[11px] font-bold text-slate-900 dark:text-amber-100 line-clamp-1">
                      {album.title}
                    </div>
                    <div className="text-[10px] text-amber-700 dark:text-amber-400 font-mono">
                      {album.year} · {album.photos.length}টি ছবি
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

        </article>

      </div>
    </section>
  );
}

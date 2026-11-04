import React, { useState } from 'react';
import { QUIZ_QUESTIONS } from '../data/memoriesData';
import { HelpCircle, CheckCircle2, XCircle, RotateCcw, Trophy, Sparkles, BookOpen } from 'lucide-react';

export default function NostalgiaQuiz() {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [score, setScore] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);

  const currentQ = QUIZ_QUESTIONS[currentIdx];

  const handleOptionSelect = (idx: number) => {
    if (isSubmitted) return;
    setSelectedOption(idx);
  };

  const handleCheckAnswer = () => {
    if (selectedOption === null) return;
    setIsSubmitted(true);
    if (selectedOption === currentQ.correctIndex) {
      setScore(score + 1);
    }
  };

  const handleNextQuestion = () => {
    if (currentIdx < QUIZ_QUESTIONS.length - 1) {
      setCurrentIdx(currentIdx + 1);
      setSelectedOption(null);
      setIsSubmitted(false);
    } else {
      setQuizFinished(true);
    }
  };

  const handleResetQuiz = () => {
    setCurrentIdx(0);
    setSelectedOption(null);
    setIsSubmitted(false);
    setScore(0);
    setQuizFinished(false);
  };

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-amber-100/60 to-amber-50/50 dark:from-slate-900 dark:to-slate-950 border-b border-amber-200/50 dark:border-slate-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-200/80 dark:bg-amber-900/40 text-amber-900 dark:text-amber-300 text-xs font-semibold mb-3">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>স্মৃতির কুইজ ও মেলবন্ধন</span>
          </div>
          <h2 className="serif-font text-3xl sm:text-4xl font-bold text-slate-900 dark:text-slate-100 tracking-tight">
            পারভেজ ও সাঈদের ৮ বছরের ঘটনা কতটা জানেন?
          </h2>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
            নিউমার্কেটের খাট থেকে শুরু করে বান্দরবানের পাহাড়—আমাদের বন্ধনের স্মরণীয় গল্পগুলো উত্তর দিয়ে পরীক্ষা করে দেখুন।
          </p>
        </div>

        {/* Quiz Container Card */}
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-10 border border-amber-200/80 dark:border-slate-800 shadow-xl relative">
          
          {!quizFinished ? (
            <div>
              {/* Top Progress */}
              <div className="flex items-center justify-between pb-4 border-b border-amber-100 dark:border-slate-800 mb-6 text-xs text-slate-500">
                <span className="font-semibold text-amber-800 dark:text-amber-400">
                  প্রশ্ন {currentIdx + 1} of {QUIZ_QUESTIONS.length}
                </span>
                <span className="font-mono tabular-nums bg-amber-100 dark:bg-slate-800 px-2.5 py-1 rounded-full text-amber-900 dark:text-amber-200 font-bold">
                  স্কোর: {score}
                </span>
              </div>

              {/* Question Title */}
              <h3 className="serif-font text-xl sm:text-2xl font-bold text-slate-900 dark:text-amber-100 mb-6 leading-snug">
                {currentQ.question}
              </h3>

              {/* Options */}
              <div className="space-y-3 mb-6">
                {currentQ.options.map((option, idx) => {
                  let btnStyle = 'bg-amber-50/60 dark:bg-slate-800/60 border-amber-200/70 dark:border-slate-700 text-slate-800 dark:text-slate-200 hover:bg-amber-100/80';
                  
                  if (selectedOption === idx) {
                    btnStyle = 'bg-amber-700 text-white border-amber-700 dark:bg-amber-600';
                  }

                  if (isSubmitted) {
                    if (idx === currentQ.correctIndex) {
                      btnStyle = 'bg-emerald-600 text-white border-emerald-600 font-semibold';
                    } else if (selectedOption === idx) {
                      btnStyle = 'bg-rose-600 text-white border-rose-600';
                    }
                  }

                  return (
                    <button
                      key={idx}
                      disabled={isSubmitted}
                      onClick={() => handleOptionSelect(idx)}
                      className={`w-full text-left p-4 rounded-2xl border transition-all flex items-center justify-between text-sm sm:text-base ${btnStyle}`}
                    >
                      <span>{option}</span>
                      {isSubmitted && idx === currentQ.correctIndex && (
                        <CheckCircle2 className="w-5 h-5 text-white shrink-0" />
                      )}
                      {isSubmitted && selectedOption === idx && idx !== currentQ.correctIndex && (
                        <XCircle className="w-5 h-5 text-white shrink-0" />
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Detailed Explanation upon submission */}
              {isSubmitted && (
                <div className="p-4 rounded-2xl bg-amber-100/70 dark:bg-slate-800/80 border border-amber-200 dark:border-slate-700 mb-6 text-xs sm:text-sm text-slate-800 dark:text-amber-200 leading-relaxed">
                  <div className="font-bold mb-1 text-amber-900 dark:text-amber-300 flex items-center gap-1.5">
                    <Sparkles className="w-4 h-4 text-amber-600" />
                    <span>প্রকৃত ঘটনা ও স্মৃতিকথা:</span>
                  </div>
                  {currentQ.explanation}
                </div>
              )}

              {/* Action Buttons */}
              <div className="flex justify-end">
                {!isSubmitted ? (
                  <button
                    disabled={selectedOption === null}
                    onClick={handleCheckAnswer}
                    className={`px-6 py-2.5 rounded-xl text-xs font-semibold text-white transition-all ${
                      selectedOption !== null
                        ? 'bg-amber-800 hover:bg-amber-900 dark:bg-amber-600'
                        : 'bg-slate-300 dark:bg-slate-800 cursor-not-allowed text-slate-500'
                    }`}
                  >
                    উত্তর যাচায় করুন
                  </button>
                ) : (
                  <button
                    onClick={handleNextQuestion}
                    className="px-6 py-2.5 rounded-xl text-xs font-semibold text-white bg-amber-700 hover:bg-amber-800 dark:bg-amber-600 transition-all flex items-center gap-1.5"
                  >
                    <span>{currentIdx < QUIZ_QUESTIONS.length - 1 ? 'পরবর্তী প্রশ্ন' : 'ফলাফল দেখুন'}</span>
                  </button>
                )}
              </div>
            </div>
          ) : (
            /* Quiz Completed Result */
            <div className="text-center py-6">
              <div className="w-16 h-16 rounded-full bg-amber-100 dark:bg-amber-900/60 text-amber-800 dark:text-amber-300 font-bold flex items-center justify-center mx-auto mb-4">
                <Trophy className="w-8 h-8 text-amber-600 dark:text-amber-400" />
              </div>

              <h3 className="serif-font text-2xl font-bold text-slate-900 dark:text-amber-100">
                অভিনন্দন! আপনি কুইজটি সম্পন্ন করেছেন
              </h3>

              <p className="text-base text-slate-600 dark:text-slate-300 mt-2 font-mono tabular-nums">
                আপনার সঠিক উত্তর: <span className="font-bold text-amber-700 dark:text-amber-400 text-lg">{score}</span> / {QUIZ_QUESTIONS.length}
              </p>

              <div className="mt-4 p-4 rounded-2xl bg-amber-50 dark:bg-slate-800 max-w-md mx-auto text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                {score === QUIZ_QUESTIONS.length ? (
                  <span>অসাধারণ! আপনি পারভেজ ও সাঈদের বন্ধুত্বের প্রতিটি গল্প হৃদয়ে ধারণ করেন!</span>
                ) : score >= 3 ? (
                  <span>চমৎকার! আপনি সাঈদ ও পারভেজের মূল ঘটনাগুলো দারুণভাবে মনে রেখেছেন।</span>
                ) : (
                  <span>ধন্যবাদ কুইজটিতে অংশ নেওয়ার জন্য! অ্যালবামগুলো পড়ে স্মৃতির গভীর গল্পগুলো আবার মনে করতে পারেন।</span>
                )}
              </div>

              <div className="mt-8 flex justify-center gap-4">
                <button
                  onClick={handleResetQuiz}
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl text-xs font-semibold text-slate-800 dark:text-slate-200 bg-amber-100 hover:bg-amber-200 dark:bg-slate-800 dark:hover:bg-slate-700 transition-all"
                >
                  <RotateCcw className="w-4 h-4" />
                  <span>পুনরায় খেলুন</span>
                </button>
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
}

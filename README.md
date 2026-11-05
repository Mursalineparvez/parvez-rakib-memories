# Memory of Parvez and Rakib (স্মৃতিময় ৮ বছরের গল্প)

একটি আবেগঘন ও সুন্দর স্মৃতিকথাভিত্তিক ওয়েবসাইট যা পারভেজ ও রকিবের (সৈয়দ) ২০১৭ থেকে ২০২৬ পর্যন্ত ৮ বছরের বন্ধুত্বের পথচলা, ছবি ও স্মৃতির অ্যালবাম সংরক্ষণ করে।

---

## 🚀 Vercel-এ হোস্ট (ডিপ্লয়) করার সহজ নিয়মাবলী

এই প্রজেক্টটি Vercel-এ হোস্ট করার জন্য সম্পূর্ণ প্রস্তুত করা হয়েছে (`vercel.json` সহ)।

### পদ্ধতি ১: GitHub এর মাধ্যমে Vercel-এ হোস্ট করা (সবচেয়ে সহজ ও সেরা উপায়)

১. **GitHub-এ প্রজেক্ট আপলোড করুন:**
   - আপনার কম্পিউটারে প্রজেক্ট ফোল্ডারটি ডাউনলোড করুন।
   - GitHub (github.com)-এ নতুন একটি repository তৈরি করুন।
   - সব ফাইল সেখানে push করুন।

২. **Vercel-এ লগইন ও ইম্পোর্ট:**
   - [Vercel.com](https://vercel.com)-এ যান এবং আপনার GitHub একাউন্ট দিয়ে Login করুন।
   - **"Add New Project"** অথবা **"Import Project"** বাটনে ক্লিক করুন।
   - আপনার GitHub Repository-টি select করুন।

৩. **Build Settings যাচাই করুন:**
   - **Framework Preset:** Vite (স্বয়ংক্রিয়ভাবে সিলেক্ট হবে)
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
   - **Install Command:** `npm install --legacy-peer-deps` (এটি `vercel.json` ও `.npmrc` দিয়ে স্বয়ংক্রিয়ভাবে কনফিগার করা আছে)

৪. **Deploy-এ ক্লিক করুন:**
   - **"Deploy"** (বা Redepoy) বাটনে চাপ দিন। কোনো peer dependency এরর ছাড়াই সফলভাবে লাইভ হয়ে যাবে!

---

### পদ্ধতি ২: Vercel CLI (কম্যান্ড লাইন) দিয়ে হোস্ট করা

১. আপনার কম্পিউটারের টার্মিনালে বা CMD-তে Vercel CLI ইনস্টল করুন:
   ```bash
   npm install -g vercel
   ```

২. প্রজেক্টের রুট ফোল্ডারে টার্মিনাল খুলে টাইপ করুন:
   ```bash
   vercel
   ```

৩. টার্মিনালের নির্দেশনা অনুসরণ করুন (Set up and deploy? **y**, Link to existing project? **n**, ইত্যাদি)।
   
৪. প্রোডাকশন লাইভ করতে টাইপ করুন:
   ```bash
   vercel --prod
   ```

---

## 🛠️ লোকালি টেস্ট করা (Local Development)

```bash
# ডিপেন্ডেন্সি ইনস্টল করুন
npm install

# ডেভেলপমেন্ট সার্ভার চালু করুন
npm run dev

# বিড ও প্রিভিউ করুন
npm run build
npm run preview
```

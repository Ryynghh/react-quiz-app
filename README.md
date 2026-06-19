# 🎯 React Quiz App

Sebuah aplikasi kuis interaktif berbasis *Single Page Application* (SPA) yang dibangun menggunakan React dan Vite. Aplikasi ini mengambil soal secara dinamis dari Open Trivia Database (OpenTDB) dan dirancang dengan antarmuka modern menggunakan Tailwind CSS.

## ✨ Fitur Utama
- **Sistem Login Sederhana:** Memasukkan nama pengguna sebelum memulai kuis.
- **Soal Dinamis:** Integrasi API langsung dengan [OpenTDB](https://opentdb.com/).
- **Timer Hitung Mundur:** Batas waktu pengerjaan (5 menit) yang akan menutup kuis secara otomatis ketika waktu habis.
- **Auto-Save Progress:** Menggunakan `localStorage` browser sehingga jika tab tertutup secara tidak sengaja, kuis dapat dilanjutkan dari soal dan sisa waktu terakhir.
- **Statistik Hasil Akhir:** Menampilkan rincian soal yang berhasil dijawab, jumlah benar, salah, dan sisa waktu pengerjaan.

## 🛠️ Teknologi yang Digunakan
- **Frontend Framework:** React (dengan Vite)
- **Styling:** Tailwind CSS v4
- **API:** Fetch API (JavaScript bawaan)
- **State Management:** React Hooks (`useState`, `useEffect`)

---

## 🚀 Cara Menjalankan Project di Localhost

Ikuti langkah-langkah di bawah ini untuk melakukan *clone* dan menjalankan aplikasi ini di komputer lokal:

### 1. Prasyarat
Pastikan komputer kamu sudah terinstal **Node.js** (direkomendasikan versi LTS). Kamu bisa mengeceknya dengan menjalankan perintah ini di terminal:
```bash
node -v

### 2. Clone Repository
git clone [https://github.com/Ryynghh/react-quiz-app](https://github.com/Ryynghh/react-quiz-app)

### 3. Masuk ke Direktori Project
cd react-quiz-app

### 4. Install Dependencies
npm install

### 5. Jalankan Local Server
npm run dev

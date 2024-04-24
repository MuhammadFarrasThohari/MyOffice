# MyOffice

Selamat datang di repositori project UAS mata kuliah pemrograman bergerak (mobile programing).

Aplikasi ini adalah aplikasi untuk memberikan performance review kepada karyawan dan untuk melihat performance review dari penilai. Untuk saat ini aplikasi MyOffice hanya dapat berjalan di Android.

## Desain Figma

![preview_android](/README-asset/Prototype-MyOffice.png)

## Cara menggunakan kode

Pertama buat akun supabase dan buatlah project di dalam supabase (supabase.com)

Cari Supabase Anon key dan Supabase URL project

Selanjutnya buka file lib/supabase.js

Kemudian ubah nilai SUPABASE_URL dan SUPABASE_ANON_KEY dengan url dan key yang telah dibuat
![alt text](/README-asset/image.png)

Setelah itu install package/dependancies lewat terminal

> npm install

Terakhir jalankan project

> npx expo start

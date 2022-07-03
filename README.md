
# Sistem Informasi Berbasis Point of Sale

Repository ini berisi sebuah sistem informasi berbasis POS dengan studi kasus toko Rocket Jaket yang bertempatkan di Yogyakarta. Aplikasi ini juga dibuat sebagai skripsi untuk mendapatkan gelar S1 Informatika di Universitas Amikom Yogyakarta. Beberapa dependency yang digunakan:

## Front End

 1. React Native
 2. Native Base
 3. Apollo Client
 4. Zustand

## Backend

 1. Hasura
 2. Nhost (auth, storage, hosting)

## Instalasi Development Environment Front End
**Prerequisites**
Ikuti tutorial introduction untuk menggunakan react native https://reactnative.dev/docs/getting-started

 1. Clone repository ini 
 2. Pindah ke folder client dan jalankan `yarn`
 3. Buka 1 terminal dan jalankan perintah `yarn start`
 4. Buka 1 terminal lagi dan jalankan `yarn android` akan membuka emulator dan compile aplikasi ke dalamnya

## Instalasi Development Environment Back End
**Prerequisites**
Install aplikasi nhost cli dan dependency-nya
https://docs.nhost.io/platform/cli

 1. Clone repository
 2. Jalankan perintah `git submodule update --init --recursive`
 3. Pastikan posisi directory ada pada root directory
 4. Jalankan perintah `yarn`
 5. Jalankan perintah `nhost dev` untuk menjalankan backend nhost
 6. Pindah ke directory whatsapp-express-api
 7. Jalankan perintah `yarn`
 8. Jalankan perintah `yarn start` untuk menjalankan server whatsapp web api

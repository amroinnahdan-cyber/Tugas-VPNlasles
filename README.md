# LaslesVPN React

Implementasi landing page LaslesVPN sudah dikonversi dari HTML/CSS statis menjadi aplikasi ReactJS berbasis Vite.

## Struktur

- `src/App.jsx` menggabungkan semua section website.
- `src/components/` berisi komponen per section:
  - `Navbar.jsx`
  - `HeroSection.jsx`
  - `SecuritySection.jsx`
  - `SavingsSection.jsx`
  - `InvestmentSection.jsx`
  - `SaverSection.jsx`
  - `CustomersSection.jsx`
  - `PartnersSection.jsx`
  - `Footer.jsx`
- `src/assets/` berisi seluruh gambar dan `src/assets/index.js` menjadi pusat import/export asset.
- `src/styles/style.css` berisi styling responsive website.

## Menjalankan Lokal

```bash
npm install
npm run dev
```

## Build Production

```bash
npm run build
```

## Deploy ke Vercel

Project sudah disiapkan untuk Vercel melalui `vercel.json`.

```bash
npm install
npm run build
npx vercel --prod
```

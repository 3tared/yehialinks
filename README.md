# Yehia Links 🔗

A simple, clean link-in-bio page built with Next.js and React.

## 🚀 Quick Start

1. **Install dependencies:**

```bash
npm install
```

2. **Run the app:**

```bash
npm run dev
```

3. **Open:** [http://localhost:3000](http://localhost:3000)

## ⚙️ Setup

Edit your links in `src/constants/index.ts`:

```typescript
export const OWNER_DATA = {
  name: "Your Name",
  title: "Your Title",
  bio: "Your bio",
  avatar: "your-image-url",

  links: [
    {
      id: "1",
      title: "WhatsApp",
      url: "https://wa.me/yourphone",
      icon: FaWhatsapp,
      color: "#25D366",
    },
  ],

  socialLinks: [
    {
      platform: "instagram",
      url: "https://instagram.com/yourusername",
      icon: FaInstagram,
    },
  ],
};
```

## 📦 Build

```bash
npm run build
npm start
```

## 🛠️ Tech Stack

- Next.js 15
- React 19
- Framer Motion
- Tailwind CSS
- TypeScript

## 👤 Author

Mohamed Tarek - [@3tared](https://github.com/3tared)

---

Built with Next.js and Framer Motion

# 🎬 Strmly Video Feed Web App

A fully responsive vertical video feed app inspired by Instagram Reels and Facebook Shorts. Built using React.js, Tailwind CSS, and Context API. Optimized for smooth performance, mobile-first design, and modern UX behavior.
<!-- 
---

## 📸 Demo

> 📱 Mobile-first | 🖥 Fully responsive | 🎥 Tap to play/pause | 🔇 Tap to mute  
*(Add deployment link or screenshots if needed)* -->

---

## 🧰 Tech Stack

- **Frontend:** React.js (with Vite)
- **Styling:** Tailwind CSS
- **Global State:** React Context API
- **Icons:** Lucide React
- **Optimizations:** React.memo(), useCallback(), IntersectionObserver()
- **Mock API:** JSON files & local state

---

## 🚀 Features

### Reel Feed
- One video per full-screen view (snap scrolling)
- Auto-play when in view, pause when out
- Functional video seekbar, with showing the length of the video
- Tap to toggle:
  - Play/Pause (with central overlay icon)
  - Mute/Unmute (top-left icon)
- Responsive to mobile, tablet, and desktop

### Overlay UI
- Hashtag + Creator Name + Follow button
- Reel title + 3-line clamped description
- Right side:
  - Like (with optimistic UI)
  - Comment count
  - Share
  - Tip/Earnings
  - Three-dot menu

### Navigation
- Fixed bottom navbar (Home, Shorts, Add, Search, Profile)

### Login Flow
- Dummy login screen using localStorage
- Blocks access to feed unless logged in
- Logout resets app state

---

## ⚙️ Performance & UX

- ✅ `React.memo`, `useCallback` for render optimization
- ✅ `IntersectionObserver` for auto video playback
- ✅ Optimistic UI updates for like button
- ✅ Lazy video loading (only load when in view)
- ✅ Smooth icon transitions and responsive UX

---

## 📁 Folder Structure

```
.
├── eslint.config.js
├── .gitignore
├── index.html
├── package.json
├── package-lock.json
├── public
│   ├── data
│   │   ├── reels-page-1.json
│   │   ├── reels-page-2.json
│   │   └── reels-page-3.json
│   └── vite.svg
├── README.md
├── src
│   ├── App.jsx
│   ├── assets
│   │   └── react.svg
│   ├── components
│   │   ├── BottomNav.jsx
│   │   ├── FollowButton.jsx
│   │   ├── LikeButton.jsx
│   │   ├── LoadingScreen.jsx
│   │   ├── ReelCard.jsx
│   │   └── VideoSeekbar.jsx
│   ├── context
│   │   └── ReelsContext.jsx
│   ├── hooks
│   │   └── useInView.js
│   ├── index.css
│   ├── main.jsx
│   ├── pages
│   │   └── LoginPage.jsx
│   └── services
│       └── reelService.js
└── vite.config.js

10 directories, 25 files
```

<!-- ---

## 🧪 Sample Reel JSON Format

```json
{
  "id": 1,
  "videoUrl": "https://samplelib.com/lib/preview/mp4/sample-5s.mp4",
  "title": "Startup India",
  "description": "How founders are disrupting legacy industries...",
  "userName": "Gabar Singh",
  "userImage": "https://randomuser.me/api/portraits/men/12.jpg",
  "likes": 200000,
  "comments": 1300,
  "shares": 456,
  "earnings": 2100
}
``` -->

---

<!-- ## 📦 Getting Started

```bash
git clone https://github.com/your-username/reel-feed.git
cd reel-feed

npm install
npm run dev
```

---

## 📌 Notes

- You can expand with real APIs or DB later
- Easy to turn into a PWA using Vite PWA plugin
- Works offline with JSON files for demo

--- -->

## ✍️ Author

**Prantik Ghosh**  
Frontend Web Developer | React.Js Developer
[GitHub: @tbs96](https://github.com/tbs96)

---

## ✅ Submission Ready

This project meets all requirements from the assignment PDF — including *`bonus features`*.

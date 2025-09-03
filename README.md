# 🌐 Personal Portfolio — Gerroar

A responsive and animated personal portfolio built with **React, TypeScript, Vite, TailwindCSS, and Framer Motion**.  
This project showcases my work, experiments, and design approach through a modular "bento grid" layout and custom CSS animations.

---

## ✨ Features

- **Responsive bento grid** — dynamic layout adapting from mobile (xxs) to ultra-wide screens (5xl).
- **Custom gradients & noise textures** — CSS-only brand effects (Peach, Banana, Gmail, GitHub, LinkedIn).
- **Hero video section** — autoplay, muted, inline video for strong first impression.
- **Mobile/desktop navigation** — animated hamburger toggle with Framer Motion and frosted-glass backgrounds.
- **Reusable Tailwind utilities** — gradient borders, backdrop blur, safe containers.
- **Performance-first** — mobile-first classes, compressed video assets, reduced-motion respect.

---

## 🛠 Tech Stack

- **React 18 + TypeScript** — UI composition and type safety
- **Vite** — fast dev server and optimized build
- **TailwindCSS** — utility-first responsive styling
- **Framer Motion** — smooth animations and layout transitions
- **Custom CSS** — gradients, noise textures, Gmail logo recreation

---

## 🚀 Run Locally

## 📥 Clone the project
```bash
git clone https://github.com/<your-username>/gerroar-portfolio.git
cd gerroar-portfolio
```

## 📦 Install dependencies
```bash
npm install
```

## 🧑‍💻 Run the development server
```bash
npm run dev
```

## 🏗️ Build for production
```bash
npm run build
```

## 👀 Preview production build
```bash
npm run preview
```

---

## 📂 Project Structure

```
src/
 ├── components/
 │    ├── NavBar/         # Desktop & mobile navigation
 │    ├── Bento/          # BentoIntro grid tiles
 │    └── ...
 ├── features/
 │    └── IntroVideo.tsx  # Hero video section
 ├── hooks/
 │    └── useDimensions.tsx
 ├── assets/              # Static assets (videos, svgs, noise textures)
 ├── index.css            # Tailwind base + custom utilities
 └── App.tsx              # Root composition
```

---

## ⚡ Challenges Faced

- Designing a **bento grid** that scales correctly across many breakpoints (xxs → 5xl).
- Implementing **CSS-only Gmail envelope** with `::before` and `::after`.
- Creating **conic-gradient glows** with blur that don’t leak outside rounded containers.
- Maintaining **performance** while using autoplay video and heavy noise/gradient effects.

---

## 📚 What I Learned

- Advanced usage of **Tailwind custom screens** for fine-grained responsive control.
- How to combine **Framer Motion’s LayoutGroup** with grid layouts for smooth transitions.
- Balancing **utility classes and custom CSS** for expressive but maintainable design.
- Building **brand-accurate visuals** (Gmail, GitHub, LinkedIn) without relying on images.

---

## 🔮 Next Steps

- Add actual navigation links and sections (About, Projects, Contact).
- Improve accessibility: focus trap in mobile menu, aria-expanded for toggle.
- Optimize video assets further and add poster frames.
- Integrate real project data dynamically (e.g., from a CMS or JSON).


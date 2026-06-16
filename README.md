# 🍦 Jumys — Ice Cream Website

> A modern, fully responsive ice cream shop website built with **React.js** and **Vite** — featuring a hero slider, shop, cart, wishlist, login drawer, blog, and much more!

---

## ✨ Features

- 🎠 **Auto-Playing Hero Slider** — smooth fade animation, auto-advances every 4 seconds
- 🛒 **Shopping Cart** — add, remove & manage ice cream products
- ❤️ **Wishlist** — save favourite products with persistent state
- 🔐 **Login Drawer** — slide-in login panel UI
- 🌟 **Featured Section** — highlight top picks and specials
- 🏪 **Shop Page** — full product listing with categories
- 📦 **Product Detail** — individual product view
- 📝 **Blog Section** — articles and posts layout
- 📱 **Fully Responsive** — 1200px / 992px / 768px / 576px breakpoints
- 🏷️ **Discount Badge** — "Get 15% Off" promotional badge
- 🔝 **Scroll To Top** — fixed position button
- 🎨 **Custom Typography** — Kalnia, Poppins & Playball Google Fonts
- ⚡ **Vite Powered** — lightning-fast dev server and optimized builds

---

## 🖥️ Pages & Sections

| Section | Description |
|---------|-------------|
| **Home** | Full-screen hero slider with tag, headline, CTA buttons & slide counter |
| **Featured** | Featured products / specials highlight section |
| **Shop** | Full product grid listing with categories |
| **Product** | Individual product detail view |
| **Blog** | Blog posts and articles layout |
| **Cart** | Shopping cart with item management |
| **Login Drawer** | Slide-in login/auth panel |
| **Footer** | Site footer with links and info |

---

## 🗂️ Project Structure

```
Jumys-website/
│
├── src/
│   ├── components/
│   │   ├── Header/
│   │   │   ├── Header.jsx            # Navbar with cart, wishlist & login icons
│   │   │   └── Header.css
│   │   ├── Home/
│   │   │   ├── Home.jsx              # Auto-play hero slider + summer banners + about
│   │   │   └── Home.css
│   │   ├── Featured/
│   │   │   ├── Featured.jsx          # Featured products section
│   │   │   └── Featured.css
│   │   ├── Shop/
│   │   │   ├── Shop.jsx              # Product listing / shop page
│   │   │   └── Shop.css
│   │   ├── Product/
│   │   │   ├── Product.jsx           # Single product detail view
│   │   │   └── Product.css
│   │   ├── Blog/
│   │   │   ├── Blog.jsx              # Blog posts section
│   │   │   └── Blog.css
│   │   ├── Cart/
│   │   │   ├── Cart.jsx              # Shopping cart drawer / page
│   │   │   └── Cart.css
│   │   ├── Wishlist/
│   │   │   ├── Wishlist.jsx          # Wishlist page
│   │   │   └── Wishlist.css
│   │   ├── LoginDrawer/
│   │   │   ├── LoginDrawer.jsx       # Slide-in login panel
│   │   │   └── LoginDrawer.css
│   │   └── Footer/
│   │       ├── Footer.jsx            # Site footer
│   │       └── Footer.css
│   │
│   ├── Utils/
│   │   └── wishlist.js               # Wishlist helper functions
│   │
│   ├── App.jsx                       # Root component & routing
│   ├── main.jsx                      # Entry point
│   └── index.css                     # Global styles
│
├── index.html
├── vite.config.js
├── package.json
└── README.md
```

---

## 🛠️ Tech Stack

| Technology | Usage |
|------------|-------|
| **React 18** | UI components, `useState`, `useEffect`, `useContext` hooks |
| **Vite 5** | Dev server, fast HMR, production build |
| **React Router** | Client-side routing between pages |
| **CSS3** | Custom animations, grid/flex layouts, media queries |
| **Google Fonts** | Kalnia (headings), Poppins (body), Playball (accents) |

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/Devarshiboghani/Jumys-website.git

# 2. Navigate into the project
cd Jumys-website

# 3. Install dependencies
npm install

# 4. Start the development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## 📦 Build for Production

```bash
# Build
npm run build

# Preview production build
npm run preview
```

---

## 📱 Responsive Breakpoints

| Breakpoint | Layout Behaviour |
|------------|-----------------|
| `> 992px` | Full desktop — multi-column layout, side-by-side sections |
| `≤ 992px` | Stack layout — single column, heading top, cup image floated right |
| `≤ 768px` | Compact — internal card stack, reduced font sizes |
| `≤ 576px` | Mobile — minimal spacing, full-width cards, stacked hero |

---

## 🎨 Color Palette

| Role | Color | Hex |
|------|-------|-----|
| Primary | 🔴 Red | `#e10914` |
| Dark | ⚫ Black | `#000000` |
| Background | ⚪ White | `#ffffff` |
| Body Text | 🖤 Dark Gray | `#222222` |

---

## 🎠 Hero Slides

| # | Tag | Headline |
|---|-----|----------|
| 01 | ICE CREAM HEAVEN | Cool Confections: Discover The Magic Of Ice Cream |
| 02 | SUMMER SPECIALS | Chilled Delights: Taste The Sweetness Of Every Scoop |
| 03 | FRESH & CREAMY | Icy Indulgences: Explore Our Finest Frozen Treats |

---

## 👨‍💻 GitHub Link

🔗 (https://github.com/Devarshiboghani/Jumys-website)

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

<p align="center">Made with ❤️ and 🍦 using React + Vite</p>
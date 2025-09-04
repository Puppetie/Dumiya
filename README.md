# 🎮 Dumiya's Portfolio

A modern, gaming and art-themed portfolio website built with React, Tailwind CSS, and Vite. Features a unique Final Fantasy-inspired design with smooth animations and responsive layout.

## ✨ Features

- 🎨 **Gaming & Art Themed Design** - Final Fantasy inspired color palette and typography
- 🌙 **Dark/Light Mode** - Automatic theme detection with smooth transitions
- 📱 **Fully Responsive** - Optimized for all device sizes
- ⚡ **Performance Optimized** - Built with Vite for fast development and builds
- 🎭 **Smooth Animations** - Custom CSS animations and hover effects
- ♿ **Accessibility Focused** - WCAG compliant with proper ARIA labels
- 🔍 **SEO Optimized** - Meta tags and semantic HTML structure

## 🚀 Tech Stack

- **Frontend Framework**: React 19
- **Build Tool**: Vite 7
- **Styling**: Tailwind CSS 4
- **Language**: JavaScript (ES6+)
- **Package Manager**: npm

## 📁 Project Structure

```
portfolio/
├── public/                 # Static assets
├── src/
│   ├── components/        # React components
│   │   ├── About.jsx     # About section
│   │   ├── Art.jsx       # Art portfolio section
│   │   ├── Contact.jsx   # Contact form
│   │   ├── Experience.jsx # Work experience
│   │   ├── Footer.jsx    # Site footer
│   │   ├── Gaming.jsx    # Gaming achievements
│   │   ├── Header.jsx    # Navigation header
│   │   └── Hero.jsx      # Hero section
│   ├── contexts/          # React contexts
│   │   └── ThemeContext.jsx # Theme management
│   ├── App.jsx           # Main app component
│   ├── index.css         # Global styles
│   └── main.jsx         # App entry point
├── dist/                 # Build output
├── package.json          # Dependencies and scripts
├── tailwind.config.js    # Tailwind configuration
├── vite.config.js        # Vite configuration
└── eslint.config.js      # ESLint configuration
```

## 🛠️ Installation & Setup

### Prerequisites

- Node.js 18.0.0 or higher
- npm 8.0.0 or higher

### Quick Start

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

## 📜 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint issues automatically
- `npm run preview` - Preview production build locally

## 🎨 Customization

### Colors

The project uses a custom Final Fantasy inspired color palette defined in `tailwind.config.js`:

- `ff-red` - Primary red colors
- `ff-pink` - Pink accent colors
- `ff-gold` - Gold highlight colors
- `ff-slate` - Neutral slate colors
- `ff-blue`, `ff-green`, `ff-purple` - Additional accent colors

### Fonts

Custom fonts are imported and configured:

- **Orbitron** - Display headings
- **Exo 2** - Body text
- **JetBrains Mono** - Code/monospace
- **Righteous** - UI elements
- **Sixtyfour** - Gaming-style headings
- **Press Start 2P** - Pixel art style

### Themes

The theme system supports:
- Automatic system preference detection
- Manual light/dark toggle
- Persistent theme selection
- Smooth transitions between themes

## 🔧 Configuration Files

### Tailwind CSS (`tailwind.config.js`)
- Custom color palette
- Font family definitions
- Animation keyframes
- Responsive breakpoints

### Vite (`vite.config.js`)
- Development server settings
- Build optimization
- Code splitting configuration
- Source map generation

### ESLint (`eslint.config.js`)
- Code quality rules
- React-specific linting
- Accessibility guidelines
- Performance best practices

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints:
- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

## ♿ Accessibility Features

- Semantic HTML structure
- ARIA labels and roles
- Keyboard navigation support
- Screen reader compatibility
- High contrast color schemes
- Focus management

## 🚀 Performance Features

- Code splitting and lazy loading
- Optimized images and assets
- CSS purging with Tailwind
- Efficient animations
- Reduced motion support

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run linting and tests
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🙏 Acknowledgments

- Final Fantasy series for design inspiration
- React and Tailwind CSS communities
- Open source contributors

---

**Built with ❤️ by Dumiya**

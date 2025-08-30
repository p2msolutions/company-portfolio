# P2M Solutions Portfolio Website

A modern, AI-inspired portfolio website built with React, TypeScript, Tailwind CSS, and Framer Motion. Inspired by cursor.com's design philosophy with advanced animations and futuristic aesthetics.

## 🚀 Features

- **Modern Tech Stack**: React 19 + Vite + TypeScript
- **Advanced Animations**: Framer Motion with scroll-triggered effects
- **Dark/Light Mode**: System detection + manual toggle
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Interactive Elements**: 3D hover effects, animated testimonials, cursor trails
- **SEO Optimized**: Meta tags, OpenGraph, Schema.org structured data
- **Performance**: Code splitting, lazy loading, optimized builds

## 🎨 Design System

### Colors
- **Dark Mode**: Charcoal/Black base with Neon Blue (#00d4ff) + Electric Green (#00ff88)
- **Light Mode**: White/Gray base with Purple (#8b5cf6) + Blue (#3b82f6) accents

### Typography
- **Primary**: Inter (body text)
- **Display**: Poppins (headings)

### Animations
- Scroll-triggered reveals with staggered children
- 3D hover effects with spring physics
- Infinite scrolling testimonials
- Cursor-following glow effects
- Smooth page transitions

## 🏗️ Project Structure

```
src/
├── components/
│   ├── layout/          # Header, Footer, SEO
│   ├── sections/        # Page sections (Hero, Services, etc.)
│   └── ui/              # Reusable UI components
├── contexts/            # React contexts (Theme)
├── hooks/               # Custom hooks (useInView)
├── data/                # Static content data
├── types/               # TypeScript type definitions
├── utils/               # Utility functions
└── test/                # Test setup and utilities
```

## 📦 Installation & Setup

```bash
# Clone the repository
git clone <repository-url>
cd p2m-portfolio

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Run tests
npm run test
```

## 🧪 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run test` - Run tests in watch mode
- `npm run test:run` - Run tests once
- `npm run lint` - Run ESLint

## 🌟 Key Sections

1. **Hero Section**: Full-screen animated hero with gradient backgrounds
2. **Feature Flow**: Scroll-driven narrative showcasing capabilities
3. **Services**: Interactive grid with 3D hover effects
4. **Portfolio**: Project showcase with category filtering
5. **Clients**: Infinite marquee with company logos
6. **Testimonials**: Vertical auto-scrolling testimonial columns
7. **About**: Company vision, mission, and timeline
8. **Team**: Flip card animations for team member profiles
9. **Contact**: Interactive form with validation

## 🚀 Deployment

The project is configured for easy deployment to:
- **Vercel** (recommended)
- **Netlify**
- **AWS Amplify**
- Any static hosting provider

## 🔧 Customization

### Adding New Sections
1. Create component in `src/components/sections/`
2. Add to main App.tsx
3. Update navigation in Header.tsx

### Modifying Content
- Edit `src/data/content.ts` for static content
- Update color scheme in `tailwind.config.js`
- Modify animations in component files

### Theme Customization
- Colors: `tailwind.config.js`
- Fonts: `src/index.css`
- Dark mode: `src/contexts/ThemeContext.tsx`

## 📱 Responsive Breakpoints

- **Mobile**: 0-768px
- **Tablet**: 768px-1024px
- **Desktop**: 1024px+

## ♿ Accessibility

- ARIA labels and roles
- Keyboard navigation support
- High contrast mode compatibility
- Screen reader optimized
- Focus management

## 🔒 Security

- No inline scripts
- CSP-friendly
- XSS protection
- Secure headers ready

## 📊 Performance

- Lazy loading images
- Code splitting
- Tree shaking
- Optimized bundle size
- Web Core Vitals optimized

## 🤝 Contributing

1. Fork the repository
2. Create feature branch
3. Commit changes
4. Push to branch
5. Create Pull Request

## 📄 License

MIT License - see LICENSE file for details.

## 📞 Support

For support, email contact@p2msolutions.com or create an issue in the repository.

# P2M Solutions Portfolio - Development Guide

## 🛠️ Development Commands

### Primary Commands
- `npm run dev` - Start development server (localhost:5173)
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run test` - Run tests in watch mode
- `npm run test:run` - Run tests once
- `npm run lint` - Run ESLint

### Type Checking
- TypeScript compilation is handled by Vite
- Run `npm run build` to check for type errors

## 🏗️ Architecture

### Tech Stack
- **Framework**: React 19 + Vite + TypeScript
- **Styling**: Tailwind CSS with custom design system
- **Animations**: Framer Motion
- **Forms**: React Hook Form
- **Testing**: Vitest + React Testing Library
- **Icons**: Lucide React

### Design Principles
- **Dark-first design** with light mode support
- **Minimal, futuristic aesthetic** inspired by cursor.com
- **Bold typography** with Inter/Poppins fonts
- **Generous whitespace** and clean layouts
- **Advanced animations** with spring physics

### Color System
```css
/* Dark Mode (Primary) */
--dark-bg: #0a0a0a
--dark-surface: #1a1a1a
--neon-blue: #00d4ff
--electric-green: #00ff88

/* Light Mode */
--light-bg: #ffffff
--light-surface: #f8fafc
--purple-accent: #8b5cf6
--blue-accent: #3b82f6
```

## 📁 File Organization

### Component Structure
```
components/
├── layout/          # Header, Footer, SEO
├── sections/        # Page sections (Hero, Services, etc.)
└── ui/              # Reusable components
```

### Naming Conventions
- **Components**: PascalCase (`HeroSection.tsx`)
- **Files/Folders**: camelCase (`useInView.ts`)
- **CSS Classes**: Tailwind utility classes
- **Props**: camelCase interfaces

### Code Style
- **No comments** unless complex logic requires explanation
- **Functional components** with hooks
- **TypeScript strict mode** enabled
- **ESLint** for code quality
- **Framer Motion** for all animations

## 🎨 Design Guidelines

### Animation Principles
- **Spring physics** for natural feel
- **Scroll-triggered** reveals with stagger
- **Hover states** with 3D transforms
- **Page transitions** with AnimatePresence
- **Performance-first** approach

### Responsive Design
- **Mobile-first** development
- **Tailwind breakpoints**: sm, md, lg, xl
- **Flexible grid layouts**
- **Adaptive typography scaling**

### Accessibility
- **ARIA labels** for interactive elements
- **Keyboard navigation** support
- **High contrast** mode compatibility
- **Screen reader** optimization

## 🔧 Development Workflow

### Adding New Sections
1. Create component in `src/components/sections/`
2. Add content data to `src/data/content.ts`
3. Import and use in `App.tsx`
4. Add navigation link in `Header.tsx`
5. Write tests in `ComponentName.test.tsx`

### Modifying Animations
- Use Framer Motion's `motion` components
- Leverage `useInView` hook for scroll triggers
- Follow existing animation patterns
- Test performance on mobile devices

### Theme Implementation
- Use Tailwind's dark mode classes
- Colors defined in `tailwind.config.js`
- Theme state managed in `ThemeContext`
- System preference detection included

## 🧪 Testing Strategy

### Component Testing
- Test component rendering
- Test user interactions
- Test accessibility features
- Mock external dependencies

### Animation Testing
- Test initial/final states
- Avoid testing animation frames
- Focus on user-visible outcomes

## 🚀 Deployment

### Build Process
1. Run `npm run build`
2. Check `dist/` folder
3. Deploy to Vercel/Netlify
4. Configure custom domain

### Environment Variables
- No sensitive data in frontend
- Use Vite's env variable system
- Prefix with `VITE_` for client access

### Performance Optimization
- Image lazy loading implemented
- Code splitting with dynamic imports
- Bundle analysis with `npm run build`
- Core Web Vitals monitoring

## 🎯 Brand Guidelines

### P2M Solutions Brand
- **Tagline**: "Innovating Software, Empowering Businesses"
- **Tone**: Professional, innovative, forward-thinking
- **Voice**: Confident, technical, approachable
- **Personality**: Cutting-edge, reliable, visionary

### Content Guidelines
- **Concise messaging** with clear value propositions
- **Technical credibility** without jargon overload
- **Future-focused** language and concepts
- **Client success** story emphasis

## 🔍 Common Issues

### Build Errors
- Check TypeScript compilation: `npm run build`
- Verify import paths are correct
- Ensure all dependencies are installed

### Animation Performance
- Use `transform` properties over layout changes
- Implement `will-change` CSS for heavy animations
- Test on lower-end devices

### Dark Mode Issues
- Ensure all colors have dark variants
- Test system preference detection
- Verify theme persistence

## 📝 Code Quality

### TypeScript
- Strict mode enabled
- Interface definitions required
- No `any` types in production code
- Proper type imports/exports

### CSS/Tailwind
- Utility-first approach
- Custom components in `@layer components`
- Responsive design with mobile-first
- Consistent spacing scale

### Best Practices
- Keep components small and focused
- Use custom hooks for logic reuse
- Implement proper error boundaries
- Follow React 19 patterns

# VentureSphere | Real-World NextJS App with dotCMS

A modern marketing landing page built with Next.js 15 and React 19, fetching dynamic content from dotCMS via GraphQL. This project demonstrates enterprise-level architecture, performance optimization, and modern web development best practices.

🌐 **Live Demo**: [https://venturesphere-next-app.vercel.app](https://venturesphere-next-app.vercel.app)  
📁 **Repository**: [https://github.com/QaisSultani/dotcms-next-app](https://github.com/QaisSultani/dotcms-next-app)

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- pnpm (recommended) or npm

### Installation

```bash
# Clone the repository
git clone https://github.com/QaisSultani/dotcms-next-app.git
cd dotcms-next-app

# Install dependencies
pnpm install

# Start development server
pnpm dev
```

### Available Scripts

```bash
pnpm dev       # Start development server with Turbopack
pnpm build     # Build for production with Turbopack  
pnpm start     # Start production server
pnpm lint      # Run ESLint
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

## ✨ Project Features

### Core Requirements - Fully Implemented ✅

- **Next.js 15 & React 19** with TypeScript for type safety
- **dotCMS GraphQL API** integration with 5-minute ISR revalidation
- **Tailwind CSS v4** styling with mobile-first responsive design
- **Semantic HTML5** structure following SEO best practices
- **Accessibility features** including ARIA labels and keyboard navigation
- **Static Header** with smooth scroll navigation
- **Hero Banner** carousel fetched dynamically from dotCMS
- **Recommended Products** grid displaying products with pricing
- **Upcoming Events** showcase with descriptions and images
- **Blog Feed Preview** with titles, teasers, images, and read-more links
- **Static Footer** with newsletter signup and social links

### Bonus Features - Fully Implemented ✅

- **Performance Optimizations**: Dynamic imports, Next.js image optimization, component-level code splitting
- **Clean Component Abstractions**: Reusable UI components, custom hooks, organized project structure  
- **Strong Developer Experience**: TypeScript integration, ESLint configuration, clear commit history

## 🏗️ Technical Architecture

### Tech Stack
- **Framework**: Next.js 15 with App Router
- **Frontend**: React 19, TypeScript
- **Styling**: Tailwind CSS v4
- **UI Components**: Custom library with Radix UI primitives
- **Content Management**: dotCMS via GraphQL API
- **Performance**: ISR caching, dynamic imports, image optimization

### Key Features
- **ISR (Incremental Static Regeneration)** with 5-minute revalidation for optimal content freshness
- **Component-based architecture** with clear separation of concerns
- **Custom GraphQL client** with error handling and logging
- **Responsive carousel** for hero banner with multiple slides
- **Loading skeletons** for enhanced user experience
- **SEO optimization** with meta tags, Open Graph, and JSON-LD structured data

## 🎯 Architectural Choices

### Design Decisions
- **ISR over SSG**: Chosen for optimal balance between content freshness and performance
- **Custom UI Components**: Provides better design consistency and bundle size control
- **Mobile-First Approach**: Ensures optimal experience across all device sizes
- **Component-Level Code Splitting**: Improves initial page load performance
- **Carousel Implementation**: Showcases multiple hero banners effectively

### Trade-offs & Assumptions
- **5-minute ISR revalidation**: Balances content freshness with server performance
- **Demo content queries**: Uses snow/winter sports theme based on available dotCMS demo content
- **Static footer content**: Placeholder contact information for demonstration purposes
- **Component abstraction level**: Optimized for maintainability without over-engineering

## 🔮 Future Improvements

*What would be implemented with more time:*

1. **Internationalization (i18n)**: Multi-language support for global reach using Next.js internationalization features

2. **Content Search & Filtering**: Search functionality across products, events, and blogs with advanced filtering options for better content discovery

3. **User Authentication & Personalization**: User accounts system with personalized content recommendations and bookmarking features

## 📁 Project Structure

```
├── public/                         # Static assets
│   ├── apple-icon.png              # Apple touch icon
│   ├── favicon.ico                 # Browser favicon
│   ├── icon.png                    # App icon
│   ├── og-image.png                # Open Graph image
│   ├── robots.txt                  # Search engine directives
│   └── sitemap.xml                 # Site structure for SEO
├── src/
│   ├── app/                        # Next.js App Router
│   │   ├── globals.css             # Global styles and Tailwind imports
│   │   ├── layout.tsx              # Root layout with SEO metadata
│   │   └── page.tsx                # Home page with dynamic imports
│   ├── components/
│   │   ├── sections/               # Main page sections
│   │   │   ├── Blogs.tsx           # Blog feed with read-more links
│   │   │   ├── Events.tsx          # Events showcase grid
│   │   │   ├── Footer.tsx          # Footer with newsletter signup
│   │   │   ├── Header.tsx          # Navigation header with mobile menu
│   │   │   ├── HeroBanner.tsx      # Dynamic hero carousel
│   │   │   └── Products.tsx        # Product grid with pricing
│   │   ├── shared/                 # Reusable components
│   │   │   ├── BlogsSkeleton.tsx   # Blog loading skeleton
│   │   │   ├── EventsSkeleton.tsx  # Events loading skeleton
│   │   │   ├── FooterSkeleton.tsx  # Footer loading skeleton
│   │   │   └── Logo.tsx            # Brand logo component
│   │   └── ui/                     # Base UI components (Shadcn/ui components)
│   │       ├── badge.tsx           # Badge component for categories
│   │       ├── button.tsx          # Button variants
│   │       ├── card.tsx            # Card layout component
│   │       ├── carousel.tsx        # Carousel with navigation
│   │       ├── separator.tsx       # Visual separator
│   │       ├── sheet.tsx           # Slide-out panel (mobile menu)
│   │       └── skeleton.tsx        # Loading skeleton utility
│   ├── constants/
│   │   ├── endpoints.ts            # dotCMS API endpoints
│   │   ├── links.ts                # Navigation and social links
│   │   └── queries.ts              # GraphQL queries for content
│   ├── lib/
│   │   ├── fetchGraphql.ts         # GraphQL client with ISR caching
│   │   ├── utils.ts                # Utility functions and URL helpers
│   │   └── withLogger.ts           # API logging wrapper
│   └── types/
│       └── index.ts                # TypeScript type definitions
├── components.json                 # Shadcn/ui configuration
├── eslint.config.mjs               # ESLint configuration
├── next.config.ts                  # Next.js configuration with image optimization
├── next-env.d.ts                   # Next.js TypeScript declarations
├── package.json                    # Dependencies and scripts
├── pnpm-lock.yaml                  # pnpm lock file
├── postcss.config.mjs              # PostCSS configuration for Tailwind
└── tsconfig.json                   # TypeScript compiler configuration
```

## 🛠️ Development Setup

### Environment
- **Node.js 18+** required
- **pnpm** recommended for package management
- **Turbopack** enabled for faster development and builds
- **ESLint** configured for code quality
- **TypeScript** strict mode for type safety

### dotCMS Integration
- **GraphQL Endpoint**: `https://demo.dotcms.com/api/v1/graphql`
- **Content Types**: Banners, Products, Calendar Events, Blogs
- **Image Assets**: Automatically optimized via Next.js Image component
- **Caching Strategy**: 5-minute ISR revalidation for fresh content

### Key Configuration Files
- `next.config.ts` - Image optimization and performance settings
- `tailwind.config.ts` - Custom design system configuration  
- `tsconfig.json` - TypeScript compiler options
- `eslint.config.mjs` - Code quality rules

## 📝 API Integration

The application fetches content from dotCMS using GraphQL queries:

- **Hero Banners**: Dynamic carousel with images and captions
- **Products**: Snow activities with pricing and categories  
- **Events**: Calendar events with descriptions and images
- **Blogs**: Latest posts with teasers and featured images

All API calls include error handling, and ISR caching for optimal performance.

---

Built with ❤️ using Next.js and dotCMS
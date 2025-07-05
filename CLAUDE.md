# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a corporate website for 株式会社大建設 (Daikensetsu Co., Ltd.), a Japanese construction and renovation company. Built with Next.js 15 using the App Router, it's a single-page application with a contact form integration.

## Essential Commands

### Development
```bash
npm run dev        # Start development server with Turbopack (http://localhost:3000)
npm run build      # Create production build
npm run start      # Run production server
npm run lint       # Run ESLint
```

### Testing
No test framework is currently configured. When adding tests, first check with the user for their preferred testing approach.

## Architecture Overview

### Tech Stack
- **Framework**: Next.js 15.3.4 with App Router
- **Language**: TypeScript 5
- **Styling**: CSS Modules (no CSS-in-JS library)
- **Email**: Nodemailer with Gmail SMTP
- **State**: React useState (no global state management)

### Project Structure
```
src/
├── app/                    # Next.js App Router
│   ├── api/contact/       # Contact form API endpoint
│   ├── page.tsx           # Main page (entire website)
│   └── layout.tsx         # Root layout with navigation
└── components/            # Reusable components
    └── ContactForm.tsx    # Contact form with email integration
```

### Key Architectural Decisions

1. **Single Page Application**: The entire website is in `src/app/page.tsx` with sections for hero, company overview, services, CEO greeting, and contact.

2. **Server Components by Default**: Main page is a server component. Client components only used for interactivity (ContactForm, mobile menu).

3. **Styling Approach**: CSS Modules with BEM-like naming. Mobile-first responsive design using media queries.

4. **Form Handling**: 
   - Client-side state management with controlled components
   - POST to `/api/contact` endpoint
   - Sends two emails: admin notification and customer auto-reply
   - Minimal validation (HTML5 required fields)

5. **Image Optimization**: Uses `next/image` with proper dimensions and priority loading for above-fold images.

### Environment Variables Required
```
GMAIL_USER=         # Gmail account for sending emails
GMAIL_PASSWORD=     # Gmail app password (not regular password)
RECIPIENT_EMAIL=    # Optional: override recipient email
```

### Common Development Tasks

#### Adding New Sections
Sections are added directly to `src/app/page.tsx`. Follow the existing pattern:
- Create a section with CSS module class
- Use semantic HTML elements
- Ensure mobile responsiveness

#### Modifying Contact Form
- Form component: `src/components/ContactForm.tsx`
- API handler: `src/app/api/contact/route.ts`
- Both files need updates for new fields

#### Updating Styles
- Global styles: `src/app/globals.css`
- Page-specific: `src/app/page.module.css`
- Component styles: Create `[component].module.css`

### Code Conventions

- **Components**: PascalCase, functional components with TypeScript
- **CSS Classes**: camelCase in modules (e.g., `styles.heroContent`)
- **State Management**: Local useState, no prop drilling due to flat structure
- **Error Handling**: Try-catch in API routes, user-friendly messages
- **Type Safety**: Strict TypeScript, define interfaces for data structures

### Important Notes

- No routing beyond the main page - it's a true single-page site
- Japanese content is hardcoded (no i18n system)
- No test files currently exist
- Minimal dependencies keep the project lightweight
- Mobile menu toggle is in the layout component
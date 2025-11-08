# Axle Africa Partners LLC - Website

A professional, modern website for Axle Africa Partners LLC, a Ugandan investment facilitation firm specializing in gold sector compliance and government tender navigation for foreign investors.

## Tech Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Shadcn/ui** components
- **Framer Motion** for animations
- **React Hook Form** + **Zod** for form validation
- **Resend** for contact form submission

## Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn/pnpm

### Installation

1. Install dependencies:
```bash
npm install
```

2. Set up environment variables:
Create a `.env.local` file in the root directory:
```env
RESEND_API_KEY=your_resend_api_key_here
CONTACT_EMAIL=your_contact_email@example.com
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Environment Variables

- `RESEND_API_KEY`: Your Resend API key (get from https://resend.com/api-keys)
- `CONTACT_EMAIL`: Email address where contact form submissions should be sent

## Project Structure

```
├── app/
│   ├── api/
│   │   └── contact/          # Contact form API endpoint
│   ├── about/                 # About page
│   ├── contact/               # Contact page
│   ├── resources/             # Resources page
│   ├── services/              # Services page
│   ├── globals.css            # Global styles
│   ├── layout.tsx             # Root layout
│   └── page.tsx               # Home page
├── components/
│   ├── ui/                    # Shadcn/ui components
│   ├── navbar.tsx             # Navigation bar
│   ├── footer.tsx             # Footer component
│   ├── cta-button.tsx         # CTA button component
│   ├── service-card.tsx       # Service card component
│   ├── process-step.tsx       # Process step component
│   └── trust-badge.tsx        # Trust badge component
├── lib/
│   ├── constants.ts           # Content constants
│   └── utils.ts               # Utility functions
└── public/                    # Static assets
```

## Customization

### Updating Content

Most content can be easily updated in `lib/constants.ts`. For page-specific content, edit the respective page files in `app/`.

### Email Configuration

1. Sign up for a Resend account at https://resend.com
2. Get your API key from the dashboard
3. Add it to `.env.local` as `RESEND_API_KEY`
4. Update the "from" email in `app/api/contact/route.ts` to match your verified domain
5. Update the "to" email or use the `CONTACT_EMAIL` environment variable

### Styling

The color scheme is defined in `tailwind.config.ts`:
- Primary (Gold): `#F59E0B`
- Secondary (Deep Navy): `#0F172A`

## Features

- ✅ Fully responsive design
- ✅ Mobile-first approach
- ✅ SEO optimized with meta tags
- ✅ Form validation with React Hook Form + Zod
- ✅ Smooth animations with Framer Motion
- ✅ Accessible components (WCAG 2.1 AA compliant)
- ✅ Type-safe with TypeScript
- ✅ Contact form with email integration

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository in Vercel
3. Add environment variables in Vercel dashboard
4. Deploy!

### Other Platforms

Build the project:
```bash
npm run build
```

Start the production server:
```bash
npm start
```

## License

© 2025 Axle Africa Partners LLC. All rights reserved.


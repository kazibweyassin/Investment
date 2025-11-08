# Setup Guide

## Quick Start

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Set Up Environment Variables**
   
   Create a `.env.local` file in the root directory with:
   ```env
   RESEND_API_KEY=your_resend_api_key_here
   CONTACT_EMAIL=info@axleafricapartners.com
   ```
   
   To get a Resend API key:
   - Sign up at https://resend.com
   - Go to API Keys section
   - Create a new API key
   - Copy and paste it into `.env.local`

3. **Configure Email Sender**
   
   In `app/api/contact/route.ts`, update the "from" email:
   - Replace `onboarding@resend.dev` with your verified domain email
   - Or use a verified email address from your Resend account

4. **Run Development Server**
   ```bash
   npm run dev
   ```

5. **Open in Browser**
   Navigate to http://localhost:3000

## Customization

### Update Company Information

Edit `lib/constants.ts` to update:
- Company name
- Email address
- Phone number
- Location
- Office hours

### Update Content

- **Home Page**: `app/page.tsx`
- **Services Page**: `app/services/page.tsx`
- **About Page**: `app/about/page.tsx`
- **Resources Page**: `app/resources/page.tsx`
- **Contact Page**: `app/contact/page.tsx`

### Update Colors

Edit `tailwind.config.ts`:
- Primary (Gold): `#F59E0B`
- Secondary (Navy): `#0F172A`

### Add Google Maps

Once you have an office address, update `app/contact/page.tsx`:
1. Get embed code from Google Maps
2. Replace the placeholder div with the iframe (commented code is already there)

## Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Import project in Vercel
3. Add environment variables in Vercel dashboard
4. Deploy!

### Other Platforms

Build the project:
```bash
npm run build
```

Start production server:
```bash
npm start
```

## Notes

- All animations are handled by Framer Motion
- Form validation uses React Hook Form + Zod
- Contact form requires Resend API key to function
- All pages are fully responsive and mobile-first
- SEO meta tags are included on all pages


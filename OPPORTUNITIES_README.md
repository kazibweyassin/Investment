# 🔒 Opportunities Marketplace - Subscription Gated Access

## Overview
The Opportunities Marketplace is a **premium, subscription-only** feature that provides verified investment opportunities in Uganda across multiple sectors.

## 🎯 Key Features

### 1. **Gated Access Model**
- **Public Preview**: First 2 opportunities visible to all visitors
- **Locked Content**: Remaining opportunities blurred with subscription prompt
- **Member Access**: Full access for authenticated, subscribed users

### 2. **Subscription Tiers**

#### Explorer - $99/month
- Access to basic opportunities
- Monthly market reports
- Email support
- Limited deal details

#### Professional - $299/month (Most Popular)
- Full access to all opportunities
- Priority introductions
- Weekly market insights
- Due diligence templates
- Direct partner contacts
- 24/7 support

#### Enterprise - Custom Pricing
- Dedicated account manager
- Custom deal sourcing
- Exclusive opportunities
- On-ground support
- Legal & compliance assistance
- White-glove service

### 3. **Opportunity Categories**
- 💎 **Gold & Minerals** - DGSM licensed suppliers, export-ready
- 🏛️ **Land Acquisitions** - Title-verified commercial/agricultural land
- 📋 **Government Contracts** - PPDA registered tender opportunities
- 🌾 **Agriculture** - Export partnerships, farming investments
- 💻 **IT & Infrastructure** - Digitization projects, tech contracts
- 🏢 **Business Setup** - Company formation, licensing support

### 4. **Smart Filtering System**
- **Search**: Full-text search across titles and descriptions
- **Sector Filter**: Filter by opportunity type
- **Investment Size**: Range-based filtering
- **Stage**: Active, Upcoming, Pre-Qualified
- **Location**: Regional filtering within Uganda

### 5. **Opportunity Cards Display**
Each opportunity card shows:
- ✅ Sector badge with color coding
- ⭐ Premium/Featured indicator
- 📍 Location in Uganda
- 💰 Investment size range
- 📈 Current stage status
- ✓ Key highlights (3-5 verified points)
- 📅 Posted date
- 🔒 Lock/unlock status based on subscription

## 📁 File Structure

```
app/
  opportunities/
    page.tsx          # Main marketplace page
    layout.tsx        # Metadata and layout wrapper
components/
  auth-modal.tsx      # Login/signup modal component
```

## 🔐 Authentication Flow

### For Non-Members:
1. Browse marketplace → See 2 preview opportunities
2. Scroll to locked opportunities → See blur overlay
3. Click "Subscribe to View" → Redirected to pricing section
4. Choose plan → Trigger auth modal or contact form
5. Complete signup → Gain full access

### For Members:
1. Login → Access all opportunities
2. Filter/search freely
3. Click "View Details" → See full opportunity information
4. Connect directly with partners

## 🎨 Design System

### Color Coding by Sector:
- **Gold**: Amber-600 border (#D97706)
- **Land**: Emerald-600 border (#059669)
- **Government**: Blue-600 border (#2563EB)
- **Agriculture**: Green-600 border (#16A34A)
- **IT**: Indigo-600 border (#4F46E5)

### UI Components:
- Solid slate-900 backgrounds for headers
- White card backgrounds with gray-200 borders
- Blue-600 primary actions
- Green status indicators for "Active"
- Lock icons for restricted content

## 🔄 Integration Points

### To Implement Full Functionality:

1. **Authentication Service** (NextAuth.js recommended)
```typescript
// app/api/auth/[...nextauth]/route.ts
import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import LinkedInProvider from "next-auth/providers/linkedin"

export const authOptions = {
  providers: [
    GoogleProvider({ ... }),
    LinkedInProvider({ ... })
  ],
  callbacks: {
    async session({ session, token }) {
      session.user.subscription = token.subscription
      return session
    }
  }
}
```

2. **Database Schema** (Prisma example)
```prisma
model Opportunity {
  id              String   @id @default(cuid())
  title           String
  type            String
  location        String
  sector          String
  investmentSize  String
  stage           String
  highlights      String[]
  description     String   @db.Text
  isPremium       Boolean  @default(false)
  postedDate      DateTime @default(now())
  partnerId       String
  partner         Partner  @relation(fields: [partnerId], references: [id])
}

model Subscription {
  id              String   @id @default(cuid())
  userId          String   @unique
  user            User     @relation(fields: [userId], references: [id])
  plan            String   // "explorer" | "professional" | "enterprise"
  status          String   // "active" | "cancelled" | "expired"
  currentPeriodEnd DateTime
  stripeCustomerId String?
}
```

3. **Payment Integration** (Stripe recommended)
```typescript
// app/api/subscribe/route.ts
import Stripe from "stripe"

export async function POST(req: Request) {
  const { plan, userId } = await req.json()
  
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!)
  
  const session = await stripe.checkout.sessions.create({
    customer_email: user.email,
    line_items: [{
      price: PLAN_PRICES[plan],
      quantity: 1
    }],
    mode: 'subscription',
    success_url: `${process.env.NEXT_PUBLIC_URL}/opportunities?success=true`,
    cancel_url: `${process.env.NEXT_PUBLIC_URL}/opportunities?cancelled=true`
  })
  
  return Response.json({ url: session.url })
}
```

4. **Access Control Middleware**
```typescript
// middleware.ts
import { withAuth } from "next-auth/middleware"

export default withAuth({
  callbacks: {
    authorized: ({ token, req }) => {
      if (req.nextUrl.pathname.startsWith("/opportunities")) {
        // Allow public access to marketplace listing
        // Restrict individual opportunity details
        return true
      }
      return !!token
    }
  }
})

export const config = {
  matcher: ["/opportunities/:path*"]
}
```

## 📊 Analytics & Tracking

Track key metrics:
- **Conversion Rate**: Visitors → Subscribers
- **Popular Sectors**: Which opportunities get most views
- **Drop-off Points**: Where users leave without subscribing
- **Subscription Retention**: Monthly/annual retention rates
- **Average Deal Value**: By subscription tier

## 🚀 Next Steps

### Phase 1: MVP (Current)
- ✅ Static opportunity listing
- ✅ Subscription plan display
- ✅ Gated content UI
- ✅ Auth modal component

### Phase 2: Authentication
- [ ] Integrate NextAuth.js
- [ ] Connect Google/LinkedIn OAuth
- [ ] Build user session management
- [ ] Create protected routes

### Phase 3: Payment Processing
- [ ] Stripe integration
- [ ] Subscription checkout flow
- [ ] Webhook handlers for subscription events
- [ ] Customer portal for plan management

### Phase 4: Dynamic Content
- [ ] Database setup (Prisma + PostgreSQL)
- [ ] Admin dashboard for adding opportunities
- [ ] Real-time opportunity updates
- [ ] Email notifications for new opportunities

### Phase 5: Advanced Features
- [ ] Saved opportunities (bookmarks)
- [ ] Deal matching algorithm
- [ ] Partner messaging system
- [ ] Document sharing & due diligence tools

## 🎯 Business Model

### Revenue Streams:
1. **Subscription Fees**: $99-$299/month recurring
2. **Enterprise Contracts**: Custom pricing
3. **Success Fees**: % of closed deals (optional add-on)
4. **Featured Listings**: Premium placement for partners

### Value Proposition:
- **For Investors**: Verified, compliance-ready opportunities
- **For Local Partners**: Access to international capital
- **For Platform**: Scalable, recurring revenue model

## 📱 Mobile Responsiveness

All components are fully responsive:
- Mobile: Single column grid
- Tablet: 2-column grid
- Desktop: 3-column grid
- Filters collapse on mobile
- Touch-optimized interactions

## ♿ Accessibility

- Semantic HTML structure
- ARIA labels for interactive elements
- Keyboard navigation support
- Screen reader friendly
- High contrast text (WCAG AA compliant)

## 🔒 Security Considerations

- Server-side authentication checks
- API rate limiting
- XSS protection (sanitize user inputs)
- CSRF tokens for forms
- Encrypted payment processing
- PII data protection (GDPR/CCPA compliant)

## 📞 Support

For implementation questions or feature requests:
- Email: dev@axleafricaadvisory.com
- Documentation: /docs/opportunities-marketplace
- Admin Dashboard: /admin/opportunities

---

**Built with**: Next.js 14, TypeScript, Tailwind CSS, Framer Motion, React Hook Form, Zod

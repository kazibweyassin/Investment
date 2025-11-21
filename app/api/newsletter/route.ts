import { NextRequest, NextResponse } from "next/server"
import { Resend } from "resend"

// Lazy initialize Resend only when needed (not during build)
const getResend = () => {
  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) {
    return null
  }
  return new Resend(apiKey)
}

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json()

    if (!email || !email.includes("@")) {
      return NextResponse.json(
        { error: "Valid email is required" },
        { status: 400 }
      )
    }

    // In a real implementation, you would:
    // 1. Save to your database
    // 2. Send confirmation email via Resend
    // 3. Add to your email marketing platform

    // For now, we'll just log it
    console.log("Newsletter signup:", email)

    // Example: Send confirmation email
    // await resend.emails.send({
    //   from: "newsletter@axleafricapartners.com",
    //   to: email,
    //   subject: "Welcome to Diamond Capital Africa Newsletter",
    //   html: "<p>Thank you for subscribing!</p>",
    // })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Newsletter signup error:", error)
    return NextResponse.json(
      { error: "Failed to subscribe" },
      { status: 500 }
    )
  }
}


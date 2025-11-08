import { NextRequest, NextResponse } from "next/server"
import { Resend } from "resend"

// Initialize Resend lazily to avoid build-time errors
// Get your API key from https://resend.com/api-keys
const getResend = () => {
  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) {
    throw new Error("RESEND_API_KEY is not set")
  }
  return new Resend(apiKey)
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, phone, company, serviceInterest, message } = body

    // Validate required fields
    if (!name || !email || !serviceInterest || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      )
    }

    // Email service interest labels
    const serviceLabels: Record<string, string> = {
      gold: "Gold Sector Facilitation",
      tenders: "Government Tender Navigation",
      both: "Both Services",
      general: "General Inquiry",
    }

    // Prepare email content
    const emailSubject = `New Contact Form Submission: ${serviceLabels[serviceInterest] || serviceInterest}`
    const emailHtml = `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ""}
      ${company ? `<p><strong>Company:</strong> ${company}</p>` : ""}
      <p><strong>Service Interest:</strong> ${serviceLabels[serviceInterest] || serviceInterest}</p>
      <p><strong>Message:</strong></p>
      <p>${message.replace(/\n/g, "<br>")}</p>
    `

    // Send email using Resend
    // Update the "from" email to match your verified domain in Resend
    // Update the "to" email to your actual business email
    const resend = getResend()
    const { data, error } = await resend.emails.send({
      from: "Axle Africa Partners <onboarding@resend.dev>", // Replace with your verified domain
      to: process.env.CONTACT_EMAIL || "info@axleafricapartners.com", // Replace with your email
      reply_to: email,
      subject: emailSubject,
      html: emailHtml,
    })

    if (error) {
      console.error("Resend error:", error)
      return NextResponse.json(
        { error: "Failed to send email" },
        { status: 500 }
      )
    }

    return NextResponse.json(
      { message: "Email sent successfully", data },
      { status: 200 }
    )
  } catch (error) {
    console.error("Contact form error:", error)
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    )
  }
}


import { NextResponse } from "next/server";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const name = String(body.name ?? "").trim();
    const email = String(body.email ?? "").trim();
    const message = String(body.message ?? "").trim();
    const website = String(body.website ?? "").trim();

    // Quietly accept honeypot submissions so bots do not learn the field worked.
    if (website) return NextResponse.json({ ok: true });
    if (name.length < 2 || name.length > 100 || !emailPattern.test(email) || message.length < 10 || message.length > 5000) {
      return NextResponse.json({ error: "Please check your details and try again." }, { status: 400 });
    }

    const apiKey = process.env.RESEND_API_KEY;
    const contactEmail = process.env.CONTACT_EMAIL;
    if (!apiKey || !contactEmail) {
      return NextResponse.json({ error: "Contact delivery is not configured yet." }, { status: 503 });
    }

    const resendResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        from: process.env.CONTACT_FROM_EMAIL ?? "Portfolio contact <onboarding@resend.dev>",
        to: [contactEmail],
        reply_to: email,
        subject: `New portfolio enquiry from ${name}`,
        text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
      }),
    });

    if (!resendResponse.ok) return NextResponse.json({ error: "Message delivery failed." }, { status: 502 });
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Unable to send message." }, { status: 500 });
  }
}

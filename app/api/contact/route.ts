import { Resend } from "resend";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const resend = new Resend(process.env.RESEND_API_KEY); // FETCH RESEND API KEY

  try {
    const { name, company, email, phone, service, message } = await req.json();

    await resend.emails.send({
      from: "Consultation Form <noreply@elevareaca.co.uk>",
      to: ["contact@elevareaca.co.uk"],
      subject: "New Contact Form Message",
      replyTo: email,
      html: `
        <h2>New Message</h2>
        <p><b>Name:</b> ${name}</p>
        <p><b>Company:</b> ${company}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Phone:</b> ${phone}</p>
        <p><b>Service:</b> ${service}</p>
        <p><b>Message:</b></p>
        <p>${message}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.log(err); // TO BE REMOVED LATER
    return NextResponse.json({ success: false }, { status: 500 });
  }
}

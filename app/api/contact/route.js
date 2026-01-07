import nodemailer from 'nodemailer';

export async function POST(req) {
    try {
        const { name, phone, course, message } = await req.json();

        // Create a transporter
        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: process.env.SMTP_PORT,
            secure: true, // true for 465, false for other ports
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS,
            },
        });

        // Email content
        const mailOptions = {
            from: `"Azhka Enquiry" <${process.env.SMTP_USER}>`,
            to: process.env.CONTACT_EMAIL,
            subject: `New Admission Inquiry: ${name}`,
            text: `
        New enquiry from Azhka Institute Website:
        
        Name: ${name}
        Phone: ${phone}
        Course: ${course || 'Not specified'}
        Message: ${message || 'No additional message'}
        
        Sent from Contact Form.
      `,
            html: `
        <div style="font-family: sans-serif; padding: 20px; color: #333;">
          <h2 style="color: #1FB6C9;">New Admission Inquiry</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Course:</strong> ${course || 'Not specified'}</p>
          <p><strong>Message:</strong> ${message || 'No additional message'}</p>
          <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;" />
          <p style="font-size: 12px; color: #999;">This email was sent from the Azhka Institute Website contact form.</p>
        </div>
      `,
        };

        // Send email
        await transporter.sendMail(mailOptions);

        return new Response(JSON.stringify({ message: 'Success' }), {
            status: 200,
            headers: { 'Content-Type': 'application/json' },
        });
    } catch (error) {
        console.error('Email error:', error);
        return new Response(JSON.stringify({ error: 'Failed to send email' }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' },
        });
    }
}

import { NextRequest, NextResponse } from 'next/server'
import { EmailClient } from '@azure/communication-email'

export const runtime = 'nodejs'

interface ContactFormData {
  name: string
  email: string
  message: string
}

/**
 * POST /api/contact
 * Handles contact form submissions and sends emails via Azure Communication Services
 */
export async function POST(request: NextRequest) {
  try {
    // Parse request body
    const body: ContactFormData = await request.json()

    // Validate input
    if (!body.name || !body.email || !body.message) {
      return NextResponse.json(
        { error: 'Missing required fields: name, email, message' },
        { status: 400 }
      )
    }

    // Get environment variables
    const connectionString = process.env.AZURE_COMMUNICATION_SERVICES_CONNECTION_STRING
    const senderEmail = process.env.AZURE_SENDER_EMAIL
    const recipientEmail = process.env.AZURE_RECIPIENT_EMAIL

    if(!connectionString) {
      console.error('AZURE_COMMUNICATION_SERVICES_CONNECTION_STRING is not set')
      return NextResponse.json(
        { error: 'Connection String not configured correctly' },
        { status: 500 }
      )
    }
    if(!senderEmail) {
      console.error('AZURE_SENDER_EMAIL is not set')
      return NextResponse.json(
        { error: 'Sender Email not configured correctly' },
        { status: 500 }
      )
    }
    if(!recipientEmail) {
      console.error('AZURE_RECIPIENT_EMAIL is not set')
      return NextResponse.json(
        { error: 'Recipient Email not configured correctly' },
        { status: 500 }
      )
    }

    // Initialize Email Client
    const emailClient = new EmailClient(connectionString)

    // Create email message for admin
    const adminEmailMessage = {
      senderAddress: senderEmail,
      recipients: {
        to: [
          {
            address: recipientEmail,
            displayName: 'RiftVector Contact Form',
          },
        ],
        replyTo: [
          {
            address: body.email,
            displayName: body.name,
          },
        ],
      },
      content: {
        subject: `New Contact Form Submission from ${body.name}`,
        plainText: `
New contact form submission:

Name: ${body.name}
Email: ${body.email}

Message:
${body.message}

---
This email was sent from your RiftVector website contact form.
Reply-To: ${body.email}
        `.trim(),
        html: `
<div style="font-family: Arial, sans-serif; max-width: 600px;">
  <h2>New Contact Form Submission</h2>
  <p><strong>Name:</strong> ${escapeHtml(body.name)}</p>
  <p><strong>Email:</strong> <a href="mailto:${escapeHtml(body.email)}">${escapeHtml(body.email)}</a></p>
  <hr style="border: none; border-top: 1px solid #ccc; margin: 20px 0;">
  <h3>Message:</h3>
  <p>${escapeHtml(body.message).replace(/\n/g, '<br>')}</p>
  <hr style="border: none; border-top: 1px solid #ccc; margin: 20px 0;">
  <p style="color: #666; font-size: 12px;">
    This email was sent from your RiftVector website contact form.<br>
    Reply-To: ${escapeHtml(body.email)}
  </p>
</div>
        `.trim(),
      },
    }

    // Send email to admin
    const sendPoller = await emailClient.beginSend(adminEmailMessage)
    const result = await sendPoller.pollUntilDone()

    console.log(`Email sent successfully. Message ID: ${result.id}`)

    // Send confirmation email to user
    const userEmailMessage = {
      senderAddress: senderEmail,
      recipients: {
        to: [
          {
            address: body.email,
            displayName: body.name,
          },
        ],
      },
      content: {
        subject: 'We received your message - RiftVector',
        plainText: `
Hi ${body.name},

Thank you for contacting us! We've received your message and will get back to you as soon as possible.

Best regards,
The RiftVector Team
        `.trim(),
        html: `
<div style="font-family: Arial, sans-serif; max-width: 600px;">
  <h2>Thank you for reaching out!</h2>
  <p>Hi ${escapeHtml(body.name)},</p>
  <p>We've received your message and will get back to you as soon as possible.</p>
  <p>Best regards,<br><strong>The RiftVector Team</strong></p>
</div>
        `.trim(),
      },
    }

    // Send confirmation email (fire and forget)
    emailClient
      .beginSend(userEmailMessage)
      .then((poller) => poller.pollUntilDone())
      .catch((err: Error) => console.error('Failed to send confirmation email:', err))

    return NextResponse.json(
      {
        success: true,
        message: 'Email sent successfully',
        messageId: result.id,
      },
      { status: 200 }
    )
  } catch (error: Error | unknown) {
    const err = error instanceof Error ? error : new Error('Unknown error occurred')
    console.error('Error sending email:', err)

    return NextResponse.json(
      {
        error: 'Failed to send email',
        message: err.message || 'Unknown error occurred',
      },
      { status: 500 }
    )
  }
}

/**
 * Helper function to escape HTML special characters
 */
function escapeHtml(text: string): string {
  const map: { [key: string]: string } = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;',
  }
  return text.replace(/[&<>"']/g, (char) => map[char])
}

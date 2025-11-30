/**
 * Email Service - Integration with Next.js API route for sending emails
 */

export interface EmailPayload {
  name: string
  email: string
  message: string
}

export interface EmailResponse {
  success: boolean
  message: string
  messageId?: string
  error?: string
}

/**
 * Send email via Next.js API route
 * @param payload - Email form data
 * @returns Response from the API
 */
export async function sendEmail(payload: EmailPayload): Promise<EmailResponse> {
  try {
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    })

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}))
      throw new Error(
        errorData.message || `API returned status ${response.status}`
      )
    }

    const data = await response.json()
    return {
      success: true,
      message: data.message || 'Email sent successfully',
      messageId: data.messageId,
    }
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : 'Unknown error occurred'

    return {
      success: false,
      message: 'Failed to send email',
      error: errorMessage,
    }
  }
}

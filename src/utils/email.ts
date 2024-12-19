import emailjs from '@emailjs/browser';

interface EmailData {
  to: string;
  name: string;
  email: string;
  message: string;
}

const EMAILJS_SERVICE_ID = 'service_cbecapital';
const EMAILJS_TEMPLATE_ID = 'template_contact';
const EMAILJS_PUBLIC_KEY = 'YOUR_EMAILJS_PUBLIC_KEY';

export async function sendContactEmail(data: EmailData): Promise<void> {
  try {
    const templateParams = {
      to_email: data.to,
      from_name: data.name,
      from_email: data.email,
      message: data.message,
    };

    const response = await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      templateParams,
      EMAILJS_PUBLIC_KEY
    );

    if (response.status !== 200) {
      throw new Error('Failed to send email');
    }
  } catch (error) {
    console.error('EmailJS Error:', error);
    throw new Error('Failed to send email');
  }
}
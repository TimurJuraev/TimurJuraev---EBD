import emailjs from '@emailjs/browser';

const EMAILJS_SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || '';
const EMAILJS_PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || '';

interface EmailParams {
  to_email: string;
  cc_email?: string;
  subject: string;
  message: string;
}

export const sendEmail = async (params: EmailParams) => {
  try {
    await emailjs.send(
      EMAILJS_SERVICE_ID,
      'template_default', // Create this template in EmailJS dashboard
      {
        to_email: params.to_email,
        cc_email: params.cc_email || '',
        subject: params.subject,
        message: params.message,
      },
      EMAILJS_PUBLIC_KEY
    );
    return true;
  } catch (error) {
    console.error('Failed to send email:', error);
    return false;
  }
};
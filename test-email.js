const { Resend } = require('resend');
const resend = new Resend('re_hcPMhrEH_JRXRdWuSRuqepg7Z1xp8MYAF');

async function testEmail() {
  try {
    const data = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'support.lumoraspace@gmail.com',
      subject: 'Test Email from Lumora',
      html: '<p>This is a test email to verify Resend is working.</p>'
    });
    console.log('Success:', data);
  } catch (error) {
    console.error('Error:', error);
  }
}

testEmail();

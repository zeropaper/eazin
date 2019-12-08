const nodemailer = require('nodemailer');

const {
  // NODE_ENV,
  NOTIFICATION_EMAIL,
  NOTIFICATION_EMAIL_PASS,
} = process.env;

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: NOTIFICATION_EMAIL,
    pass: NOTIFICATION_EMAIL_PASS,
  },
});

module.exports = async (options) => {
  if (!NOTIFICATION_EMAIL || !NOTIFICATION_EMAIL_PASS) throw new Error('Missing mailer setup');
  if (!(options.to || '').trim()) throw new Error('Missing email recipient (to)');
  if (!(options.subject || '').trim()) throw new Error('Missing email subject');
  if (!(options.text || '').trim()) throw new Error('Missing email text');

  return transporter.sendMail({
    ...options,
    from: NOTIFICATION_EMAIL,
  });
};

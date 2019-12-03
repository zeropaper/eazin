const nodemailer = require('nodemailer');

const {
  // NODE_ENV,
  EAZIN_MAIL_ADDRESS,
  EAZIN_MAIL_PASS,
} = process.env;

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: EAZIN_MAIL_ADDRESS,
    pass: EAZIN_MAIL_PASS,
  },
});

module.exports = (options, next) => {
  if (!EAZIN_MAIL_ADDRESS || !EAZIN_MAIL_PASS) return next(new Error('Missing mailer setup'));
  return transporter.sendMail({
    ...options,
    from: EAZIN_MAIL_ADDRESS,
  });
};

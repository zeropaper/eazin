/* eslint-disable max-len */
const templates = {};

templates.register = ({
  subject,
  token,
  siteName,
  baseURL,
}) => {
  const mailSubject = subject
    || `Email confirmation for ${siteName || baseURL} registration`;
  const link = `${baseURL}verify?token=${token}`;

  return {
    subject: mailSubject,

    text: `${mailSubject}
Use the following link in order to complete the ${siteName || baseURL} registration process.
${link}`,

    html: `<h5>${mailSubject}</h5>
<div>
Click <a href="${link}">here</a> or use the following link in order to complete the ${siteName || baseURL} registration process.
<br />
${link}
</div>`,

    // https://nodemailer.com/message/#amp-example
    // amp: '',
  };
};


templates.reset = ({
  subject,
  token,
  siteName,
  baseURL,
}) => {
  const mailSubject = subject
    || `Password reset for ${siteName || baseURL}`;
  const link = `${baseURL}verify?token=${token}`;

  return {
    subject: mailSubject,

    text: `${mailSubject}
Use the following link in order to complete the ${siteName || baseURL} password reset process.
${link}`,

    html: `<h5>${mailSubject}</h5>
<div>
Click <a href="${link}">here</a> or use the following link in order to complete the ${siteName || baseURL} password reset process.
<br />
${link}
</div>`,

    // https://nodemailer.com/message/#amp-example
    // amp: '',
  };
};


templates.emailChange = ({
  subject,
  token,
  siteName,
  baseURL,
}) => {
  const mailSubject = subject
    || `Email change confirmation for ${siteName || baseURL}`;
  const link = `${baseURL}/account/?token=${token}`;

  return {
    subject: mailSubject,

    text: `${mailSubject}
Use the following link in order to complete the ${siteName || baseURL} email change process.
${link}`,

    html: `<h5>${mailSubject}</h5>
<div>
Click <a href="${link}">here</a> or use the following link in order to complete the ${siteName || baseURL} email change process.
<br />
${link}
</div>`,

    // https://nodemailer.com/message/#amp-example
    // amp: '',
  };
};


templates.invite = ({
  subject,
  token,
  siteName,
  baseURL,
  sender,
  senderMessage,
}) => {
  const mailSubject = subject
    || `You have been invited to ${siteName || baseURL}`;
  const mailMessage = sender
    && `${sender.firstName || 'Someone'} ${sender.lastName || ''} invited you to join ${siteName || baseURL}.`;
  const link = `${baseURL}verify&token=${token}`;

  return {
    subject: mailSubject,

    text: `${mailSubject}
${sender && mailMessage}
${senderMessage && `
${senderMessage.split('\n').join('\n> ')}
`}
Use the following link to proceed.
${link}`,

    html: `<h5>${mailSubject}</h5>
${sender && `<div>${mailMessage}</div>`}
${senderMessage && `<div>${senderMessage}</div>`}
<div>
Just click <a href="${link}">here</a> or the following link to proceed.
<br />
${link}
</div>`,

    // https://nodemailer.com/message/#amp-example
    // amp: '',
  };
};

module.exports = templates;

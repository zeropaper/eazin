const templates = {};

templates.coreNotification = ({
  subject,
  content,
  siteName,
  baseURL,
}) => {
  const mailSubject = subject || `Notification from ${siteName || baseURL}`;

  return {
    subject: mailSubject,

    text: `${mailSubject}
######

${content}

######`,

    html: `<h5>${mailSubject}</h5>
<div>
${content}
</div>`,

    // https://nodemailer.com/message/#amp-example
    // amp: '',
  };
};

module.exports = templates;

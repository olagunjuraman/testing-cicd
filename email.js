const axios = require("axios");
const fs = require("fs");

// Read file as binary data
const binaryData = fs.readFileSync("./Abdurahman_Olagunju_Resume.pdf");

// Convert binary data to base64
const base64Data = Buffer.from(binaryData).toString("base64");

const emailData = {
  Recipients: [
    {
      Email: "abdurahman.olagunju@gigxpad.com",
    },
  ],
  Content: {
    From: "Raman <olagunjuraman@gmail.com>", // specify the sender's name and email address
    ReplyTo: "Raman <olagunjuraman@gmail.com>", // specify the reply-to email address
    Subject: "Job Application", // specify the email subject
    Body: [
      {
        ContentType: "HTML",
        Content:
          "<h1>Job Application</h1><p>Dear Hiring Manager,</p><p>I am writing to apply for the open position.</p>", // specify the email content
        Charset: "UTF-8",
      },
    ],
    Attachments: [
      {
        BinaryContent: base64Data,
        Name: "Abdurahman_Olagunju_Resume.pdf", // specify the filename with .pdf extension
        ContentType: "application/pdf", // specify the content type for pdf
        Size: base64Data.length,
      },
    ],
  },
};

axios
  .post("https://api.elasticemail.com/v4/emails", emailData, {
    headers: {
      "X-ElasticEmail-ApiKey":
        "5E9BB72FAF260BD4C68169C639E55FCD8F05C52399AB1A25826A27EF699698B3D486248D20F28C83228C6703FE56F763",
      "Content-Type": "application/json",
    },
  })
  .then((response) => {
    console.log(response.data);
  })
  .catch((error) => {
    console.error(error);
  });

// const axios = require("axios");
// const fs = require("fs");

// const binaryData = fs.readFileSync("./Abdurahman_Olagunju_Resume.pdf");
// const base64Data = Buffer.from(binaryData).toString("base64");

// const emailData = {
//   apikey:
//     "5E9BB72FAF260BD4C68169C639E55FCD8F05C52399AB1A25826A27EF699698B3D486248D20F28C83228C6703FE56F763",
//   bodyHtml:
//     "<h1>Job Application</h1><p>Dear Hiring Manager,</p><p>I am writing to apply for the open position.</p>",
//   from: "Raman <olagunjuraman@gmail.com>",
//   msgTo: ["olagunjuraman@gmail.com"],
//   subject: "Job Application",
// //   attachments: ["Abdurahman_Olagunju_Resume.pdf"],
// };

// axios
//   .post("https://api.elasticemail.com/v2/email/send", emailData, {
//     headers: {
//       "Content-Type": "application/x-www-form-urlencoded",
//     },
//   })
//   .then((response) => {
//     console.log(response.data);
//   })
//   .catch((error) => {
//     console.error(error);
//   });

// const axios = require("axios");
// const fs = require("fs");

// const binaryData = fs.readFileSync("./Abdurahman_Olagunju_Resume.pdf");
// const base64Data = Buffer.from(binaryData).toString("base64");

// const emailData = {
//   apikey:
//     "5E9BB72FAF260BD4C68169C639E55FCD8F05C52399AB1A25826A27EF699698B3D486248D20F28C83228C6703FE56F763",
//   subject: "Job Application",
//   from: "Raman <olagunjuraman@gmail.com>",
//   to: "olagunjuraman@gmail.com",
//   fromName: "Raman",
//   sender: "Raman <olagunjuraman@gmail.com>",
//   senderName: "Raman",
//   msgFrom: "Raman <olagunjuraman@gmail.com>",
//   msgFromName: "Raman",
//   replyTo: "reply@example.com",
//   replyToName: "Reply",
//   bodyHtml:
//     "<h1>Job Application</h1><p>Dear Hiring Manager,</p><p>I am writing to apply for the open position.</p>",
//   bodyText: "Dear Hiring Manager, I am writing to apply for the open position.",
//   charset: "UTF-8",
//   charsetBodyHtml: "UTF-8",
//   charsetBodyText: "UTF-8",
//   isTransactional: false,
//   trackOpens: true,
//   trackClicks: true,
//   attachments: ["Abdurahman_Olagunju_Resume.pdf"],
// };

// axios
//   .post("https://api.elasticemail.com/v2/email/send", emailData, {
//     headers: {
//       "Content-Type": "application/x-www-form-urlencoded",
//     },
//   })
//   .then((response) => {
//     console.log(response.data);
//   })
//   .catch((error) => {
//     console.error(error);
//   });

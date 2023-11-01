require("dotenv").config();
const nodemailer = require("nodemailer");

const sendmail = (options) => {
  const attachments = options.images.map((image, index) => {
    return {
      filename: `image${index}`,
      path: image,
    };
  });
  let transporter = nodemailer.createTransport({
    service: "gmail",

    auth: {
      user: process.env.NODEMAILER_AUTHUSER,
      pass: process.env.NODEMAILER_AUTHPASS,
    },
  });

  let mailOptions = {
    from: process.env.NODEMAILER_AUTHUSER,
    to: options.email,
    subject: "User Registration Details",
    text: "Successful Registration",
    html: `<h2>Hello ${options.name}, these are your registeration details: </h2>
     <br/> <br/><ul>
     <li>company name: ${options.company}</li>
     <li>fullname: ${options.name}</li>
     <li>email: ${options.email}</li>
     <li>phone: ${options.phone}</li>
     <li>language: ${options.language}</li>
     <li>email: ${options.domain}</li>
     <li>phone: ${options.project}</li>
     <li>language: ${options.message}</li>
     </ul>`,

    attachments: attachments,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log("error occurred while sending mail ", error);
    }

    console.log("Email sent successfully to ", mailOptions.to);
  });
};

module.exports = sendmail;
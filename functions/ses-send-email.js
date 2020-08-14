require("dotenv").config();

const nodemailer = require("nodemailer");
const aws = require("aws-sdk");
// configure AWS SDK
// aws.config.loadFromPath("./../config.json");

const cors = require("cors")({ orign: true });

exports.handler = async (request) => {
  const { email, firstname, lastName, phone, files } = request;
  console.log(request);
  const transporter = nodemailer.createTransport({
    ses: new aws.SES({
      apiVersion: "2010-12-01"
    }),
    port: 465,
    host: process.env.AWS_REGION_MAIL,
    secure: true,
    auth: {
      username: process.env.SMTP_USERNAME,
      password: process.env.SMTP_PASSWORD
    },
    sendingRate: 1,
    debug: true
  });

  try {
    Object.keys(files).map((key, index) => {
      transporter.sendMail(
        {
          attachments: [
            {
              filename: files[key].name,
              content: files[key].content
            }
          ],
          from: email ? email : null,
          to: "thomasalfredo@gmail.com",
          subject: "Message",
          text: "Testing test"
        },
        (error, info) => {
          console.log("error", error);
          console.log("envelope", info.envelope);
          console.log("MessageId", info.messageId);
        }
      );
    });
  } catch (error) {
    throw error;
  }
};

require("dotenv").config();
const bodyParser = require("body-parser");
const express = require("express");
const nodemailer = require("nodemailer");
const awsServerlessExpress = require("aws-serverless-express");
const cors = require("cors")({ orign: true });

const app = express();
const router = express.Router();

// app.use((req, res, next) => {
//   res.header("Access-Control-Allow-Origin", "*"); //cualquier frente puede hacer peticiones ajax
//   res.header("Access-Control-Allow-Headers", "*");
//   res.header("Access-Control-Allow-Methods", "*");
//   res.header("Allow", "*");
//   next();
// });

app.use(express.json());

app.use(bodyParser.json());

app.post("/ses-send-email", (req, res) => {
  const mailOptions = {
    from: "orders@veck.store",
    to: "thomasalfredo@gmail.com",
    subject: "contact form message",
    html: `<h1>Order Confirmation</h1>
       <p> <b>Email: </b> </p>`
  };

  const transporter = nodemailer.createTransport({
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

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.status(error.responseCode).send(error.response);
    } else {
      console.log("Message sent: " + info.response);
      res.status(200).send(info);
    }
  });
});

// // exports.sendEmail = async (request) => {
// //   const { email, firstname, lastName, phone, files } = JSON.parse(request);
// //   try {
// //     Object.keys(files).map((index, key) => {
// //       transporter.sendMail({
// //         attachments: [
// //           {
// //             filename: files[key].name,
// //             content: files[key].content
// //           }
// //         ],
// //         from: "thomasalfredo@gmail.com",
// //         to: "thomasalfredo@gmail.com",
// //         subject: "Message",
// //         text: "Testing test"
// //       });
// //     });
// //   } catch (error) {
// //     throw error;
// //   }
// // };

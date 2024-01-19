import formModel from "../model/formModel.js";
import nodemailer from "nodemailer"

const transporter = nodemailer.createTransport({
    // host: "sandbox.smtp.mailtrap.io",
    // port: 2525,
    service:"gmail",
    auth: {
      user: "manishakumari29101994@gmail.com",
      pass: "vlrxoaqdciovybek",
    },
  });

const createForm = async function (req, res) {
  try {
    const data = req.body;
    const formCreate = await formModel.create(data)
    const mailOptions = {
        from: "manishakumari29101994@gmail.com", // Replace with your own Gmail address
        to: "admin@hittok.in", // Replace with the recipient's email address
        subject: "form message",
        text: `message:- ${data.message}`,
      };
       await transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
          console.log(error);
        } else {
          console.log("Email sent: " + info.response);
        }
      });
    res.send({
        success: true,
        message: "HELLO SIR",
        data:formCreate ,

        
      });
  } catch (error) {
    console.log(error);
  }
};



export default {createForm};

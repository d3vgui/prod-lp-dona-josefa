require("dotenv").config();
const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
app.use(cors());
app.use(bodyParser.json());

const transporter = nodemailer.createTransport({
    host: "smtpout.secureserver.net",
    port: 3535,
    secure: true,
    auth: {
        user: process.env.EMAIL_USER, 
        pass: process.env.EMAIL_PASS 
    }
});

app.post("/send-email", (req, res) => {
    const { email } = req.body;

    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: email,
        subject: "ENVÍO GRATIS | DOÑA JOSEFA",
        html: `
        <h1>FELICIDADES!</h1>
        <p>¡Gracias por participar! Obtienes 1 año de envío gratis. Tu carnet de tertuliantes es: JOSEFA365</p>
        <br>
        <p>ATENCÍON: válido sólo en México</p>
        <br>
        <img src="cid:imgEmail" alt="Envío gratis" style="width: 300px; height: auto;">
    `,
        attachments: [
            {
                filename: "img-email.png",
                path: "./images/img-email.png",
                cid: "imgEmail"
            }
        ]
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return res.status(500).json({ error });
        }
        res.json({ success: true, message: "Correo electrónico enviado!" });
    });
});

app.listen(3001, () => console.log("Servidor rodando na porta 3001"));

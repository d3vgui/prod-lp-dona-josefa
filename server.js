require("dotenv").config();
const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
app.use(cors());
app.use(bodyParser.json());

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.EMAIL_USER, // Seu email
        pass: process.env.EMAIL_PASS  // Senha do app
    }
});

app.post("/send-email", (req, res) => {
    const { email } = req.body;

    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: email,
        // basta editar a mensagem abaixo com o título e a mensagem do email
        subject: "Parabéns! Você ganhou 1 ano de frete grátis",
        text: "Parabéns! Você ganhou 1 ano de frete grátis. Em breve enviaremos mais detalhes."
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return res.status(500).json({ error });
        }
        res.json({ success: true, message: "E-mail enviado!" });
    });
});

app.listen(3001, () => console.log("Servidor rodando na porta 3001"));

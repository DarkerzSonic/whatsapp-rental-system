import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

import qrcode from 'qrcode-terminal';
import { Client } from 'whatsapp-web.js';

const app = express();
const client = new Client();

// WhatsApp Web Login with QR Code
client.on('qr', qr => {
    qrcode.generate(qr, {small: true});
});

client.on('ready', () => {
    console.log('WhatsApp Client is ready!');
});

client.initialize();

app.use(cors({
    origin: 'http://127.0.0.1:3000', // use your actual domain name (or localhost), using * is not recommended
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'HEAD', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Origin', 'X-Requested-With', 'Accept', 'x-client-key', 'x-client-token', 'x-client-secret', 'Authorization'],
    credentials: true
}))
app.use(bodyParser.json());

app.listen(process.env.PORT || 8000, ()=>{
    console.log('Listening on port 8000...');
})

app.post("/", (req, res)=>{

    const chatId = req.body.contactNo + "@c.us";
    var message = req.body.monthYear + '\n\n';
    var totalAmount = 0;

    const paymentDetails = req.body.payments;
    paymentDetails.map(payment => {
        message += payment.name + ": RM" + parseFloat(payment.amount).toFixed(2) + '\n';
        totalAmount += parseFloat(payment.amount);
    });
    
    // append total amount to message
    message += '\nTotal = RM' + totalAmount.toFixed(2);

    // send WhatsApp message to contactNo
    client.sendMessage(chatId, message).then(result=>{
        res.status(200);
        res.send("Sent successfully!").status(200);
    })
    .catch(error=>{
        res.status(400);
        res.send("Error sending message!").status(400);
    });
})
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


let transport = nodemailer.createTransport({
  host: 'smtp-mail.outlook.com',
  port: 587,
  auth: {
    user: 'ostrowski.dominik@outlook.com',
    pass: '48GoLiAt$*'
  },
  tls: {
    ciphers: 'SSLv3'
  }
});

const mail = 'Cześć mam na imię Dominik i kontaktuję się z tobą w sprawie zlecenia';

const message = {
  from: 'ostrowski.dominik@outlook.com', // Sender address
  to: ['ostrowski.dominik@gmail.com', 'ostrowski.dominik@outlook.com'],         // List of recipients
  subject: 'Kontakt ze strony', // Subject line
  text: mail // Plain text body
};

// API calls
app.get('/api/mail', async (req, res) => {
  await transport.sendMail(message, function (err, info) {
    if (err) {
      console.log(err)
    } else {
      console.log(info);
    }
  });
});

app.post('/api/world', (req, res) => {
  console.log(req.body);
  res.send(
    `I received your POST request. This is what you sent me: ${req.body.post}`,
  );
});

if (process.env.NODE_ENV === 'production') {
  // Serve any static files
  app.use(express.static(path.join(__dirname, 'client/build')));

  // Handle React routing, return all requests to React app
  app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });
}

app.listen(port, () => console.log(`Listening on port ${port}`));

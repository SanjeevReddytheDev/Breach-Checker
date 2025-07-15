const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.use(express.static('public'));

const breachedEmailsPath = path.join(__dirname, 'data', 'breached-emails.json');

app.get('/', (req, res) => {
  res.render('index');
});

app.post('/check', (req, res) => {
  const { email } = req.body;
  const breachedEmails = JSON.parse(fs.readFileSync(breachedEmailsPath));
  const isBreached = breachedEmails.includes(email.toLowerCase());
  res.render('result', { email, isBreached });
});

app.listen(port, () => {
  console.log(`BreachChecker running on port ${port}`);
});

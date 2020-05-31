const fs = require('fs');
const path = require('path');
const express = require('express');
const router = express.Router();
const sendSms = require('./twilio');

const rawFortunes = fs.readFileSync(path.resolve(__dirname,'./../fortunes.json'));
const fortune = JSON.parse(rawFortunes);

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Twilio Fortune Cookie 🍪' });
});

router.post('/send-cookie', async function(req, res, next){
  const chosenFortune = fortune[Math.floor(Math.random() * 101)];
  const sendMessage = await sendSms(chosenFortune);
  console.log(sendMessage);
  res.render('cookie',{ title: 'Twilio Fortune Cookie 🍪', fortune: chosenFortune.message });
})

module.exports = router;

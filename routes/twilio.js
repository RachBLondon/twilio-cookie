const env = require('env2')('.env');
const twilio = require('twilio');
const accountSid = process.env.ACCOUNT_SID;
const authToken = process.env.AUTH_TOKEN;
const client = new twilio(accountSid, authToken);
const rachNumber = process.env.VERIFIED_CALLEDlER_ID

const textCookie  = function (fortune){
  client.messages
    .create({
      to: rachNumber,
      from: process.env.SENDER_NUMBER,
      body: `Your fortune cookie 🍪 ${fortune.message}`,
    }).then((message) => (console.log(message.sid)));
}

module.exports = textCookie;
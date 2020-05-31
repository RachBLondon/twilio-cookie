# twilio-cookie

A simple express application to text a random fortune cookie to a verified user.

1. Git clone - `git clone https://github.com/RachBLondon/twilio-cookie.git` + `npm i`
2. Create *.env* file in the route directory - `touch .env`
3. Register as a developer at twilio.com
4. Navigate to the twilio developer console https://www.twilio.com/console
5. Add the following environment variables to your .env file:
```
  export SENDER_NUMBER='trial number' // a trial US number supplied by twilio
  export VERIFIED_CALLEDlER_ID='' //add your own telephone number to https://www.twilio.com/console/phone-numbers/verified
  export ACCOUNT_SID=account sid
  export AUTH_TOKEN=auth token
  ```
  6. Run `npm start` and visit http://localhost:3000/ - you should be able to send yourself a fortune cooke message!🍪

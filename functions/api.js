const express = require('express');
const serverless = require('serverless-http');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());

app.get('/.netlify/functions/api', (req, res) => {
  const accountVerificationReportId = req.query.account_verification_report_id;
  
  if (!accountVerificationReportId) {
    return res.status(400).send('Missing account_verification_report_id parameter');
  }

  const htmlResponse = `
    <html>
      <head>
        <title>Account Verification Report</title>
      </head>
      <body>
        <h1>Account Verification Report</h1>
        <p>Account Verification Report ID: ${accountVerificationReportId}</p>
      </body>
    </html>
  `

  res.setHeader('Content-Type', 'text/html');
  res.send(htmlResponse);
});

// Export the serverless function
module.exports.handler = serverless(app);

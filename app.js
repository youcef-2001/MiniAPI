const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());

const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  const accountVerificationReportId = req.query.account_verification_report_id;
  
  if (!accountVerificationReportId) {
    return res.status(400).send('Missing account_verification_report_id parameter');
  }

  const htmlResponse =  {
    "account_verification_report_id": accountVerificationReportId,
    "status": "completed",
  };

  res.setHeader('Content-Type', 'application/json');
  res.send(htmlResponse);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

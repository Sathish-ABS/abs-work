const express = require('express');
const app = express();
const port = 3000;
app.get('/test', (req, res) => {
  res.send('<h3>Going to learn CI/CD in Gitlab V1</h3>');
});
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

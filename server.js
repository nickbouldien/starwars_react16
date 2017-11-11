import express from 'express';
// const fallback = require('express-history-api-fallback');
const app = express();
const PORT = process.env.$PORT || process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));
// app.use(fallback(__dirname + '/public/index.html'));
// app.listen(PORT);

app.get('*', function(req, res) {
  res.sendFile(__dirname + '/public/index.html');
});

app.listen(PORT, function () {
  console.log(`Listening on port: ${PORT}`);
});

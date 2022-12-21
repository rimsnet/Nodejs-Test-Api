const express = require('express');
const app = express();

const PORT = 8080;

app.get("/", (req, res) => {
  return res.send("Received a GET HTTP method");
});

app.listen(PORT, () =>
  console.log(`Example app listening on port ${PORT}!`)
);

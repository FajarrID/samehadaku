const express = require('express');
const cors = require('cors');
const routes = require('./routes/index.js');

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use("/api", routes);

app.use("/", (req, res) => {
  res.json({
    message: "Welcome",
    host: req.protocol + "s://" + req.get("host")
  });
});

app.listen(port, () => {
  console.log(`Server running at port ${port}`);
});

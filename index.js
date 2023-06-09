const connectTomongo = require("./db");
const express = require("express");
connectTomongo();
const app = express();
const port = 5000;
app.use("/api/auth", require("./routes/auth"));
app.use("/api/user", require("./routes/user"));
app.use("/api/ps", require("./routes/ps"));
app.listen(port, () => {
  console.log("app is listening on port " + port);
});

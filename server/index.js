const express = require("express");
const body_parser = require("body-parser");
const cors = require("cors");

const app = express();

// Middleware
app.use(body_parser.json());
app.use(cors());

const post = require("./routes/api/posts");
app.use("/api/posts", post);

// Handle production
if (process.env.NODE_ENV === "production") {
  // Static folder
  app.use(express.static(__dirname + "/public/"));

  // Handle SPA
  app.get(/.*/, (req, res) => res.sendFile(__dirname + "/public/index.html"));
}

const port = process.env.PORT || 14045;

app.listen(port, console.log(`Edo App running in ${port} cuy!`));

const express = require("express");
const body_parser = require("body-parser");
const cors = require("cors");

const app = express();

// Middleware
app.use(body_parser.json());
app.use(cors());

const post = require("./routes/api/posts");
app.use("/api/posts", post);

const port = process.env.PORT || 14045;

app.listen(port, console.log(`Edo App running in ${port} cuy!`));

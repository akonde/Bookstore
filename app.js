const express = require("express");
require("dotenv").config();
const { connectToMongoDb } = require("./db");
const PORT = process.env.PORT;
const bookRouter = require("./routes/book")

const app = express();
// Connecting to MongoDB Instance
connectToMongoDb();

app.use(express.json());
app.use("/books", bookRouter)

app.get("/", (req, res) => {
  res.send("Welcome Homepage");
});

app.listen(PORT, () => {
  console.log(`Server started on PORT: http://locahost:${PORT}`);
});

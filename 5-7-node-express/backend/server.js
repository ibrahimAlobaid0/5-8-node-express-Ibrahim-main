import express from "express";
import cors from "cors";
import { getRandomQuote } from "./quotes.js";

{/*write code for cors*/}
const app = express();
const PORT = 3001;
app.use(cors());



{/*write code to define routes*/}

app.get("/api/quote", (req, res) => {
  const quote = getRandomQuote();
  res.json({ quote });
});
app.get("/", (req, res) => {
    res.send("Welcome to the Quotes API!");
});

{/*write code to create server*/}

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

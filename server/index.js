import express from "express";
import db from "./db.js";
import bodyParser from "body-parser";
import cors from "cors"

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.get("/", async (req, res) => {
  let data = [];
  try {
    const data = await db.query("SELECT * FROM quotes");
    // if (data.rows && data.rows.length > 0) {
      const rand = Math.floor(Math.random() * data.rows.length);
      res.json(data.rows[rand]);
    // } else {
    //   res.status(404).json({ error: "No quotes found" });
    // }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.listen(port, () => {
  console.log(`app is running at http://localhost/3000`);
});

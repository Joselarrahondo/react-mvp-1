import express from "express";
import cors from "cors";
import postgres from "postgres";


const sql = postgres({ database: "restaurants" });

const app = express();

app.use(cors());
app.use(express.json());

app.get("/restaurant", (req, res) => {
  sql`SELECT * FROM restaurant`.then((result) => {
    res.send(result);
  });
}); 

app.get("/restaurant/:foodtype", (req, res) => {
  const foodType = req.params.foodtype;
  sql`SELECT * FROM restaurant WHERE foodtype = ${foodType}`.then((result) => {
    if (result.length === 0) {
      res.set("Content-type", "text/plain");
      res.status(404);
      res.end("Not Found");
    } else {
      res.json(result);
    }
  })
});


app.listen(8000, () => {
  console.log("listening on port 8000");
});

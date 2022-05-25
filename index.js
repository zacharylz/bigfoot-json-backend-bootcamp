import express from "express";
import { getSightings } from "./utils.js";

const PORT = 3000;
const app = express();

app.get("/", async (req, res) => {
  const sightings = await getSightings();
  res.json(sightings);
});

app.listen(PORT, () => {
  console.log(`Express app listening on port ${PORT}!`);
});

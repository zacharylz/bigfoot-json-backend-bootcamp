import express from "express";
import cors from "cors";
// import { getSightings } from "./utils.js";
import "./environment.js";
import SightingRouter from "./routers/SightingRouter.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/", new SightingRouter().router);

// app.get("/sightings", async (req, res) => {
//   const sightings = await getSightings();
//   res.json(sightings);
// });

// app.get("/sightings/:report_number", async (req, res) => {
//   const sightings = await getSightings(req.params.report_number);
//   res.json(sightings);
// });

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Express app listening on port ${PORT}!`);
});

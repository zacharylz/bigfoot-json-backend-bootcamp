// const express = require("express");
// const { getSightings } = require("./utils.js");
// require("dotenv").config();
import express from "express";
import cors from "cors";
import { getSightings, getSpecificSighting } from "./utils.js";
import "dotenv/config";

const PORT = process.env.PORT;
const app = express();

app.use(cors());

app.get("/sightings", async (req, res) => {
  const sightings = await getSightings();
  res.json(sightings);
});

app.get("/sightings/:report_number", async (req, res) => {
  const sightings = await getSpecificSighting(req.params.report_number);
  res.json(sightings);
});

app.listen(PORT, () => {
  console.log(`Express app listening on port ${PORT}!`);
});

// const { readFile } = require("fs/promises");
import { readFile } from "fs/promises";

export const getSightings = async () => {
  // Retrieve sightings.json file contents as string
  const sightings = await readFile("./sightings.json", "utf8");
  // Return sightings as an object
  return JSON.parse(sightings);
};

export const getSpecificSighting = async (report_number) => {
  // Retrieve sightings.json file contents as string
  const sightingsString = await readFile("./sightings.json", "utf8");
  // Return sightings as an object
  const sightings = JSON.parse(sightingsString);
  for (let sighting of sightings) {
    if (sighting.REPORT_NUMBER == report_number) {
      return sighting;
    }
  }
  return "Report not found";
};

// module.exports = {
//   getSightings
// }

// const { readFile } = require("fs/promises");
import { readFile } from "fs/promises";

// export const getSightings = async () => {
//   // Retrieve sightings.json file contents as string
//   const sightings = await readFile("./sightings.json", "utf8");
//   // Return sightings as an object
//   return JSON.parse(sightings);
// };

export const getSightings = async (report_number = null) => {
  // Retrieve sightings.json file contents as string
  const sightingsString = await readFile("./sightings.json", "utf8");
  // Return sightings as an object
  const sightings = JSON.parse(sightingsString);
  if (!report_number) {
    return sightings;
  }
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

import { getSightings } from "../utils.js";

class SightingController {
  getAllSightings = async (req, res) => {
    const sightings = await getSightings();
    res.json(sightings);
  };

  getSpecificSighting = async (req, res) => {
    const sightings = await getSightings(req.params.report_number);
    res.json(sightings);
  };
}

export default SightingController;

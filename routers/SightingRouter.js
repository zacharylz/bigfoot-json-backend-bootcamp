import { Router } from "express";
import SightingController from "../controllers/SightingController.js";

class SightingRouter {
  path = "/sightings";

  router = Router();

  controller = new SightingController();

  constructor() {
    this.initializeRoutes();
  }

  initializeRoutes = () => {
    this.router.get(`${this.path}/`, this.controller.getAllSightings);
    this.router.get(
      `${this.path}/:report_number`,
      this.controller.getSpecificSighting
    );
  };
}

export default SightingRouter;

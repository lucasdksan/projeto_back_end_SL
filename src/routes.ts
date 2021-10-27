import { Router } from "express";

import { CreateExcelController } from "./controllers/CreateExcelController";

const routes = Router();
const createExcelController = new CreateExcelController();

routes.post("/create", createExcelController.handle);

export { routes };
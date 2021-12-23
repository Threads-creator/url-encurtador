import { URLController } from "../controller/URLController";
import { Router } from "express";

const urlRouter = Router();

const urlController = new URLController();


urlRouter.post('/shorten', urlController.shorten);
urlRouter.get('/:hash', urlController.redirect);

export default urlRouter;
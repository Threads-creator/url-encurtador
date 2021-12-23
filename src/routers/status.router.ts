import { Router, Request, Response, NextFunction } from "express";
import { StatusCodes } from "http-status-codes";

const statusRouter = Router();

statusRouter.get('/status', (req: Request, res: Response, next: NextFunction) => {
    res.status(StatusCodes.OK).send({ status: "OK", desc: "API em funcionamento, se tiver problemas consulte um adm "});
});

export default statusRouter;
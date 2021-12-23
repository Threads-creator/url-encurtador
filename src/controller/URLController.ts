import { config } from "../config/Constants";
import { NextFunction, Request, Response } from "express";
import shortid from "shortid";
import { URLModel } from "../database/model/URL";
import { StatusCodes } from "http-status-codes";

export class URLController {

    public async shorten (req: Request, res: Response, next: NextFunction): Promise<void> {
        const { originURL } = req.body;
        const url = await URLModel.findOne({ originURL });

        if(url){
            res.status(StatusCodes.OK).json(url);
            return;
        }
        const hash = shortid.generate();
        const shortUrl = `${config.API_URL}/${hash}`;
        const newURL = await URLModel.create({ hash, shortURL: shortUrl, originURL})
        
        res.status(StatusCodes.CREATED).json(newURL);
    }

    public async redirect(req: Request, res: Response, next: NextFunction) {
        const { hash } = req.params;
        const url = await URLModel.findOne({ hash });
        if(url){
            res.redirect(url.originURL);
            return;
        }

        res.status(StatusCodes.BAD_REQUEST).json({ info: "Hash invalido ou não encontrado "});
    }
}
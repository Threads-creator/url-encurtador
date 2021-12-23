import Express, { NextFunction, Request, Response } from 'express';
import { MongoConnection } from './database/MongoConnection';
import { config } from './config/Constants';
import urlRouter from './routers/url.router';
import statusRouter from './routers/status.router';


const app = Express();

app.use(Express.json());

new MongoConnection(true);
//ou const database = new MongoConnection(true);


app.use(statusRouter);
app.use(urlRouter);



app.listen(config.PORT, () => {
    console.log(`Server running at ${config.API_URL}`);
})




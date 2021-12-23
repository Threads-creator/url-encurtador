import { config } from "../config/Constants";
import  mongoose from "mongoose";

export class MongoConnection {

    constructor(connet?: boolean){
        if(this.instance === null){
            this.instance = new MongoConnection(connet);
        }

        if(connet){
            this.connect();
        }

        return this.instance;
    }

    public instance: MongoConnection;


    public async connect(): Promise<void> {
        try {
            await mongoose.connect(config.MONGO_CONNECTION);
            console.log('Banco de dados conectado !');
        } catch (error) {
            console.error(error.message);
            process.exit(1);
        }
    }
}
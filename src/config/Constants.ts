require('dotenv').config();

export const config = {
    PORT: process.env.API_PORT? process.env.API_PORT : 5000,
    API_URL: process.env.API_URL? process.env.API_URL : "http://localhost:5000",
    MONGO_CONNECTION: process.env.MONGO_CONNECTION? process.env.MONGO_CONNECTION : "mongodb+srv://admin:admin@url-encurtador.rbokj.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
}
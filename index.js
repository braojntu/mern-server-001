//Import packages, modules, scripts
import express from 'express';
import dotenv from "dotenv";
import cors from 'cors';
import { managerRouter } from './routes/manager.js';
import { userRouter } from './routes/user.js';
import { movieRouter } from './routes/movie.js';

//Initialization
dotenv.config();
const PORT = process.env.PORT;
const app = express();
//converts body present in the request into json format
app.use(express.json());
//Cors required for cross orgin requestes
app.use(cors());

//Server Home Route
app.get('/', function (request, response) {
    response.send('Welcome to Mern Backend - Dev Env !!!')
})

app.use("/managers", managerRouter);
app.use("/users", userRouter);
app.use("/movies", movieRouter);

//call the connection function
app.listen(PORT, () => console.log("Express Server Listening on port: " + PORT));
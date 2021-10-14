import express from 'express';
import auth from '../middleware/auth.js'
import { createConnection } from "../createMongoConn.js";
import { createMovie, getMovie } from "../helper.js"; //.. one level up & . current folder

//Create and export Router
const router = express.Router();

//1. get movie
router.get('/', async function (request, response) {
    const client = await createConnection();
    const movie = await getMovie(client);
    response.send(movie);
})

//2. create new movie
router.post('/', async function (request, response) {
    const client = await createConnection();
    const addMovie = request.body;
    const result = await createMovie(client, addMovie);
    response.send(result);
})

export const movieRouter = router;
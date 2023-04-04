import express from 'express';
import {connectToDatabase} from './db';

const PORT = 8000;
const app = express();

app.use(express.json());

app.use('*', (req, res) => {
    console.log(req.url)
    res.end('hello')
})

connectToDatabase().then(() => {
    app.listen(PORT, async () => {
        console.log(`Server listening on port http://localhost:${PORT}`);
    })
})




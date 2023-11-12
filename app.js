const express = require('express');
const dotenv = require('dotenv');
const db = require('./database/db');
dotenv.config();

const app = express();
const port = process.env.APP_PORT || 3000;


app.get('/', (req, res) => {
    res.json({
        message: "Success",
        data: []
    });
});


app.get('/words', async (req, res) => {
    const perPage = req.query?.per_page || 50;
    const currentPage = req.query?.current_page || 1;

    const words = await db.select().table('words').paginate({ perPage, currentPage });

    res.json({
        message: "Success",
        data: words
    });
});


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});
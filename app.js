const express = require('express');
var cors = require('cors')
const dotenv = require('dotenv');
const db = require('./database/db');

dotenv.config();

const app = express();
app.use(cors())
const port = process.env.APP_PORT || 5000;


app.get('/', (req, res) => {
    res.json({
        message: "Success",
        data: []
    });
});


app.get('/words', async (req, res) => {
    const perPage = req.query?.per_page || 50;
    const currentPage = req.query?.current_page || 1;
    const filterBy = req.query?.filter || '';

    const words = await db.select()
        .where('word', 'like', filterBy + '%')
        .table('words')
        .paginate({ perPage, currentPage, isLengthAware: true});

    res.json({
        message: "Success",
        data: words
    });
});


app.get('/letter-word-count', async (req, res) => {
    const words = await db('words')
        .select(db.raw('SUBSTRING(word, 1, 1) AS letter, COUNT(*) AS count'))
        .groupBy(db.raw('SUBSTRING(word, 1, 1)'))
        .orderBy(db.raw('SUBSTRING(word, 1, 1)'));


    res.json({
        message: "Success",
        data: words
    });
});


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});
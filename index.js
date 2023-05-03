const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;


const cuisine = require ('./data/cuisine.json');

app.use(cors());

app.get('/', (req, res) => {
    res.send('Dragon is running')
});

app.get('/cuisine', (req, res) => {
    res.send(cuisine);
})

app.get('/cuisine/:id', (req, res) => {
    const id = req.params.id;
    const selectedCuisine = cuisine.find(n => n.id === id);
    res.send(selectedCuisine)
})


app.listen(port, () => {
    console.log(`Dragon API is running on port: ${port}`)
})

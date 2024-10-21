const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.status(200).json({
        status: "Success",
        message: "API fetched succesfully"
    })
})

app.listen(3000, () => {
    console.log('Server up and running');
})
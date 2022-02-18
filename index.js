const express = require('express');
const router = require('./routes/routes');

const app = express();
app.use('/', router);

app.listen(8080, () => {
    console.log(`Server has started and is listening on port 8080`);
});
const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config({ path: `.${process.env.NODE_ENV}.env` })
app.use(cors());

const ApiRoutes = require('./Routes/Api.route');
app.use('/api', ApiRoutes);

app.get('/', (req, res) => {
    res.status(200);
    res.send({
        message: 'We are live'
    });
});

app.use((req, res, next) => {
    const error = new Error('Not Found');
    error.status = 404;
    next(error);
});

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.send({
        error: {
            status: error.status || 500,
            message: error.message
        }
    });
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, console.log(`Server started on port ${PORT}`));
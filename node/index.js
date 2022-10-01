const express = require('express');
const app = express();
const axios = require('axios');
const cors = require('cors');
const aws4 = require('aws4');
require('dotenv').config({ path: `.${process.env.NODE_ENV}.env` })

app.use(cors());

// LAMBDA fetch-fng-api
app.get('/fetch-fng', async (req, res, next) => {
    const functionUrl = `https://${process.env.AWS_LAMBDA_FUNCTION_ID}.lambda-url.${process.env.AWS_DEFAULT_REGION}.on.aws` ?? ''
    const { host } = new URL(functionUrl)

    const signed = aws4.sign({
        method: 'POST',
        service: 'lambda',
        region: `${process.env.AWS_DEFAULT_REGION}`,
        host,
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ test: 'aws4 message' }),
    }, { accessKeyId: process.env.AWS_ACCESS_KEY_ID, secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY })

    try {
        const response = await axios({
            ...signed,
            url: functionUrl,
            data: { test: 'aws4 message' },
        })

        res.send(response.data);
        next();
    } catch (error) {
        console.error('Something went wrong: ', error)
        throw error
    }
});

// API GATEWAY fetch-fng-api
app.post('/fetch', async (req, res, next) => {
    try {
        const response = await axios.post(
            `${process.env.AWS_API_GATEWAY_URL}/${process.env.NODE_ENV}/fear-and-greed/fetch`,
            {
                "TableName": "FearAndGreed",
                "ReturnConsumedCapacity": "TOTAL"
            },
            {
                headers: {
                    'x-api-key': `${process.env.AWS_API_GATEWAY_KEY}`
                },
            }
        );

        res.send(response.data);
        next();
    } catch (error) {
        console.log(error)
        res.status(500);
    }
});

app.get('/cloufront-fetch', async (req, res, next) => {
    const { query } = req;
    try {
        const response = await axios.get(
            `${process.env.AWS_CLOUDFRONT_URL}/${process.env.NODE_ENV}/fear-and-greed?limit=${query?.limit}`,
            {
                headers: {
                    'x-api-key': `${process.env.AWS_API_GATEWAY_KEY}`
                },
            }
        );

        res.send(response.data);
        next();
    } catch (error) {
        res.status(500);
    }
})

const PORT = process.env.PORT || 8080;
  
app.listen(PORT, console.log(`Server started on port ${PORT}`));
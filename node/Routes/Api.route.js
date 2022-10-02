const express = require('express');
const router = express.Router();
const aws4 = require('aws4');
const axios = require('axios');

router.get('/', (req, res, next) => {
    res.send('hello world from API route!!!');
    next();
});

// LAMBDA fetch-fng-api
router.get('/fetch-fng', async (req, res, next) => {
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
        next(new Error("Couldn't fetch resources from AWS"));
        throw error
    }
});

// API GATEWAY fetch-fng-api
router.post('/fetch', async (req, res, next) => {
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

// CLOUDFRONT fetch-fng-api
router.get('/cloufront-fetch', async (req, res, next) => {
    const { query } = req;

    try {
        const response = await axios.get(
            `${process.env.AWS_CLOUDFRONT_URL}/${process.env.NODE_ENV}/fear-and-greed?limit=${query?.limit ?? 1}`,
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
});

module.exports = router;
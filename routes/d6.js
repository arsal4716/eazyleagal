const express = require('express');
const router = express.Router();
const axios = require('axios');


router.post('/api/track-drive', async (req, res) => {
    try {
        const response = await axios.post('https://elite-calls-com.trackdrive.com/api/v1/leads', req.body);
        console.log('Received data from client:', req.body);
        res.json(response.data);
        console.log(response.data);
    } catch (error) {
        console.error('Error calling Track Drive API:', error);
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
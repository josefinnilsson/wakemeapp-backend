var express = require('express');
var router = express.Router();
const request = require('request')

/* GET users listing. */
router.get('/', function(req, res, next) {
    const stations_key = '0054b64a7d914d38b4e9f9cc47c920ac'
    const options = {
        url: `https://api.sl.se/api2/typeahead.json?key=${stations_key}&searchstring=Farsta`,
        headers: {
            'Access-Control-Allow-Origin': 'http://localhost:3000'
        }
    }
    let json = ""
    return new Promise(resolve => {
        request(options, (err, res, body) => {
            resolve(body)
        })
    }).then(body => {
        res.json(JSON.stringify(JSON.parse(body).ResponseData))
    })
});

module.exports = router;

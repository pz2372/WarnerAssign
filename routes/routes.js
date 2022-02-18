const router = require('express').Router()

let weather = "";

router.get('/getweather', (req, res) => {
    const weathers = ["Sunny", "Raining", "Snowing", "Gloomy"];
    const random = Math.floor(Math.random() * 4);
    weather = weathers[random];
    res.json(weather);
})

router.get('/useumbrella', (req, res) => {
    res.json(weather === "Raining");
})

module.exports = router;
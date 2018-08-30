var express = require('express')

var router = express.Router()
var showcaseCarousel = require('./api/showcaseCarousel.route')


router.use('/showcasecarousel', showcaseCarousel);


module.exports = router;
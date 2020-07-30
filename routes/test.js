var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    let data = [
            "Yehuda Katz",
            "Alan Johnson",
            "Charles Jolley",
        ]
;
    res.render('test', { title: 'Test Page' , data});
});

module.exports = router;

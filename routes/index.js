'use strict';
/* eslint-disable new-cap */

const router = require('express').Router();

router.use('/seed', require('./seed'));
router.use('/services', require('./services'))

// router.get("/*", (req, res) => {
//     res.sendFile(HTML_FILE);
// });


module.exports = router;
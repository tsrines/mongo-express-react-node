const express = require('express');
const router = express.Router();

// @route GET api/posts
// @desc      test
// @access    public

router.get('/', async (req, res) => res.send('Posts route'));

module.exports = router;

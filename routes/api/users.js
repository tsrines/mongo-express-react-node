const express = require('express');
const router = express.Router();

// @route GET api/users
// @desc      test
// @access    public

router.get('/', async (req, res) => res.send('User route'));

module.exports = router;

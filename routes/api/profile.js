const express = require('express');
const router = express.Router();

// @route GET api/profile
// @desc      test
// @access    public

router.get('/', async (req, res) => res.send('Profile route'));

module.exports = router;

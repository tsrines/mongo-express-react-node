const express = require('express');
const router = express.Router();

// @route GET api/auth
// @desc      test
// @access    public

router.get('/', async (req, res) => res.send('Auth route'));

module.exports = router;

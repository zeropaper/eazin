const express = require('express');
// const httperrors = require('httperrors');

// const bearer = require('../user/user.auth.bearer');
const requestHook = require('../../util/requestHook');

const router = express.Router();

const noContent = (req, res) => res.status(204).end();

router.post('/', requestHook, noContent);

module.exports = router;

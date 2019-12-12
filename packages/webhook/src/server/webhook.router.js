/* eslint-disable import/no-extraneous-dependencies */
const express = require('express');
// const httperrors = require('httperrors');

// const bearer = require('eazin-users/src/server/user.auth.bearer');
const requestHook = require('eazin-server/src/util/requestHook');

const router = express.Router();

const noContent = (req, res) => res.status(204).end();

router.post('/', requestHook, noContent);

module.exports = router;

/* eslint-disable import/no-extraneous-dependencies */
const express = require('express');
// const httperrors = require('httperrors');

// const bearer = require('eazinpublishingtest-users/server/user.auth.bearer');
const requestHook = require('eazinpublishingtest-core/server/util/requestHook');

const router = express.Router();

const noContent = (req, res) => res.status(204).end();

router.post('/', requestHook, noContent);

module.exports = router;

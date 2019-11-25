const express = require('express');

const check = require('../user/user.auth.checkRoles');
const bearer = require('../user/user.auth.bearer');
const requestHook = require('../../util/requestHook');

const companyIdParam = require('./company.param');

const router = express.Router();

const sanitizeCompanyInput = ({ name }) => ({ name });

const sanitizeCompanyOutput = ({
  name,
  _id: id,
  createdAt,
  updatedAt,
} = {}) => ({
  name,
  id,
  createdAt,
  updatedAt,
});

router.param('companyId', companyIdParam);

router.get(
  '/',
  bearer,
  check(['get:companies']),
  requestHook,
  (req, res, next) => {
    const Company = req.db.model('Company');
    const handle = (err, companies) => {
      if (err) return next(err);
      res.send(companies.map(sanitizeCompanyOutput));
    };

    if (req.user.isAdmin) {
      Company.find({}, handle);
      return;
    }

    Company.find({ _id: { $in: req.user.companies } }, handle);
  },
);

router.post(
  '/',
  bearer,
  check(['post:companies']),
  requestHook,
  async (req, res, next) => {
    try {
      const sanitized = sanitizeCompanyInput(req.body);
      const company = await req.db.model('Company').create(sanitized);
      if (!req.user.isAdmin) {
        req.user.companies.push(company._id);
        req.user.roles.push(`get:companies/${company._id}`);
        req.user.roles.push(`patch:companies/${company._id}`);
        req.user.roles.push(`delete:companies/${company._id}`);
        await req.user.save();
      }
      res.status(201).send(sanitizeCompanyOutput(company));
    } catch (err) {
      next(err);
    }
  },
);

router.get(
  '/:companyId',
  bearer,
  check(['get:companies/:companyId']),
  requestHook,
  (req, res) => res.send(sanitizeCompanyOutput(req.loadedParams.companyId)),
);

router.get(
  '/:companyId/users',
  bearer,
  check(['get:companies/:companyId']),
  requestHook,
  (req, res, next) => {
    const User = req.db.model('User');
    User.find({ companies: req.params.companyId }, (err, users) => {
      if (err) return next(err);
      res.status(200).send((users || []).map(User.sanitizeOutput));
    });
  },
);

router.patch(
  '/:companyId',
  bearer,
  check(['patch:companies/:companyId']),
  requestHook,
  (req, res, next) => {
    const { companyId: company } = (req.loadedParams || {});
    const sanitized = sanitizeCompanyInput(req.body);

    Object.keys(sanitized)
      .forEach((key) => { company[key] = sanitized[key]; });

    company.save(sanitized, (err, updated) => {
      if (err) return next(err);
      res.send(sanitizeCompanyOutput(updated));
    });
  },
);

router.delete(
  '/:companyId',
  bearer,
  check(['delete:companies/:companyId']),
  requestHook,
  (req, res, next) => req.loadedParams.company.remove((err) => {
    if (err) return next(err);
    res.send({});
  }),
);

module.exports = router;

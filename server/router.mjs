import express from 'express';
import bodyParser from 'body-parser';
import wrap from './utils/expressUtils.mjs';

import sales from './fakeData.mjs';

const router = new express.Router();

// for parsing application/json
router.use(bodyParser.json());

/**
 * process request for list
 * reply with list from fake DB
 */
router.get('/sales', wrap(async (req, res) => res.send(sales)));

/**
 * process addition:
 *   add to fake DB
 *   reply with new record or error
 */
router.post('/sales', wrap(async (req, res) => {
  const { dateTime, rate, value } = req.body;

  // add record to DB
  const record = {
    id: sales.length + 1,
    dateTime,
    rate,
    value,
  };

  sales.push(record);

  return res.send(record);
}));

export default router;

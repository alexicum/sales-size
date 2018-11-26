import express from 'express';
import bodyParser from 'body-parser';
import wrap from '../utils/expressUtils.mjs';
import { salesList, salesAdd } from '../controllers/sales/sales.mjs';

const router = new express.Router();

// for parsing application/json
router.use(bodyParser.json());

router.get('/sales', wrap(salesList));

router.post('/sales', wrap(salesAdd));

export default router;

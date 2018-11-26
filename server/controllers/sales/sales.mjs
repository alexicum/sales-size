import * as Sale from '../../services/sale.mjs';

export async function salesList(req, res) {
  const result = await Sale.salesList();
  return res.json(result || []);
};

export async function salesAdd(req, res) {
  const result = await Sale.salesAdd(req.body);
  return res.json(result || { message: 'OK' });
};

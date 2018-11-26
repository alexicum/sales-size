import Sale from '../models/Sale.mjs';

export const salesList = () => Sale.find({}).exec();

export function salesAdd(record) {
  const sale = new Sale(record);
  return sale.save();
}
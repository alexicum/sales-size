import requester from './requester';

const getSales = async () => {
  const result = await requester.get('/api/sales');
  return result.data;
};

const addSale = async (record) => {
  const result = await requester.post('/api/sales', record);
  return result.data;
};

export { getSales, addSale };

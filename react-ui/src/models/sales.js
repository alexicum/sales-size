import * as api from '../api';

export default {
	state: [],
	reducers: {
    getRecords: (s, payload) =>
      // TODO: move to model selectors
      payload.map((r, i, array) => ({
        ...r,
        delta: (i === 0)
          ? 0
          : Number.parseFloat((r.rate - array[i-1].rate)).toFixed(2)
      })),
    // addRecord: (s, payload) => ([...s, payload]),
	},
	effects: dispatch => ({
    async getRecordsAsync() {
      const result = await api.getSales();
			dispatch.sales.getRecords(result);
    },
		async addRecordAsync(payload, rootState) {
      await api.addSale(payload);
      // TODO: optimistic update
      // const result = await api.addSale(payload);
			// dispatch.sales.addRecord(result);
		},
  }),
  // selectors: {
  //   getRecordsWithDelta() {

  //   }
  // },
};

export default {
	state: {
    showMenu: false,
    curView: 'sales',
  },
	reducers: {
    // showMenu: (s, payload) => ({ ...s, showMenu: payload }),
    // showSales: (s, payload) => ({ ...s, showSales: payload }),
    // showAddSale: (s, payload) => ({ ...s, showAddSale: payload }),
    toggleMenu: (s) => ({ ...s, showMenu: !s.showMenu }),
    showView: (s, payload) => ({ ...s, curView: payload }),
	},
};

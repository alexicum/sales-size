import axios from 'axios';
// import MockAdapter from 'axios-mock-adapter';

export default axios;

// import sales from './fakeData';

// // This sets the mock adapter on the default instance
// const mock = new MockAdapter(axios, { delayResponse: 1000 });

// /**
//  * process request for list
//  * reply with list from fake DB
//  */
// mock.onGet('/api/sales').reply(200, sales);

// /**
//  * process addition:
//  *   validate
//  *   add to fake DB
//  *   reply with new record or error
//  */
// mock.onPost('/api/sales').reply((config) => {
//   const { dateTime, rate, value } = JSON.parse(config.data);

//   // add record to DB
//   const record = {
//     id: sales.length + 1,
//     dateTime,
//     rate,
//     value,
//   };

//   sales.push(record);

//   return [200, record];
// });

// export default axios;
// This file contains placeholder data that you'll be replacing with real data in the Data Fetching chapter:
// https://nextjs.org/learn/dashboard-app/fetching-data
const users = [
  {
    id: '85a5be18-3aa8-40bb-96bb-252a19bdcbff',
    name: 'User',
    email: 'user@nextmail.com',
    password: '123456',
  },
  {
    id: 'e1e25f62-e63f-4410-86c9-77154ad7a268',
    name: 'Roohan',
    email: 'roohan@nextmail.com',
    password: '123456',
  },
];

const expenses = [
  {
    id: '7ae2e699-847b-4c50-8dd8-4902f3106824',
    email: 'roohan@nextmail.com',
    category:'expense',
    typeOfExp: 'food',
    amount: 15,
    note:'a',
    date: '2022-12-06',
  },
  {
    id: '998754b9-1e60-422f-83da-6ffe7b3ebfea',
    email: 'roohan@nextmail.com',
    category:'expense',
    typeOfExp: 'transportation',
    amount: 15,
    note:'a',
    date: '2022-12-06',
  },
  {
    id: '3958dc9e-737f-4377-85e9-fec4b6a6442a',
    email: 'user@nextmail.com',
    category:'expense',
    typeOfExp: 'other',
    amount: 15,
    note:'a',
    date: '2022-12-06',
  },
  {
    id: '50ca3e18-62cd-11ee-8c99-0242ac120002',
    email: 'user@nextmail.com',
    category:'income',
    typeOfExp: 'salary',
    amount: 15,
    note:'a',
    date: '2022-12-06',
  },
  {
    id: '4b9109bf-10fd-4337-a6bf-0152b01132e6',
    email: 'user@nextmail.com',
    category:'income',
    typeOfExp: 'salary',
    amount: 15,
    note:'a',
    date: '2022-12-06',
  },
  {
    id: '76d65c26-f784-44a2-ac19-586678f7c2f2',
    email: 'roohan@nextmail.com',
    category:'income',
    typeOfExp: 'salary',
    amount: 15,
    note:'a',
    date: '2022-12-06',
  },
  // {
  //   id: 'd6e15727-9fe1-4961-8c5b-ea44a9bd81aa',
  //   name: 'Evil Rabbit',
  //   email: 'evil@rabbit.com',
  //   image_url: '/customers/evil-rabbit.png',
  // },
  // {
  //   id: '126eed9c-c90c-4ef6-a4a8-fcf7408d3c66',
  //   name: 'Emil Kowalski',
  //   email: 'emil@kowalski.com',
  //   image_url: '/customers/emil-kowalski.png',
  // },
  // {
  //   id: 'CC27C14A-0ACF-4F4A-A6C9-D45682C144B9',
  //   name: 'Amy Burns',
  //   email: 'amy@burns.com',
  //   image_url: '/customers/amy-burns.png',
  // },
  // {
  //   id: '13D07535-C59E-4157-A011-F8D2EF4E0CBB',
  //   name: 'Balazs Orban',
  //   email: 'balazs@orban.com',
  //   image_url: '/customers/balazs-orban.png',
  // },
];

// const invoices = [
//   {
//     customer_id: customers[0].id,
//     amount: 15795,
//     status: 'pending',
//     date: '2022-12-06',
//   },
//   {
//     customer_id: customers[1].id,
//     amount: 20348,
//     status: 'pending',
//     date: '2022-11-14',
//   },
//   {
//     customer_id: customers[4].id,
//     amount: 3040,
//     status: 'paid',
//     date: '2022-10-29',
//   },
//   {
//     customer_id: customers[3].id,
//     amount: 44800,
//     status: 'paid',
//     date: '2023-09-10',
//   },
//   {
//     customer_id: customers[5].id,
//     amount: 34577,
//     status: 'pending',
//     date: '2023-08-05',
//   },
//   {
//     customer_id: customers[7].id,
//     amount: 54246,
//     status: 'pending',
//     date: '2023-07-16',
//   },
//   {
//     customer_id: customers[6].id,
//     amount: 666,
//     status: 'pending',
//     date: '2023-06-27',
//   },
//   {
//     customer_id: customers[3].id,
//     amount: 32545,
//     status: 'paid',
//     date: '2023-06-09',
//   },
//   {
//     customer_id: customers[4].id,
//     amount: 1250,
//     status: 'paid',
//     date: '2023-06-17',
//   },
//   {
//     customer_id: customers[5].id,
//     amount: 8546,
//     status: 'paid',
//     date: '2023-06-07',
//   },
//   {
//     customer_id: customers[1].id,
//     amount: 500,
//     status: 'paid',
//     date: '2023-08-19',
//   },
//   {
//     customer_id: customers[5].id,
//     amount: 8945,
//     status: 'paid',
//     date: '2023-06-03',
//   },
//   {
//     customer_id: customers[2].id,
//     amount: 8945,
//     status: 'paid',
//     date: '2023-06-18',
//   },
//   {
//     customer_id: customers[0].id,
//     amount: 8945,
//     status: 'paid',
//     date: '2023-10-04',
//   },
//   {
//     customer_id: customers[2].id,
//     amount: 1000,
//     status: 'paid',
//     date: '2022-06-05',
//   },
// ];

// const revenue = [
//   { month: 'Jan', revenue: 2000 },
//   { month: 'Feb', revenue: 1800 },
//   { month: 'Mar', revenue: 2200 },
//   { month: 'Apr', revenue: 2500 },
//   { month: 'May', revenue: 2300 },
//   { month: 'Jun', revenue: 3200 },
//   { month: 'Jul', revenue: 3500 },
//   { month: 'Aug', revenue: 3700 },
//   { month: 'Sep', revenue: 2500 },
//   { month: 'Oct', revenue: 2800 },
//   { month: 'Nov', revenue: 3000 },
//   { month: 'Dec', revenue: 4800 },
// ];

module.exports = {
  users,
  expenses
  // customers,
  // invoices,
  // revenue,
};

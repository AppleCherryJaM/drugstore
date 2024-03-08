import { useState } from 'react';
import { useLoaderData, json, defer, Await, Outlet } from 'react-router-dom';
import ShopCollection from '../components/ShopCollection';
import DrugCollection from '../components/DrugCollection';

const shops = [
  {
    id: 1,
    name: 'stas',
    drugs: [
      { id: 1, name: 'paracetomol', price: 100.0 },
      { id: 2, name: 'cocaine', price: 999.99 },
      { id: 3, name: 'geroin', price: 87878.88 },
    ],
  },
  {
    id: 2,
    name: 'maks',
    drugs: [
      { id: 1, name: 'stasik', price: 99.0 },
      { id: 2, name: 'cocaine', price: 99.99 },
      { id: 3, name: 'geroin', price: 88.88 },
    ],
  },
];

const ShopPage = () => {
  // const { shops } = useLoaderData();

  return (
    <>
      <h1>Shop page</h1>
      {/* <Await resolve={shops}>
        {loadData} */}
      <ShopCollection shops={shops} />
      <Outlet/>
      {/* </Await> */}
    </>
  );
};

export default ShopPage;

// async function loadData() {
//   const response = await fetch('http://localhost:8080/');

//   if (!response.ok) {
//     // return { isError: true, message: 'Could not fetch events.' };
//     // throw new Response(JSON.stringify({ message: 'Could not fetch events.' }), {
//     //   status: 500,
//     // });
//     throw json(
//       { message: 'Could not fetch events.' },
//       {
//         status: 500,
//       },
//     );
//   } else {
//     const resData = await response.json();
//     return resData.events;
//   }
// }

export function loader() {
  return defer({
    events: loadData(),
  });
}

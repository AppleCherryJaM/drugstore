import { useState } from 'react';
import { useLoaderData, json, defer, Await } from 'react-router-dom';
import ShopCollection from '../components/ShopCollection';
import DrugCollection from '../components/DrugCollection';






const ShopPage = () => {
  const { shops } = useLoaderData();
  const [activeShop, setActiveShop] = useState(null);
  return (
    <>
      <h1>Shop page</h1>
      <Await resolve={shops}>
      {(loadData)}
      <ShopCollection />
      {activeShop && <DrugCollection drugs={activeShop} onClick={()=>setActiveShop(true)}/>}
      </Await>

    </>
  );
};


export default ShopPage;

async function loadData() {
  const response = await fetch('http://localhost:8080/');

  if (!response.ok) {
    // return { isError: true, message: 'Could not fetch events.' };
    // throw new Response(JSON.stringify({ message: 'Could not fetch events.' }), {
    //   status: 500,
    // });
    throw json(
      { message: 'Could not fetch events.' },
      {
        status: 500,
      }
    );
  } else {
    const resData = await response.json();
    return resData.events;
  }
}

export function loader() {
  return defer({
    events: loadData(),
  });
}


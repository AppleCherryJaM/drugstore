import { useEffect, useState } from 'react';
import DrugComponent from '../components/DrugComponent';
import { useParams } from 'react-router-dom';

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

const DrugPage = () => {
  const { shopId } = useParams();
  const LOCAL_STORAGE_ORDER_KEY = 'order';
  const [order, setOrder] = useState({ shopId: shopId, list: [] });

  useEffect(() => {
    setOrder(JSON.parse(localStorage.getItem(LOCAL_STORAGE_ORDER_KEY)));
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_ORDER_KEY, JSON.stringify(order));
  }, [order]);

  const clickHandler = (drug) => {
    const updatedItems = [...order.list];

    const existingCartItemIndex = updatedItems.findIndex(
      (cartItem) => cartItem.id === drug.id
    );
    const existingCartItem = updatedItems[existingCartItemIndex];

    if (existingCartItem) {
      const updatedItem = {
        ...existingCartItem,
        quantity: existingCartItem.quantity + 1,
      };
      updatedItems[existingCartItemIndex] = updatedItem;
    } else {
      updatedItems.push({
        id: drug.id,
        name: drug.name,
        price: drug.price,
        quantity: 1,
      });
    }

    setOrder((prevState) => {
      return { ...prevState, list: updatedItems };
    });
  };

  return (
    <>
      {shops[shopId - 1].drugs.map((item) => (
        <DrugComponent drug={item} key={item.id} onClick={clickHandler} />
      ))}
    </>
  );
};

export default DrugPage;

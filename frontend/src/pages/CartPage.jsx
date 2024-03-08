import { useState, useEffect, useRef } from 'react';

const CartPage = () => {
  const LOCAL_STORAGE_ORDER_KEY = 'order';
  let order = JSON.parse(localStorage.getItem(LOCAL_STORAGE_ORDER_KEY))

  console.log(order)

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_ORDER_KEY, JSON.stringify(order));
  }, [order]);

  return <></>;
};

export default CartPage;

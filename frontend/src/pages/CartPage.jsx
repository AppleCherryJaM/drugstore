import { useState, useEffect, useRef } from 'react';

const CartPage = () => {
  const LOCAL_STORAGE_ORDER_KEY = 'order';
  const [order, setOrder] = useState(JSON.parse(localStorage.getItem(LOCAL_STORAGE_ORDER_KEY)));

  const email = useRef();
  const name = useRef();
  const phone = useRef();
  const adress = useRef();
  const totalPrice = order.list.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const formattedTotalPrice = `$${totalPrice.toFixed(2)}`;

  const updateItemQuantity = (id, action) => {
    const updatedItems = [...order.list];
    const updatedItemIndex = updatedItems.findIndex((item) => item.id === id);

    const updatedItem = {
      ...updatedItems[updatedItemIndex],
    };

    updatedItem.quantity += action;

    if (updatedItem.quantity <= 0) {
      updatedItems.splice(updatedItemIndex, 1);
    } else {
      updatedItems[updatedItemIndex] = updatedItem;
    }
    setOrder((prevState) => {
      return {...prevState, list: updatedItems};
    });
  };

  const submitHandler = () => {
    const enteredEmail = email.current.value;
    const enteredName = name.current.value;
    const enteredPhone = phone.current.value;
    const enteredAdress = adress.current.value;
    console.log(enteredEmail, enteredName, enteredPhone, enteredAdress);
  };

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_ORDER_KEY, JSON.stringify(order));
  }, [order]);

  return (
    <>
      <h2>Shopping cart page</h2>
      <div>
        <div>
          <div>
            <label htmlFor="email">Email</label>
            <input type="email" ref={email} id="email" />
          </div>
          <div>
            <label htmlFor="name">Name</label>
            <input type="text" ref={name} id="name" />
          </div>
          <div>
            <label htmlFor="phone">Phone</label>
            <input type="text" ref={phone} id="phone" />
          </div>
          <div>
            <label htmlFor="adress">Adress</label>
            <input type="text" ref={adress} id="adress" />
          </div>
        </div>
        {order.list.length === 0 && <p>No items in cart!</p>}
        {order.list.length > 0 && (
          <ul id="cart-items">
            {order.list.map((item) => {
              const formattedPrice = `$${item.price.toFixed(2)}`;

              return (
                <li key={item.id}>
                  <div>
                    <span>{item.name}</span>
                    <span> ({formattedPrice})</span>
                  </div>
                  <div className="cart-item-actions">
                    <button onClick={() => updateItemQuantity(item.id, -1)}>-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => updateItemQuantity(item.id, 1)}>+</button>
                  </div>
                </li>
              );
            })}
          </ul>
        )}
      </div>
      <div>
        <p>Price {formattedTotalPrice}</p>
        <button onClick={submitHandler}>Submit</button>
      </div>
    </>
  );
};

export default CartPage;

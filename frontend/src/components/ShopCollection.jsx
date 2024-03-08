import ShopComponent from './ShopComponent';

const ShopCollection = ({ shops, clickHandler }) => {
  console.log(shops)
  return (
    <div>
      {shops.map((shop) => (
        <ShopComponent key={shop.id} name={shop.name} id={shop.id}/>
      ))}
    </div>
  );
};
export default ShopCollection;

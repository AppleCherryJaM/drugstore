import ShopComponent from './ShopComponent';

const ShopCollection = ({ shops }) => {
  return (
    <div>
      <ul>
        {shops.map((shop) => (
          <ShopComponent key={shop.id} name={shop.name} id={shop.id} />
        ))}
      </ul>
    </div>
  );
};
export default ShopCollection;

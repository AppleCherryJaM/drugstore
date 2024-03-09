import { useEffect, useState } from 'react';

const DrugComponent = ({ drug, onClick }) => {
  return (
    <>
      <div>
        <p>
          {drug.name} {'Price ' + drug.price + `$`}
        </p>
        <button onClick={() => onClick(drug)}>Add to cart</button>
      </div>
    </>
  );
};
export default DrugComponent;

import DrugComponent from './DrugComponent';
const DrugCollection = ({ drugs }) => {
  console.log(drugs);
  return (
    <>
      {drugs.map((item) => (
        <DrugComponent drug={item} key={item.id}/>
      ))}
    </>
  );
};

export default DrugCollection;

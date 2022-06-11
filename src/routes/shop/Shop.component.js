import shop_data from "../../shop-data.json";

const Shop = () => {
  return (
    <div>
      {shop_data.map(({ name, id }) => (
        <div key={id}>
          <h1>{name}</h1>
        </div>
      ))}
    </div>
  );
};

export default Shop;

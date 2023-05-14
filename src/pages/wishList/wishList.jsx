import { useSupabase } from "../../hooks/useSupabase";

const WishList = () => {
  const { wishItems } = useSupabase();

  return (
    <div>
      <h1>WishList</h1>
      <div>
        {wishItems.map((wishItem) => (
          <div key={wishItem.id}>
            <h2>{wishItem.data.title}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WishList;

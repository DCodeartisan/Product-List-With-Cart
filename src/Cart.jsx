import Cards from "./Cards"
import CartData from "./CartData"
function Cart({ handleAddToCart }) {
  return (
    <div className="cart">
      <h1>Desserts</h1>
      <div className="cards-grid-3-columns">
        {CartData.map((item) => (
          <Cards
            key={item.id}
            image={item.image}
            title={item.title}
            description={item.description}
            price={item.price}
            onAdd={() => handleAddToCart(item)}
          />
        ))}
      </div>
    </div>
  );
}

export default Cart;
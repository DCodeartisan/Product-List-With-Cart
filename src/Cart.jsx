import Cards from "./Cards";
import CartData from "./CartData";

function Cart({ handleAddToCart, updateQuantity, cartItems }) {
  const getQuantity = (id) => {
    const item = cartItems.find((i) => i.id === id);
    return item ? item.quantity : 0;
  };

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
            onIncrement={() => updateQuantity(item.id, 1)}
            onDecrement={() => updateQuantity(item.id, -1)}
            quantity={getQuantity(item.id)}
          />
        ))}
      </div>
    </div>
  );
}

export default Cart;

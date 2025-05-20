import { useState } from "react";
import Cart from "./Cart";
import CartResult from "./CartResult";

function DesktopDesign() {
  const [cartItems, setCartItems] = useState([]);
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleAddToCart = (item) => {
    setCartItems((prev) => {
      const exists = prev.find((cartItem) => cartItem.id === item.id);
      if (exists) {
        return prev.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      } else {
        return [...prev, { ...item, quantity: 1 }];
      }
    });
  };

  const updateQuantity = (id, delta) => {
    setCartItems((prev) =>
      prev
        .map((item) =>
          item.id === id
            ? { ...item, quantity: Math.max(1, item.quantity + delta) }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const removeItem = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const handleConfirm = () => {
    setShowConfirmation(true);
  };

  const handleCloseModal = () => {
    setShowConfirmation(false);
    setCartItems([]);
  };

  return (
    <div className="grid-container">
      <div className="left-column">
        <Cart handleAddToCart={handleAddToCart} />
      </div>
      <div className="right-column">
        <CartResult
          items={cartItems}
          updateQuantity={updateQuantity}
          removeItem={removeItem}
          onConfirm={handleConfirm}
        />
      </div>
      {showConfirmation && (
        <div className="modal">
          <div className="modal-content">
            <h2>Order Confirmed</h2>
            <p>We hope you enjoy your food!</p>
            <div>
              <ul>
                {cartItems.map((item) => (
                  <li key={item.id}>
                    {item.image}
                    {item.description} - {item.quantity}x (${item.price.toFixed(2)})
                  </li>
                ))}
              </ul>
            </div>
            <p>Total: ${cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2)}</p>
            <button onClick={handleCloseModal}>Start New Order</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default DesktopDesign;
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
            ? { ...item, quantity: Math.max(0, item.quantity + delta) }
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
        <Cart
          handleAddToCart={handleAddToCart}
          updateQuantity={updateQuantity}
          cartItems={cartItems}
        />
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
            <img src="/icon-order-confirmed.svg" alt="" />
            <h2>Order Confirmed</h2>
            <p>We hope you enjoy your food!</p>
            <div className="modal-content-list">
              <ul>
                {cartItems.map((item) => (
                  <li key={item.id}>
                    <div className="modal-content-details">
                      <img src={item.image} alt="" />
                      <div className="modal-content-details-display">
                        <div className="modal-content-list-description">
                          {item.description}
                        </div>
                        <span className="modal-content-list-quantity">
                          {item.quantity}x
                        </span>
                        <span className="modal-content-list-price">
                          @ ${item.price.toFixed(2)}
                        </span>
                        <span className="modal-content-list-price-total">
                          ${(item.price * item.quantity).toFixed(2)}
                        </span>
                      </div>
                    </div>
                    <hr />
                  </li>
                ))}
              </ul>

              <div className="modal-content-total">
                <p>Order Total: </p>
                <h2>
                  ${cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2)}
                </h2>
              </div>
            </div>
            <button onClick={handleCloseModal}>Start New Order</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default DesktopDesign;

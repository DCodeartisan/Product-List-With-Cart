function CartResult({ items, onConfirm, removeItem }) {
  const total = items.reduce((acc, item) => acc + item.price * item.quantity, 0);

  if (items.length === 0) {
    return (
      <div className="cart-result-default">
        <h2>Your Cart (0)</h2>
        <div className="cart-result-default-view">
          <img src="/illustration-empty-cart.svg" alt="" />
          <p>Your added items will appear here</p>
        </div>
      </div>
    );
  }

  return (
    <div className="cart-result">
      <h2>Your Cart ({items.reduce((a, b) => a + b.quantity, 0)})</h2>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            <div className="cart-items-list">
              <span className="cart-items-list-description">
                {item.description}
              </span>
              <div className="cart-items-list-price-description">
                <div>
                  <span className="cart-items-list-quantity">
                    {item.quantity}x
                  </span>  &nbsp;&nbsp; 
                  <span className="cart-items-list-price">
                    @ ${item.price.toFixed(2)}  
                  </span> &nbsp;&nbsp; 
                  <span className="cart-items-list-price-total">
                    ${(item.price*item.quantity).toFixed(2)}
                  </span>
                </div>
                <img onClick={() => removeItem(item.id)} src="/icon-remove-item.svg" alt=""/>
              </div>
              <div className="cart-items-list-line">
                <hr/>
              </div>
            </div>
          </li>
        ))}
      </ul>
      <div className="cart-result-total">
        <p>Order Total: </p> 
        <h2>${total.toFixed(2)}</h2>
      </div>
      <div className="carbon-neutral">
       <img src="/icon-carbon-neutral.svg" alt=""/> &nbsp; 
       This is a <strong>carbon-neutral</strong> delivery
      </div>
      <button onClick={onConfirm}>Confirm Order</button>
    </div>
  );
}

export default CartResult
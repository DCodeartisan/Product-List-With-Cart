function Cards({ image, title, description, price, onAdd, onIncrement, onDecrement, quantity }) {
  const isActive = quantity > 0;

  return (
    <div className={`cards ${isActive ? "active" : ""}`}>
      {!isActive ? (
        <div className="cards">
        <img src={image} alt={title} />
        <button onClick={onAdd}>
          <img src="/icon-add-to-cart.svg" alt="Add to cart" />
          <span className="button-text">Add to Cart</span>
        </button>
        <p className="title">{title}</p>
        <h3>{description}</h3>
        <p className="price">${price.toFixed(2)}</p>
      </div>
      ) : (
        <div className="cards cards-active">
        <img src={image} alt={title} />
        <div className="card-quantity-controls">
          <img onClick={onDecrement} src="/icon-decrement-quantity.svg" alt=""/>
          <span>{quantity}</span>
          <img onClick={onIncrement} src="/icon-increment-quantity.svg" alt=""/>
        </div>
        <p className="title">{title}</p>
        <h3>{description}</h3>
        <p className="price">${price.toFixed(2)}</p>
      </div>


        
      )}
    </div>
  );
}

export default Cards;

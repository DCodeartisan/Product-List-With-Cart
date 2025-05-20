function Cards({ image, title, description, price, onAdd }) {
  return (
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
  );
}

export default Cards;
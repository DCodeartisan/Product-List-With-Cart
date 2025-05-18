
function Cards( {image, title, description, price } ) {
  return (
    <div className="cards">
      <img src={image} alt={title} />
      <br />
      <button>
        <img src="/icon-add-to-cart.svg" alt="Add to cart" />
        <span className="button-text">Add to Cart</span>
      </button>
      <p className="title">{title}</p>
      <h3>{description}</h3>
      <p className="price">{price}</p>
    </div>
  );
}

export default Cards;
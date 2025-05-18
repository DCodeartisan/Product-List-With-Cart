import Cards from "./Cards"

function Cart() {
  return (
    <div >
      <h1>Desserts</h1>
        <div className="cards-grid-3-columns">
            <Cards image='./src/assets/images/image-waffle-desktop.jpg' title='Waffle' description='Waffle with Berries' price={`$6.50`} />
            <Cards image='./src/assets/images/image-creme-brulee-desktop.jpg' title='Crème brûlée' description='Vanilla Bean Crème Brûlée' price={`$7.00`} />
            <Cards image='./src/assets/images/image-macaron-desktop.jpg' title='Macaron' description='Macaron Mix of Five' price={`$8.00`} />
            <Cards image='./src/assets/images/image-tiramisu-desktop.jpg' title='Tiramisu' description='Classic Tiramisu' price={`$5.50`} />
            <Cards image='./src/assets/images/image-baklava-desktop.jpg' title='Baklava' description='Pistachio Baklava' price={`$4.00`} />
            <Cards image='./src/assets/images/image-meringue-desktop.jpg' title='Pie' description='Lemon Meringue Pie' price={`$5.00`} />
            <Cards image='./src/assets/images/image-cake-desktop.jpg' title='Cake' description='Red Velvet Cake' price={`$4.50`} />
            <Cards image='./src/assets/images/image-brownie-desktop.jpg' title='Brownie' description=' Salted Caramel Brownie' price={`$4.50`} />
            <Cards image='./src/assets/images/image-panna-cotta-desktop.jpg' title='Panna Cotta' description='Vanilla Panna Cotta' price={`$6.50`} />
        
        </div>
    </div>
  )
}

export default Cart

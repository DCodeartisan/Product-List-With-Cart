import Cart from "./Cart"
import CartResult from "./CartResult"


function DesktopDesign() {
  return (
    <div className="grid-container">
          <div className="left-column">
            <Cart />
          </div>
          <div className="right-column">
            <CartResult />
          </div>
    </div>
  );
}

export default DesktopDesign

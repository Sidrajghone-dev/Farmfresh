import React, { useState } from "react";
import { useCart } from "../Components/Cardcontext";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { state, dispatch } = useCart();
  const navigate = useNavigate();

  // Local state to track checkout process
  const [isCheckingOut, setIsCheckingOut] = useState(false);

  const removeItem = (product) => {
    dispatch({ type: "REMOVE_ITEM", payload: product });
  };

  const updateQuantity = (product, quantity) => {
    if (quantity < 1) return;
    dispatch({
      type: "UPDATE_QUANTITY",
      payload: { id: product.id, quantity },
    });
  };

  const calculateTotalAmount = () => {
    return state.cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  const handleCheckout = () => {
    setIsCheckingOut(true);

    // simulate a delay (like processing payment)
    setTimeout(() => {
      navigate("/thankyou"); // redirect after checkout
    }, 1500);
  };

  return (
    <div className="cart">
      <h1>Your Cart</h1>
      {state.cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div>
          {state.cartItems.map((item) => (
            <div key={item.id} className="cart-item">
              <img src={item.img} alt={item.name} />
              <h3>{item.name}</h3>
              <p>
                Quantity:
                <button onClick={() => updateQuantity(item, item.quantity - 1)}>
                  -
                </button>
                {item.quantity}
                <button onClick={() => updateQuantity(item, item.quantity + 1)}>
                  +
                </button>
              </p>
              <button onClick={() => removeItem(item)}>Remove</button>
              <p>Total: {item.price * item.quantity}</p>
            </div>
          ))}

          <h2>Grand Total: {calculateTotalAmount()}</h2>

          <button onClick={handleCheckout} disabled={isCheckingOut}>
            {isCheckingOut ? "Processing..." : "Proceed to Checkout"}
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;

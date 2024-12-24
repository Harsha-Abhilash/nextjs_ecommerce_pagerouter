

"use client";
import { useMemo } from "react";
import { useContext } from "react";
import cartContext from "../Context/CartContext";
import Link from "next/link";

function Cart() {
  interface CartItem {
    id: number;
    name: string;
    price: number;
    quantity: number;
    image: any
    title: string;
  }

  const { cartItem, removeFromCart, increaseQuantity, decreaseQuantity } =
    useContext(cartContext);
  console.log(cartItem);

  // Memoizing the subtotal calculation to avoid unnecessary recalculations
  const subtotal = useMemo(() => {
    return cartItem.reduce((acc:any, item:any) => acc + item.price * item.quantity, 0);
  }, [cartItem]);

  return (
    <>
      <div className="row p-5">
        <h1 className="p-2 text-center">Shopping Cart</h1>

        {cartItem.length === 0 ? (
          <span className="text-center">Your Cart is Empty</span>
        ) : (
          cartItem.map((item: CartItem) => (
            <div key={item.id} className="row mb-4">
              <div className="col">
                <img src={item.image.url} height="200px" alt={item.name} />
              </div>
              <div className="col">
                <div className="row">
                  <h3>{item.title}</h3>
                </div>
                <div className="row-3">
                  <div className="input-group d-flex justify-content-center m-2 p-2">
                    <button
                      className="btn btn-outline-secondary"
                      type="button"
                      onClick={() => increaseQuantity(item.id)}
                    >
                      +
                    </button>

                    <input
                      type="text"
                      className="form-control"
                      value={item.quantity}
                      readOnly
                    />

                    <button
                      className="btn btn-outline-secondary"
                      type="button"
                      onClick={() => decreaseQuantity(item.id)}
                    >
                      -
                    </button>
                  </div>
                </div>

                <div className="row">
                  <div className="text-center">
                    <button
                      className="btn btn-secondary"
                      onClick={() => removeFromCart(item.id)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
              <div className="col fw-bold">
                ${(item.price * item.quantity).toFixed(2)}
              </div>
            </div>
          ))
        )}
      </div>

      <div>
        <h3 className="text-danger fw-bold text-center">
          SubTotal: ${subtotal.toFixed(2)}
        </h3>
      </div>

      <div className="text-center">
        <Link href="/Products" className="btn btn-secondary m-3">
          Back to Products
        </Link>
        <Link href="/Order" className="btn btn-secondary m-3">
          Proceed to buy
        </Link>
      </div>
    </>
  );
}

export default Cart;

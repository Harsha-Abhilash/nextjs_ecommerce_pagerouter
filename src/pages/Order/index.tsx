import { useContext, useMemo } from "react";
import cartContext from "../Context/CartContext";
import Link from "next/link";

function Order() {
  const { cartItem } = useContext(cartContext);

  // Memoize subtotal calculation
  const subtotal = useMemo(() => {
    return cartItem.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  }, [cartItem]);

  const handleBuy = () => {
    const cartdata = cartItem.map((c) => ({
      data: {
        title: c.title,

        price: c.price,
      },
    }));

    console.log("cartdata", cartdata);
    for (const item of cartdata) {
      fetch("https://heroic-beauty-85276b92ee.strapiapp.com/api/carts", {
        method: "POST",
        headers: {
          Authorization:
            "Bearer cf45840212b550b65365cefa35dcbe6f2a864e713f5f5cc8e4b938616c2988ff61145002e7adb641f8a4310092edf6cb2f4532132ecc6dcd8f057810654836f0efcc1c0b401933476ee49f1cee6989e2c4c507e7aa5507ed0454b9cc6cdb29914642769c2cb8a1d50e73c18cc3d308eb93b0a2a05ab7bd9d5a96e6dd97f64c61",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(item),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("this is data", data);
          console.log("Cart items added successfully:", data);
        })
        .catch((error) => {
          console.error("Error adding cart item:", error);
        });
    }
  };
  console.log("orederpage");
  return (
    <div className="container">
      <h1 className="p-2">Order Details</h1>

      {cartItem.length === 0 ? (
        <span>Your Cart is Empty</span>
      ) : (
        cartItem.map((item) => (
          <div className="row" key={item.id}>
            <div className="col">
              <img src={item.image.url} height={"200px"} alt={item.title} />
            </div>
            <div className="col">
              <div className="row">
                <h3>{item.title}</h3>
              </div>
            </div>
            <div className="col">
              Quantity<h3>{item.quantity}</h3>
            </div>
            <div className="col fw-bold">
              ${(item.price * item.quantity).toFixed(2)}
            </div>
            <hr />
          </div>
        ))
      )}

      <div className="subtotal">
        <h3 className="text-danger fw-bold">
          SubTotal: ${subtotal.toFixed(2)}
        </h3>
      </div>

      <div>
        <button onClick={handleBuy} className="btn btn-success m-3">
          Order Here
        </button>
        <div>
          <Link href="/" className="btn btn-warning m-3">
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Order;

import React from "react";
import Link from "next/link";
import { useContext } from "react";
import cartContext from "../../Context/CartContext";
export default function ProductCard(props: any) {
  const product = props.product;
  console.log(product);
  const { addToCart, cartItem } = useContext(cartContext);
  console.log("cartitem", cartItem);
  const handleAddToCart = () => {
    addToCart(product);
  };
  return (
    <>
      <div className="col-md-4 col-sm-6 mb-4">
        <div className="card shadow-sm">
          <Link href={`/Products/${product.documentId}`}>
            <img
              src={product.image.url}
              className="card-img-top"
              alt={product.title}
              style={{ objectFit: "contain", maxHeight: "300px" }}
            />
          </Link>
          <div className="card-body">
            <h5
              className="card-title"
              style={{
                fontSize: "1rem",
                height: "60px",
                overflow: "hidden",
                textOverflow: "ellipsis",
              }}
            >
              {product.title}
            </h5>
            <p
              className="card-text text-center"
              style={{
                fontSize: "1.2rem",
                fontWeight: "500",
                color: "#B12704",
              }}
            >
              ${product.price}
            </p>
          </div>

          <div className="card-footer text-center">
            <div>
              <Link href="/Cart">
                {" "}
                <button
                  className="btn btn-warning w-100"
                  onClick={handleAddToCart}
                >
                  Add to Cart
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

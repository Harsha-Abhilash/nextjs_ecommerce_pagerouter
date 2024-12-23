import logo from "../../images/logo.jpg"
import cart2 from "../../images/cart2.jpg";
;

import Link from "next/link";
import { useContext } from "react";
import cartContext from "@/pages/Context/CartContext";
export default function Header(props:any) {
    const{cartItem}=useContext(cartContext)
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <Link className="navbar-brand" href="/">
          <img src={logo.src} height={"100px"}></img>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/Products">
                Products
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" href="/AboutUs">
                About Us
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/ContactUs">
                Contact Us
              </Link>
            
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/Cart">
              <div className="d-flex"><img src={cart2.src} height={'50px'}></img><h6 className="text-danger">{cartItem.length}</h6></div>

              </Link>
            
            </li>
            
          

          </ul>
        </div>
      </div>
    </nav>
  );
}

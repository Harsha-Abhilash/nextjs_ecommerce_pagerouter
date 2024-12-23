// pages/products/[productId].tsx

import { Product_services } from '../../Services/ProductServices';
import Link from 'next/link';
export async function getStaticPaths() {
    // Fetch all products to get their IDs for static generation
    const products = await Product_services.Get_product(); // Make sure this function returns a list of products
    const paths = products.map((product) => ({
        params: { ProductId:product.id.toString() }, // Convert productId to string
    }));

    return {
        paths,
        fallback: 'blocking', // Show 404 for undefined productIds
    };
}

export async function getStaticProps({ params }: { params: { ProductId: string } }) {
    // Fetch the product details using productId from params
    const product = await Product_services.Get_productbyId(params.ProductId);

    return {
        props: {
            product, // Pass the product data as a prop to the component
        },
    };
}

export default function ProductDetail({ product }: { product: { title: string; description: string ;image:string ; price:number} }) {
    // Render the product details
    console.log("detail",product);
    return (
        <>
      <div className="container">
        <div className="row">
          <div className="col">
            <img src={product.image.url} style={{height: '300px'}}></img>
          </div>
          <div className="col">
            <div className="row">
              <h4>{product.title}</h4>
            </div>

            <div className="row text-center">
              <h4 className="text-center">${product.price}</h4>
            </div>
            <div className="row text-center p-3">
                <div className='col-4 '>
              <Link href="/Products">
                <button className=" btn btn-warning text-center">
                  Back to Products
                </button>
              </Link>
              </div>
              <div className='col-3'>
              <Link href="/Cart">
                <button className=" btn btn-warning text-center">
                 Add To Cart
                </button>
              </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}



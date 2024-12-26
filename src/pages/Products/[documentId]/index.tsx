// // pages/products/[productId].tsx

// import { Product_services } from "../../../../public/Services/ProductServices";
// import Link from "next/link";
// export async function getStaticPaths() {
//   // Fetch all products to get their IDs for static generation
//   const products = await Product_services.Get_product(); // Make sure this function returns a list of products
//   const paths = products.map((product:any) => ({
//     params: { documentId: product.documentId.toString() }, // Convert productId to string
//   }));

//   return {
//     paths,
//     fallback: "blocking", // Show 404 for undefined productIds
//   };
// }

// export async function getStaticProps({
//   params,
// }: {
//   params: { documentId: string };
// }) {
//   // Fetch the product details using productId from params
//   const product = await Product_services.Get_productbyId(params.documentId);

//   return {
//     props: {
//       product, // Pass the product data as a prop to the component
//     },
//   };
// }

// export default function ProductDetail({
//   product,
// }: {
//   product: { title: string; description: string; image: any; price: number; documentId:string };
// }) {
//   // Render the product details
//   console.log("detail", product);
//   return (
//     <>
//       <div className="container">
//         <div className="row">
//           <div className="col">
//             <img src={product.image.url} style={{ height: "300px" }}></img>
//           </div>
//           <div className="col">
//             <div className="row">
//               <h4>{product.title}</h4>
//             </div>

//             <div className="row text-center">
//               <h4 className="text-center">${product.price}</h4>
//             </div>
//             <div className="row text-center p-3">
//               <div className="col-4 ">
//                 <Link href="/Products">
//                   <button className=" btn btn-warning text-center">
//                     Back to Products
//                   </button>
//                 </Link>
//               </div>
//               <div className="col-3">
//                 <Link href="/Cart">
//                   <button className=" btn btn-warning text-center">
//                     Add To Cart
//                   </button>
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }
// pages/products/[productId].tsx

import { Product_services } from "../../../../public/Services/ProductServices";
import Link from "next/link";

// Fetch product details on each request using getServerSideProps
export async function getServerSideProps({
  params,
}: {
  params: { documentId: string }; // Use productId instead of documentId
}) {
  // Fetch the product details using productId from params
  const product = await Product_services.Get_productbyId(params.documentId);

  // If the product is not found, return a 404 page
  if (!product) {
    return {
      notFound: true, // Triggers a 404 page if no product is found
    };
  }

  return {
    props: {
      product, // Pass the product data as a prop to the component
    },
  };
}

export default function ProductDetail({
  product,
}: {
  product: { title: string; description: string; image: any; price: number; documentId: string };
}) {
  // Render the product details
  console.log("detail", product);

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          {/* Ensure the image URL exists before rendering */}
          {product.image?.url ? (
            <img src={product.image.url} alt={product.title} style={{ height: "300px", objectFit: "cover" }} />
          ) : (
            <div>No image available</div>
          )}
        </div>
        <div className="col m-5">
          <div className="row p-4">
            <h4>{product.title}</h4>
          </div>

          <div className="row text-center">
            <h4 >${product.price}</h4>
          </div>

          <div className="row text-center p-3">
            <div className="col-4">
              <Link href="/Products">
                <button className="btn btn-warning">Back to Products</button>
              </Link>
            </div>
            {/* <div className="col-3">
              <Link href="/Cart">
                <button className="btn btn-warning">Add To Cart</button>
              </Link>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}


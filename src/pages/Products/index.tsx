// // import Electronics_checkbox from "../Components/Electronic/Electronic";
// // import Jewellery from "../Components/Jewellery/Jewellery";
// // import Mens_clothing from "../Components/Mens_clothing/Mens_clothing";
// // import Womens_clothing from "../Components/Womens_clothing/Womens_clothing";
// // import ProductCard from "../Components/ProductCard/ProductCard"
// // import { Product_services } from "../Services/ProductServices";

// // export default async function Products(props: any) {

// //   const { category } = await props.searchParams||{};
// //   if(category!==undefined){

// //   if (category == "electronics") {
// //     var product = await Product_services.Get_productByCategory("electronics");
// //   } else if (category == "jewelery") {
// //     var product = await Product_services.Get_productByCategory("jewelery");
// //   } else if (category == "men") {
// //     var product = await Product_services.Get_productByCategory(
// //       "men's clothing"
// //     );
// //   } else if (category == "women") {
// //     var product = await Product_services.Get_productByCategory(
// //       "women's clothing"
// //     );
// //   }
// // }
// //   else {
// //     var product = await Product_services.Get_product();
// //   }
// //   return (
// //     <>
// //       <div className="row ">
// //         <div className="col-2">
// //           <div className="row p-3 fw-bold">Search By Category</div>
// //           <div className="row m-2">
// //             <Electronics_checkbox></Electronics_checkbox>
// //             <Jewellery></Jewellery>
// //             <Mens_clothing></Mens_clothing>
// //             <Womens_clothing></Womens_clothing>
// //           </div>
// //         </div>
// //         <div className="col">
// //           <div className="row">
// //             {product.map((p: any) => {
// //               return <ProductCard key={p.id} product={p} />;
// //             })}
// //           </div>
// //         </div>
// //       </div>
// //     </>
// //   );
// // }
// import Electronics_checkbox from "../Components/Electronic/Electronic";
// import Jewellery from "../Components/Jewellery/Jewellery";
// import Mens_clothing from "../Components/Mens_clothing/Mens_clothing";
// import Womens_clothing from "../Components/Womens_clothing/Womens_clothing";
// import ProductCard from "../Components/ProductCard/ProductCard";
// import { Product_services } from "../Services/ProductServices";

// // This function runs at build time and fetches the products
// export async function getStaticProps(context: any) {
//   // Fetch the category from the context params (if provided via URL)
//   const category = context.params?.category || undefined;

//   let product;

//   // Fetch data based on category or all products
//   if (category) {
//     if (category === "electronics") {
//       product = await Product_services.Get_productByCategory("electronics");
//     } else if (category === "jewelery") {
//       product = await Product_services.Get_productByCategory("jewelery");
//     } else if (category === "men") {
//       product = await Product_services.Get_productByCategory("men's clothing");
//     } else if (category === "women") {
//       product = await Product_services.Get_productByCategory("women's clothing");
//     }
//   } else {
//     product = await Product_services.Get_product(); // Fetch all products if no category is provided
//   }

//   return {
//     props: { product }, // Return the products as props to the component
//   };
// }

// // If you're using dynamic routes, you can use getStaticPaths to generate static pages for each category
// export async function getStaticPaths() {
//   const categories = ["electronics", "jewelery", "men", "women"];

//   const paths = categories.map((category) => ({
//     params: { category }, // This will create paths like /products/electronics, /products/jewelery, etc.
//   }));

//   return {
//     paths, // List of paths to pre-render
//     fallback: false, // Will return a 404 page for other paths not listed in `paths`
//   };
// }

// export default function Products({ product }: any) {
//   return (
//     <>
//       <div className="row">
//         <div className="col-2">
//           <div className="row p-3 fw-bold">Search By Category</div>
//           <div className="row m-2">
//             <Electronics_checkbox />
//             <Jewellery />
//             <Mens_clothing />
//             <Womens_clothing />
//           </div>
//         </div>
//         <div className="col">
//           <div className="row">
//             {product && product.length > 0 ? (
//               product.map((p: any) => {
//                 return <ProductCard key={p.id} product={p} />;
//               })
//             ) : (
//               <p>No products found.</p>
//             )}
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }
import Electronics_checkbox from "../Components/Electronic/Electronic";
import Jewellery from "../Components/Jewellery/Jewellery";
import Mens_clothing from "../Components/Mens_clothing/Mens_clothing";
import Womens_clothing from "../Components/Womens_clothing/Womens_clothing";
import ProductCard from "../Components/ProductCard/ProductCard";
import { Product_services } from "../Services/ProductServices";
import Electronic from "../Components/Electronic/Electronic";

// This function runs on each request and fetches the products based on category
export async function getServerSideProps(context: any) {
  // Get the category from the query parameters
  const { category } = context.query;

  let product;

  // Fetch data based on category or all products
  if (category) {
    if (category === "electronic") {
      product = await Product_services.Get_productByCategory("electronic");
    } else if (category === "jewelery") {
      product = await Product_services.Get_productByCategory("jewelery");
    } else if (category === "men") {
      product = await Product_services.Get_productByCategory("men's clothing");
    } else if (category === "women") {
      product = await Product_services.Get_productByCategory(
        "women's clothing"
      );
    }
  } else {
    product = await Product_services.Get_product(); // Fetch all products if no category is provided
  }

  // Return the product data as props
  return {
    props: { product },
  };
}

export default function Products({ product }: any) {
  return (
    <>
      <div className="row">
        <div className="col-2">
          <div className="row p-3 fw-bold">Search By Category</div>
          <div className="row m-2">
            <Electronic />
            <Jewellery />
            <Mens_clothing />
          </div>
        </div>
        <div className="col">
          <div className="row">
            {product && product.length > 0 ? (
              product.map((p: any) => {
                return <ProductCard key={p.documentId} product={p} />;
              })
            ) : (
              <p>No products found.</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

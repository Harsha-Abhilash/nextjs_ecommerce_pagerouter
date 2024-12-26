
import Electronics_checkbox from "../Components/Electronic/Electronic";
import Jewellery from "../Components/Jewellery/Jewellery";
import Mens_clothing from "../Components/Mens_clothing/Mens_clothing";
import Womens_clothing from "../Components/Womens_clothing/Womens_clothing";
import ProductCard from "../Components/ProductCard/ProductCard";
import { Product_services } from "../../../public/Services/ProductServices";
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

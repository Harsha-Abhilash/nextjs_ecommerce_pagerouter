import { service_base } from "./baseservice";

export class Product_services extends service_base {
  static async Get_product() {
    var Product_response = await fetch(
      service_base.get_URL("products?populate=image")
    );

    var prod_data = await Product_response.json();

    return prod_data.data;
  }
  static async Get_productByCategory(category: string) {
    var Product_response = await fetch(
      service_base.get_URL(
        `products?populate=*&filters[category][$eq]=${category}`
      )
    );

    var prod_data = await Product_response.json();

    return prod_data.data;
  }

  static async Get_productbyId(id: string) {
    var Product_response = await fetch(
      service_base.get_URL(`products/${id}?populate=*`)
    );
    var prod_data = await Product_response.json();

    return prod_data.data;
  }
}

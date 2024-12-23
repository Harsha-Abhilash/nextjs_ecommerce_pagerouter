// import Head from "next/head";
// import Image from "next/image";
// import { Geist, Geist_Mono } from "next/font/google";
// import styles from "@/styles/Home.module.css";

// import banner from '../../src/pages/images/home_banner.jpg'
// import Recomented from '../pages/Components/Recomented/Recomented'
// import { Product_services } from "./Services/ProductServices";
// import ProductCard from "./Components/ProductCard/ProductCard";
// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

// export default function Home() {
//  default async function Products() {


  
//     const product = await Product_services.Get_product();
//     const sliced=product.slice(2,7);
//     return (
//       <div className="row">
//         {sliced.map((p: any) => {
//           return <ProductCard key={p.id} product={p} />;
//         })}
//         {/* {
//           product.data.slice(1,2)
//         } */}
//       </div>
//     );
//     }
//   return (
//     <>
//       <Head>
//         <title>Create Next App</title>
//         <meta name="description" content="Generated by create next app" />
//         <meta name="viewport" content="width=device-width, initial-scale=1" />
//         <link rel="icon" href="/favicon.ico" />
//       </Head>
//       <div className="row">
//       <img src={banner.src}  height={'300px'} style={{ objectFit: 'cover' }}></img>
//       </div>
//       <div className='p-2'><h3>Recomented Products</h3></div>
//    {/* <Recomented></Recomented> */}





// {this.products()};

   



//     </>
//   );
// }
import Head from "next/head";
import { Geist, Geist_Mono } from "next/font/google";
import styles from "@/styles/Home.module.css";
import banner from '../../src/pages/images/home_banner.jpg';
import { Product_services } from "./Services/ProductServices";
import ProductCard from "./Components/ProductCard/ProductCard";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Fetch product data from the server side using getServerSideProps
export async function getServerSideProps() {
  const product = await Product_services.Get_product();
  const sliced = product.slice(2, 7);
  return {
    props: { products: sliced },
  };
}

export default function Home({ products }) {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="row">
        <img src={banner.src} height={'300px'} style={{ objectFit: 'cover' }} alt="Home Banner" />
      </div>

      <div className='p-2'>
        <h3>Recommended Products</h3>
      </div>

      {/* Render products using the ProductCard component */}
      <div className="row">
        {products.map((product) => {
          return <ProductCard key={product.id} product={product} />;
        })}
      </div>
    </>
  );
}


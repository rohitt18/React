import React from "react";
import Product from "./Product";
import { useFetch } from "../../9-custom-hooks/setup/2-useFetch";

// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = "https://course-api.com/react-prop-types-example";

const Index = () => {
  const { products } = useFetch(url);
  return (
    <div>
      <h2>products</h2>
      <section className="products">
        {products.map((product) => {
          return <Product key={product.id} {...product} />;
          // using spread operator to pass in all the properties from each n every product
          // into the Product component
          // therefore we can use those properties in Product component.
        })}
      </section>
    </div>
  );
};

export default Index;

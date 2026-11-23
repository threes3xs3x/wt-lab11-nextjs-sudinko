import ProductCard from "../components/ProductCard";

type Product = {
  id: number;
  name: string;
  price: number;
};

async function getProducts(): Promise<Product[]> {
   const port = process.env.PORT ?? 3000;
  const response = await fetch(
    `http://localhost:${port}/api/products`,
    {
      cache: "no-store"
    }
  );

  return response.json();
}

export default async function Products() {
  const products = await getProducts();

  return (
    <main>
      <h1>Товары</h1>
      {products.map((product) => (
        <ProductCard
          key={product.id}
          name={product.name}
          price={product.price}
        />
      ))}
    </main>
  );
}
type ProductCardProps = {
  name: string;
  price: number;
};

export default function ProductCard({
  name,
  price
}: ProductCardProps) {
  return (
    <article>
      <h2>{name}</h2>
      <p>
        Цена: {price} BYN
      </p>
    </article>
  );
}
interface ProductsProps {
  product: {
    id: number;
    price: number;
    title: string;
  }
}


export function ProductItem({ product }: ProductsProps) {
  return (
    <div>
      {product.title} - <strong>{product.price}</strong>
    </div>
  )
}
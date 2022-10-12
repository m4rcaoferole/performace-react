import { memo } from "react";

interface ProductsProps {
  product: {
    id: number;
    price: number;
    title: string;
  };
  onAddToWishlist: (id: number) => void;
}

function ProductItemComponent({ product, onAddToWishlist }: ProductsProps) {
  return (
    <div>
      {product.title} - <strong>{product.price}</strong>
      <button onClick={() => onAddToWishlist(product.id)}>Add to wishlist</button>
    </div>
  );

}
/* Perfomando com memo!
* shallow compare -> comparação rasa
  verifica a igualdade dentro das propriedades.
* {} === {} => false -> igualdade referêncial
  Compara se os objetos ocupam o mesmo lugar na memória.
*/
export const ProductItem = memo(
  ProductItemComponent,
  (prevProps, nextProps) => {
    return Object.is(prevProps.product, nextProps.product);
  }
);
/**
 * Quando utilizar o Memo.
 * 
 * 1. Pure Functional Components. (paradigma funcional)
 * 2. Renders too often.
 * 3. Re-renders with same props.
 * 4. Medium to big size.
 */
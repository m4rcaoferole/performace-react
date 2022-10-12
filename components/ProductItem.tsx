import { memo, useState } from "react";
import { AddProductToWishlist } from "./AddProductWishlist";

interface ProductsProps {
  product: {
    id: number;
    price: number;
    priceFormatted: string;
    title: string;
  };
  onAddToWishlist: (id: number) => void;
}

function ProductItemComponent({ product, onAddToWishlist }: ProductsProps) {
  const [ isAddingToWishlist, setIsAddingToWishlist ] = useState(false)

  return (
    <div>
      {product.title} - <strong>{product.priceFormatted}</strong>
      <button onClick={() => setIsAddingToWishlist(true)}>Adicionar aos favoritos</button>

      { isAddingToWishlist && <AddProductToWishlist
        onAddToWishlist={() => onAddToWishlist(product.id)}
        onResquestClose={() => setIsAddingToWishlist(false)}
      /> }
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

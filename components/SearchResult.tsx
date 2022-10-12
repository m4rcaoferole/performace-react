import { List, ListRowRenderer } from 'react-virtualized'

import { ProductItem } from "./ProductItem";

interface SerachResultsProps {
  results: Array<{
    id: number;
    price: number;
    priceFormatted: string;
    title: string;
  }>
  onAddToWishlist: (id: number) => void;
  totalPrice: number;
}

export function SearchResult({ results, onAddToWishlist, totalPrice }: SerachResultsProps) {
  const rowRenderer: ListRowRenderer = ({ index, key, style }) => {
    return (
      <div key={key} style={style}>
        <ProductItem
          product={results[index]}
          onAddToWishlist={onAddToWishlist}
        />
      </div>
    )
  }

  return (
    <div>
      <h1>{totalPrice}</h1>

      <List
        height={300}
        rowHeight={30}
        width={800}
        overscanColumnCount={5}
        rowCount={results.length}
        rowRenderer={rowRenderer}
      />
    </div>
  )
}

/** Fluxo de renderização do React!!!
  
 * 1. Criar uma nova versão do componente. // memo funciona muito bem nesse primeiro passo.
 * 2. Comparar com a versão anterior.
 * 3. Se houverem alterações, vai atualizar o que alterou.
 */

/** useMemo
 * 1. Cálculos pesados
 * 2. Igualdade referêncial
 *  (quando a gente repassa aquela informação a um componente filho);
 
 * useCallback
 * 1. Memorizar um função e não valor.
 * 
 */
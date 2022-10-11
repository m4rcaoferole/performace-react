import { ProductItem } from "./ProductItem";

interface SerachResultsProps {
  results: Array<{
    id: number;
    price: number;
    title: string;
  }>
}

export function SearchResult({ results }: SerachResultsProps) {

  return (
    <div>
      {results.map(product => {
        return (
          <ProductItem product={product} />
        );
      })}
    </div>
  )
}
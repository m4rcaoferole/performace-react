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

/** Fluxo de renderização do React!!!
  
 * 1. Criar uma nova versão do componente. // memo funciona muito bem nesse primeiro passo.
 * 2. Comparar com a versão anterior.
 * 3. Se houverem alterações, vai atualizar o que alterou.
 */
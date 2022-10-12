export interface AddProductToWishlistProps {
  onAddToWishlist: () => void;
  onResquestClose: () => void;
}

export function AddProductToWishlist({
  onAddToWishlist,
  onResquestClose,
}: AddProductToWishlistProps) {
  return (
    <span>
      Deseja adicionar aos favoritos?
      <button onClick={onAddToWishlist}>Sim</button>
      <button onClick={onResquestClose}>Não</button>     
    </span>
  )
}
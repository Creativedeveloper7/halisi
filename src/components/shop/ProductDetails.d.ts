import { Product } from '../../types/product';
interface ProductDetailsProps {
    product: Product;
    isFavorite: boolean;
    onFavoriteClick: () => void;
    onOrder: () => void;
}
export declare function ProductDetails({ product, isFavorite, onFavoriteClick, onOrder, }: ProductDetailsProps): import("react/jsx-runtime").JSX.Element;
export {};

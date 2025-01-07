import { ProductOrder } from '../types/product';
export declare function useOrders(): {
    orders: ProductOrder[];
    loading: boolean;
    createOrder: (productId: string) => Promise<any>;
    cancelOrder: (orderId: string) => Promise<void>;
};

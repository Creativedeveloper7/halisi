export interface Product {
    id: string;
    name: string;
    description: string;
    price: number;
    imageUrl: string;
    shopId: string;
    available: boolean;
    createdAt: string;
  }
  
  export interface ProductOrder {
    id: string;
    userId: string;
    productId: string;
    status: 'pending' | 'confirmed' | 'cancelled' | 'shipping';
    createdAt: string;
  }
  
  export interface Favorite {
    id: string;
    userId: string;
    productId: string;
    createdAt: string;
  }
  
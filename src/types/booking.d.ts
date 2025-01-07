export type BookingStatus = 'pending' | 'confirmed' | 'cancelled' | 'completed';
export interface Booking {
    id: string;
    shopName: string;
    date: string;
    status: BookingStatus;
    image: string;
    userId: string;
    shopId: string;
    createdAt: string;
    updatedAt: string;
}

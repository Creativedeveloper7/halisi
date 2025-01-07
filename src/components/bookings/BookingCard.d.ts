import { BookingStatus } from '../../types/booking';
interface BookingCardProps {
    shopName: string;
    date: string;
    status: BookingStatus;
    image: string;
}
export declare function BookingCard({ shopName, date, status, image }: BookingCardProps): import("react/jsx-runtime").JSX.Element;
export {};

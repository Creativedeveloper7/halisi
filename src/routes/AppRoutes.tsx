import { Routes, Route, Navigate } from 'react-router-dom';
import { HomePage } from '../pages/HomePage';
import { CategoryPage } from '../pages/CategoryPage';
import { StoreCatalogPage } from '../pages/StoreCatalogPage';
import { ProductDetailsPage } from '../pages/ProductDetailsPage';
import { BookingsPage } from '../pages/BookingsPage';
import { ProfilePage } from '../pages/ProfilePage';
import { FavoritesPage } from '../pages/FavoritesPage';
import { NotificationsPage } from '../pages/NotificationsPage';
import { Splash } from '../pages/Splash';
import { SignIn } from '../pages/SignIn';
import { SignUp } from '../pages/SignUp';
import { Welcome } from '../pages/Welcome';
import { SuccessRegistration } from '../pages/SuccessRegistration';
import { SellerOnboarding } from '../pages/seller/SellerOnboarding';
import { SellerDashboard } from '../pages/seller/SellerDashboard';
import { SellerProducts } from '../pages/seller/SellerProducts';
import { SellerOrders } from '../pages/seller/SellerOrders';
import { useAuth } from '../context/AuthContext';

export function AppRoutes() {
  const { user } = useAuth();

  return (
    <Routes>
      {/* Public routes */}
      <Route path="/" element={user ? <Navigate to="/home" /> : <Splash />} />
      <Route path="/signin" element={user ? <Navigate to="/home" /> : <SignIn />} />
      <Route path="/signup" element={user ? <Navigate to="/home" /> : <SignUp />} />
      <Route path="/success-registration" element={<SuccessRegistration />} />

      {/* Protected routes */}
      {user && (
        <>
          <Route path="/welcome" element={<Welcome />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/bookings" element={<BookingsPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/favorites" element={<FavoritesPage />} />
          <Route path="/notifications" element={<NotificationsPage />} />
          <Route path="/category/:category" element={<CategoryPage />} />
          <Route path="/store/:storeId" element={<StoreCatalogPage />} />
          <Route path="/product/:productId" element={<ProductDetailsPage />} />
          
          {/* Seller routes */}
          <Route path="/seller">
            <Route path="onboarding" element={<SellerOnboarding />} />
            <Route path="dashboard" element={<SellerDashboard />} />
            <Route path="products" element={<SellerProducts />} />
            <Route path="orders" element={<SellerOrders />} />
          </Route>
        </>
      )}

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
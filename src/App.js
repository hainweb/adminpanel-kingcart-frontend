import { useEffect, useState, lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import axios from 'axios';
import { BASE_URL } from './Components/Urls/Urls';
import Navbar from './Components/Navbar/Navbar';

// Lazy-loaded Components
const Login = lazy(() => import('./Components/Login/Login'));
const ViewProduct = lazy(() => import('./Components/ViewProducts/ViewProduct'));
const EditProduct = lazy(() => import('./Components/ViewProducts/EditProduct'));
const AddProduct = lazy(() => import('./Components/AddProduct/AddProduct'));
const UsersList = lazy(() => import('./Components/AllUsers/UserList'));
const OrdersList = lazy(() => import('./Components/AllUsers/OrderList'));
const OrderedProducts = lazy(() => import('./Components/AllUsers/OrderedProducts'));
const UserDisplaySidebar = lazy(() => import('./Components/UserDisplay/Sidebar'));
const Categories = lazy(() => import('./Components/UserDisplay/Categories'));
const Slider = lazy(() => import('./Components/UserDisplay/Slider'));
const Offers = lazy(() => import('./Components/UserDisplay/Offers'));
const AddCategories = lazy(() => import('./Components/UserDisplay/AddCategories'));
const EditSlide = lazy(() => import('./Components/UserDisplay/EditSlide'));

function App() {
  const [admin, setAdmin] = useState('');

  // Fetch admin data on mount
  useEffect(() => {
    const fetchAdmin = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/get-admin`);
        if (response.data.status) {
          setAdmin(response.data.admin);
        }
      } catch (error) {
        console.error('Error fetching admin:', error);
      }
    };
    fetchAdmin();
  }, []);

  // Admin routes with fallback to Login
  const ProtectedRoute = ({ children }) => {
    return admin ? children : <Login setAdmin={setAdmin} />;
  };

  return (
    <div className="App">
      <Router>
        <Navbar admin={admin} />
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            {/* Public Routes */}
            <Route path="/login" element={<Login setAdmin={setAdmin} />} />

            {/* Protected Routes */}
            <Route
              path="/"
              element={
                <ProtectedRoute>
                  <ViewProduct />
                </ProtectedRoute>
              }
            />
            <Route
              path="/edit-product/:id"
              element={
                <ProtectedRoute>
                  <EditProduct />
                </ProtectedRoute>
              }
            />
            <Route
              path="/add-product"
              element={
                <ProtectedRoute>
                  <AddProduct />
                </ProtectedRoute>
              }
            />
            <Route
              path="/user-list"
              element={
                <ProtectedRoute>
                  <UsersList />
                </ProtectedRoute>
              }
            />
            <Route
              path="/order-list/:userId"
              element={
                <ProtectedRoute>
                  <OrdersList />
                </ProtectedRoute>
              }
            />
            <Route
              path="/order-list/:userId/ordered-product/:id"
              element={
                <ProtectedRoute>
                  <OrderedProducts />
                </ProtectedRoute>
              }
            />
            <Route
              path="/edit-user-display"
              element={
                <ProtectedRoute>
                  <UserDisplaySidebar />
                </ProtectedRoute>
              }
            />
            <Route
              path="/categories"
              element={
                <ProtectedRoute>
                  <Categories />
                </ProtectedRoute>
              }
            />
            <Route
              path="/slider"
              element={
                <ProtectedRoute>
                  <Slider />
                </ProtectedRoute>
              }
            />
            <Route
              path="/offers"
              element={
                <ProtectedRoute>
                  <Offers />
                </ProtectedRoute>
              }
            />
            <Route
              path="/add-categories"
              element={
                <ProtectedRoute>
                  <AddCategories />
                </ProtectedRoute>
              }
            />
            <Route
              path="/edit-slide"
              element={
                <ProtectedRoute>
                  <EditSlide />
                </ProtectedRoute>
              }
            />
          </Routes>
        </Suspense>
      </Router>
    </div>
  );
}

export default App;

import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import RootLayout from './pages/RootLayout';
import ErrorPage from './pages/ErrorPage';
import ShopPage from './pages/ShopPage';
import './App.css';
import DrugPage from './pages/DrugPage';
import CartPage from './pages/CartPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: 'shop',
        element: <ShopPage />,
        children: [{ path: ':shopId', id: 'shop-medicines', element: <DrugPage /> }],
      },
      { path: 'cart', element: <CartPage /> },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;

import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import RootLayout from './pages/RootLayout';
import ErrorPage from './pages/ErrorPage';
import ShopPage from './pages/ShopPage';
import './App.css';
import DrugCollection from './components/DrugCollection';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: 'shop',
        element: <ShopPage />,
        children: [{ path: ':shopId', element: <></> }],
      },
      { path: 'cart', element: <></> },
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

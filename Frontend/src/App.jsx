import React from 'react';
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom';
import Home from './pages/home';
import Billing from './pages/billing';
import BillTransactions from './pages/Transactions';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Home />} />   {/* Use lowercase path */}
      <Route path="/billing" element={<Billing />} />
      <Route path="/Transaction" element={<BillTransactions />} />

    </>
  )
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;

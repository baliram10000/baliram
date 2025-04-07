import React, { Suspense, lazy } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const Home = lazy(() => import('./pages/Home'));
const Order = lazy(() => import('./pages/Order'));
const Normal = lazy(() => import('./components/order/Normal'));
const DryClean = lazy(() => import('./components/order/DryClean'));
const EasyWash = lazy(() => import('./components/order/EasyWash'));
const Blanket = lazy(() => import('./components/order/Blanket'));
const Bag = lazy(() => import('./components/order/Bag'));
const Shoes = lazy(() => import('./components/order/Shoes'));

function SkeletonFallback() {
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-blue-50">
      <div className="w-full max-w-4xl p-5">
        <Skeleton height={50} width="40%" className="mb-5" />
        <Skeleton height={30} width="60%" className="mb-3" />
        <Skeleton height={20} width="80%" className="mb-3" />
        <Skeleton height={20} width="70%" className="mb-3" />
        <Skeleton height={400} className="mt-5" />
      </div>
    </div>
  );
}

function App() {
  return (
    <>
      <BrowserRouter>
        <Suspense fallback={<SkeletonFallback />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/order" element={<Order />}>
              <Route index element={<Normal />} />
              <Route path="dry-clean" element={<DryClean />} />
              <Route path="easy-wash" element={<EasyWash />} />
              <Route path="blanket" element={<Blanket />} />
              <Route path="bag" element={<Bag />} />
              <Route path="shoes" element={<Shoes />} />
            </Route>
          </Routes>
        </Suspense>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;

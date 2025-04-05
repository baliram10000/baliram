import Home from "./pages/Home"
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Order from "./pages/Order"
import Normal from "./components/order/Normal"
import DryClean from "./components/order/DryClean"
import EasyWash from "./components/order/EasyWash"
import Blanket from "./components/order/Blanket"
import Bag from "./components/order/Bag"
import Shoes from "./components/order/Shoes"
import Footer from "./components/Footer"

function App() {

  return (
    <>
      <BrowserRouter>
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
      </BrowserRouter>
      <Footer />
    </>
  )
}

export default App

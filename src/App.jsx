import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import MyLike from './pages/MyLike'
import Product from './pages/Product'
import { useEffect } from "react";
import useStore from "@/store/useProdcutStore";
import swimwearProducts from "./data/swimwearProducts";
import Cart from "@/pages/Cart"
import Layout from "@/components/common/Layout"


function App() {

  const { addProducts } = useStore();

  useEffect(() => {
    addProducts(swimwearProducts);
  }, []);

  return (
    <Routes>
      <Route element={<Layout/>}>
        <Route path='/' element ={<Home/>} />
        <Route path='/mylike' element ={<MyLike/>} />
        <Route path='/product/:prdId' element ={<Product/>} />
        <Route path='/cart' element={<Cart/>} />

        {/* 에러페이지 만들기 */}
        <Route path='*' element={'erroer'} />
      </Route>
    </Routes>
  )
}

export default App

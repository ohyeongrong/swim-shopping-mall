import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import MyLike from './pages/MyLike'
import Product from './pages/Product'
import { useEffect } from "react";
import useStore from "./store/useStore";
import swimwearProducts from "./data/swimwearProducts";
import Cart from "@/pages/Cart"


function App() {

  const { addProducts } = useStore();

  useEffect(() => {
    addProducts(swimwearProducts);
  }, []);

  return (
    <Routes>
      <Route path='/' element ={<Home/>} />
      <Route path='/mylike' element ={<MyLike/>}/>
      <Route path='/product/:prdId' element ={<Product/>}/>
      <Route path='/cart' element={<Cart/>}/>

      {/* 에러페이지 만들기 */}
      <Route path='*' element={'erroer'}/>
    </Routes>
  )
}

export default App

import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import MyLike from './pages/MyLike'
import Product from './pages/Product'
import Cart from "@/pages/Cart"
import Search from "@/pages/Search"
import Layout from "@/components/common/Layout"
import Signup from '@/pages/Signup'

function App() {

  return (
          <Routes>
            <Route element={<Layout/>}>

              <Route path='/' element ={<Home/>} />
              <Route path='/mylike' element ={<MyLike/>} />
              <Route path='/product/:prdId' element ={<Product/>} />
              <Route path='/cart' element={<Cart/>} />
              <Route path='/search' element={<Search/>} />
              <Route path="/signup" element={<Signup/>} />

            </Route>

              {/* 에러페이지 만들기 */}
              <Route path='*' element={'error'} />
          </Routes>
  )
}

export default App

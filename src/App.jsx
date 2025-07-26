import './App.css'
import { Route, Routes } from 'react-router-dom'
import Layout from "@/components/common/Layout"
import ProtectedRoute from "@/components/common/ProtectedRoute";

import Home from './pages/Home'
import MyLike from './pages/MyLike'
import Product from './pages/Product'
import Cart from "@/pages/Cart"
import Search from "@/pages/Search"
import Join from '@/pages/Join'
import Login from '@/pages/Login'
import Mypage from '@/pages/Mypage'
import UserInfoPage from '@/pages/UserInfoPage';
import ChangePassword from '@/pages/ChangePassword';



function App() {

  return (
          <Routes>
            <Route element={<Layout/>}>
              <Route path='/' element ={<Home/>} />
              <Route path='/mylike' element ={<MyLike/>} />
              <Route path='/product/:prdId' element ={<Product/>} />
              <Route path='/cart' element={<Cart/>} />
              <Route path='/search' element={<Search/>} />
              <Route path='/mypage' element={<ProtectedRoute><Mypage/></ProtectedRoute>} />
              <Route path='/UserInfoPage' element={<UserInfoPage/>}/>
              <Route path='/ChangePassword' element={<ChangePassword/>}/>
              <Route path='join' element={<Join/>} />
              <Route path='login' element={<Login/>} />
            </Route>

            {/* 에러페이지 만들기 */}
            <Route path='*' element={'error'} />
          </Routes>
  )
}

export default App

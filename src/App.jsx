import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import MyLike from './pages/MyLike'
import Product from './pages/Product'


function App() {

  return (
    <Routes>
      <Route path='/' element ={<Home/>} />
      <Route path='/mylike' element ={<MyLike/>}/>
      <Route path='/product/:prdId' element ={<Product/>}/>

      {/* 에러페이지 만들기 */}
      <Route path='*' element={'erroer'}/>
    </Routes>
  )
}

export default App

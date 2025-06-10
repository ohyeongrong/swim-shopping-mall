import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import MyLike from './pages/MyLike'

function App() {

  return (
    <Routes>
      <Route path='/' element ={<Home/>} />
      <Route path='/mylike' element ={<MyLike/>}/>

      {/* 에러페이지 만들기 */}
      <Route path='*' />
    </Routes>
  )
}

export default App

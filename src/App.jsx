import { Routes, Route } from 'react-router-dom'
import './App.css'
import Portfolio from './pages/Portfolio'
import BlogList from './pages/BlogList'
import BlogPost from './pages/BlogPost'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Portfolio />} />
      <Route path='/blog' element={<BlogList />} />
      <Route path='/blog/:slug' element={<BlogPost />} />
    </Routes>
  )
}

export default App

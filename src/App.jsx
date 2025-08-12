import './App.css'
import { Routes, Route } from 'react-router-dom'
import About from './pages/About'
import Board from './pages/Board'
import Nav from './components/Nav'
import NotFound from './pages/NotFound'
import Home from './pages/Home'
import BoardDetail from './pages/BoardDetail'
import Community from './pages/Community'
import CommunityDetail from './pages/CommunityDetail'

function App() {

  return (
    <div>
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/board' element={<Board />} />
        <Route path='/board/:id' element={<BoardDetail />} />
        <Route path='*' element={<NotFound />} />
        <Route path='/community' element={<Community/>} />
        <Route path='/community/:id' element={<CommunityDetail/>} />
      </Routes>
    </div>
  )
}

export default App

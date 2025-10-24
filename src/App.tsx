import './App.css'
import { Routes, Route } from 'react-router-dom';
import LandingPage from './modules/landing-page/Landing';
import ChatPage from './modules/chat-page/Chat';

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/chat' element={<ChatPage />} />
      </Routes>
    </>
  )
}

export default App;

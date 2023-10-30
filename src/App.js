import {Routes,Route} from 'react-router-dom'
import HomePage from './pages/Home';
import RoomPage from './pages/Room';
import SignInForm from './pages/Home/login';
import ParentComponent from './pages/Home/Homepage';
import Dashboard from './pages/Home/dashboard';
function App() {
  return (
    <Routes>
      <Route path='/' element={<ParentComponent/>}/>
      <Route path='/user' element={<Dashboard/>}/>
      <Route path='/meet' element={<HomePage/>}/>
      <Route path='/room/:roomId' element={<RoomPage/>}/>
    </Routes>
    
  );
}

export default App;

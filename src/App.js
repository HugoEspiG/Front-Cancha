import {Routes,Route} from 'react-router-dom';
import Home from './pages/Home';
import LoginPage from './pages/LoginPage';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home></Home>}/>
        <Route path='/login' element={<LoginPage></LoginPage>}/>
      </Routes>
    </div>
  );
}

export default App;

import './App.css';
import { Login } from './components/Login';
import { Signup } from './components/Signup';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { Home } from './components/Home';
import { PrivateRoutes } from './utils/PrivateRoutes';
import {AuthenticationProvider} from './contexts/AuthenticationContext';

function App() {
  return (
   
    <div className='all'>
      <AuthenticationProvider>
      <Router>
        <Routes>
          <Route element={<PrivateRoutes/>}>
            <Route exact path="/" element = {<Home/>}>
            </Route>
          </Route>
          <Route exact path="/signup" element = {<Signup/>}>
          </Route>
          <Route exact path="/login" element = {<Login/>}>
          </Route>
        </Routes>
      </Router>
      </AuthenticationProvider>
    </div>
  );
}

export default App;

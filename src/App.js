import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './components/Login';
// import Checking from './components/Checking';
// import Mainsection from './components/Mainsection';
// import Navbar from './components/Navbar';
import Popup from './components/Popup';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';



function App() {
  return (
    <>
    {/* <Navbar/> */}
    {/* <Popup/> */}
    {/* <Login/> */}
    {/* <Mainsection/> */}
    <Router>
      <Routes>
        <Route path='/' element={<Popup/>}/>
        <Route path='/Login'  element={<Login customProp="yourValue"/>}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;

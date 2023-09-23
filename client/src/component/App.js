import '../styles/App.scss';
import Login from '../pages/Login';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      {/* <NavBar /> */}
      <Routes>
        <Route path="/login" element={<Login />}/>
      </Routes>
      
      </BrowserRouter>
    </div>
  );
}

export default App;

import '../styles/App.scss';
import Login from '../pages/Login';
import Home from '../pages/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllUsers } from '../redux/features/allUsersSlice';

function App() {
  const dispatch = useDispatch()
  const {allUsers, loading} = useSelector((state)=>state.allUsers)
  const {user} = useSelector((state)=>state.user)
  useEffect(()=>{
    dispatch(getAllUsers())
  },[])

  console.log(user)

  return (
    <div className="App">
      <BrowserRouter>
      {/* <NavBar /> */}
      <Routes>
        <Route exact path="/home" element={<Home />} />
        <Route path="/login" element={<Login />}/>
      </Routes>
      
      </BrowserRouter>
    </div>
  );
}

export default App;

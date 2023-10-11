import '../styles/App.scss';
import Login from '../pages/Login';
import Home from '../pages/Home';
import ProfilePage from '../pages/ProfilePage';
import SignUp from '../pages/SignUp';
import NavBar from './NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMe } from '../redux/features/userSlice';
import { getAllUsers } from '../redux/features/allUsersSlice';

function App() {
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(getMe())
    dispatch(getAllUsers())
  },[])
  const { user, loading } = useSelector((state) => state.user)

  if (loading && !user) {
    return <div>Loading...</div>;
  } else if (!user){
    return(
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />}/>
      <Route path= "/sign-up" element={<SignUp />} />
    </Routes>
    </BrowserRouter>
      )
  }

  return (
    <div className="App">
      <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path=":username" element={<ProfilePage/>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

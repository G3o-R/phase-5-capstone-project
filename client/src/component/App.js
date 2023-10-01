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

function App() {
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(getMe())
  },[])
  const { user, loading } = useSelector((state) => state.user)
  console.log(loading)

  if (loading && !user) {
    // this would be a loading screen
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

  /* 
  when you first open insta w out being logged in the initial route
  is only "/" which is when you log in.
  so what if we had conditional rendering for the route iteself 
  where the path for "/" is the same for both login and home
  except when a user does not have a session the "/" represents the login route
  otherwise it's the home?????
  */

  return (
    <div className="App">
      <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<ProfilePage/>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

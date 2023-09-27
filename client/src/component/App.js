import '../styles/App.scss';
import Login from '../pages/Login';
import Home from '../pages/Home';
import SignUp from '../pages/SignUp';
import { BrowserRouter, Routes, Route, useNavigate, redirect } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { getAllUsers } from '../redux/features/allUsersSlice';
import { getMe } from '../redux/features/userSlice';

function App() {
  const dispatch = useDispatch()
  // const {allUsers, loading} = useSelector((state)=>state.allUsers)
  const {user,loading} = useSelector((state)=>state.user)
  useEffect(()=>{
    dispatch(getMe())
  },[])

  console.log(user)

  return (
    <div className="App">
      <BrowserRouter>
      {/* <NavBar /> */}
      <Routes>
        {/* how do i set my default route to login????? */}
        {/* <Route exact path="/" render={()=>{ return  false ? redirect("/home") : redirect("/login") }}/> */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />}/>
        <Route path= "/sign-up" element={<SignUp />} /> 
      </Routes>
      
      </BrowserRouter>
    </div>
  );
}

export default App;

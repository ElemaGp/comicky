import './App.scss';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Signup from './pages/signup/Signup';
import Login from './pages/login/Login';
import Feed from './pages/feed/Feed';
import Profile from './pages/profile/Profile';
import TailoredFeed from './pages/tailoredFeed/TailoredFeed';
import Create from './pages/create/Create';
import { useContext } from 'react';
import { AuthContext } from './authContext/AuthContext';
import UserProfile from './pages/userProfile/UserProfile';


function App() {

  const {user} = useContext(AuthContext);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={user ? <Feed /> : <Login />} />
            <Route path="login" element={user ? <Feed /> : <Login />} />
            <Route path="signup" element={user ? <Feed /> : <Signup />} />
            <Route path="profile" element={user ? <Profile /> : <Login />} />
            <Route path="profile/:userid" element={user ? <UserProfile /> : <Login />} />
            <Route path="tailoredfeed" element={user ? <TailoredFeed /> : <Login />} />
            <Route path="create" element={user ? <Create /> : <Login />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
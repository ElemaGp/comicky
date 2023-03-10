import './App.scss';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Signup from './pages/signup/Signup';
import Login from './pages/login/Login';
import Feed from './pages/feed/Feed';
import Profile from './pages/profile/Profile';
import TailoredFeed from './pages/tailoredFeed/TailoredFeed';
import Create from './pages/create/Create';

// import { useSelector } from 'react-redux'

function App() {

  // const websiteuser = useSelector(state => state.user.websiteuser) // "const websiteuser" is declared to be equal to the "websiteuser" property of the object which i named "user" at some point in userSlice.jsx. The properties of the "user" were written in the "initial state" part of the userSlice.jsx where i stated their initial state values.

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Feed />} />
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<Signup />} />
            <Route path="profile" element={<Profile />} />
            <Route path="tailoredfeed" element={<TailoredFeed />} />
            <Route path="create" element={<Create />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

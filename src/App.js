import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { Login } from './Components/Login';
import AddFriend from './Components/AddFriends';
import Friends from './Components/FriendsList';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/friends/add" element={<AddFriend />} />
        <Route path="/friends" element={<Friends />} />
      </Routes>
    </Router>
  );
}

export default App;



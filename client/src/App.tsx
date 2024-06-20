import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const [users, setUsers] = useState([]);

const fetchUsers = async (e:any) =>{
  e.preventDefault();
  const response = await fetch('https://test-1-4a9q.onrender.com/api/users');
  const body = await response.json();
  setUsers(body);
}

  return (
    <div className="App">
      <h1>WELCOM TO MERM STUCK</h1>
      <button onClick={(e) => fetchUsers(e) }>SEND</button>
<div>
  <ul>
    {users.map((user:any)=>(

    <li key={user._id}>{user.name}</li>
    
))}
  </ul>
</div>

    </div>
  );
}

export default App;

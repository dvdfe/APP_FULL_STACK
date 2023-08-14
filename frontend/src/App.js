import React, { useState } from 'react';
import Newpost from './components/NewPost';
import Thread from './components/Thread';

const App = () => {

  const [userId, setUserId] = useState("")

  return (
    <div className="app-container">
      <div className="login">
        <h3>Bonjour</h3>
        <input type="text" placeholder="Pseudo"onChange={e => setUserId(e.target.value)}/>
      </div>
      <Newpost userId={userId}/>
      <Thread userId={userId}/>
    </div>
  );
};

export default App;
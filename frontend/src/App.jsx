import SignIn from './components/signin/SignIn';
import SignUp from './components/signup/SignUp';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<SignIn />} />
        <Route path="/singUp" element={<SignUp />} />
      </Routes>
    </Router>
    
  )
}

export default App;

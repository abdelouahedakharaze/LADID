
// import './App.css';
import './index.css'
// import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RegisterForm from './components/RegisterForm';
import LoginForm from './components/LoginForm';
import CreatePostForm from './components/CreatePostForm';
import UserProfile from './components/UserProfile';
import PostsFeed from './components/PostsFeed';
import Logo from './components/Logo';
import SuggestedUsers from './components/SuggestedUsers';
import Homepage from './pages/HomePage';

function App() {
  return (
    <div >
      {/* <RegisterForm/> */}
      {/* <LoginForm/> */}
      {/* <CreatePostForm/> */}
      <Homepage/>
    


    </div>
  );
}

export default App;

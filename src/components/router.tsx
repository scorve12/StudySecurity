import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';

// Import your components here
import Home from '../page/main/App';
import Login from '../page/login/index';
import Profile from '../page/login/profile';
import Adminprofile from '../page/login/adminprorfile';

const AppRouter: React.FC = () => {
    return (
        <Router>    
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />  
            <Route path="/profile" element={<Profile />} />
            <Route path="/adminprofile" element={<Adminprofile />} />
        </Router>
    );
};

export default AppRouter;
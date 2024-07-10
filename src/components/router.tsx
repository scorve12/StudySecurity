import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';

// Import your components here
import Home from '../page/main/App';
import Login from '../page/login/index';

const AppRouter: React.FC = () => {
    return (
        <Router>    
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />  
        </Router>
    );
};

export default AppRouter;
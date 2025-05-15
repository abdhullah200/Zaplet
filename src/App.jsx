import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Redirect from './pages/Redirect';

const App = () => {
    return (
        <Router>
            <Routes>
                {/* Home route */}
                <Route path='/' element={<Home />} />

                {/* Redirect route */}
                <Route path='/go/:id' element={<Redirect />} />
            </Routes>
        </Router>
    );
};

export default App;

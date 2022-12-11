import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './containers/Home'
import Users from './containers/Users'

function MyRoutes() {

    return (
        <Router>
            <Routes>
                <Route path='/' element={<Home />}></Route>
                <Route path='/usuarios' element={<Users />}></Route>
            </Routes>
        </Router>
    )

}

export default MyRoutes


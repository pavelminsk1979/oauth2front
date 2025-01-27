import React from 'react';
import './App.css';
import {GoogleButton} from "./GoogleButton";
import {Route, Routes} from "react-router-dom";
import {Oauth2} from "./Oauth2";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<GoogleButton/>}/>
                <Route path="/auth/google-redirect" element={<Oauth2/>}/>
            </Routes>

        </div>
    );
}

export default App;

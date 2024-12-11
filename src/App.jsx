import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/home';
import Notfound from './pages/Notfound';
import Reading from './pages/Reading';
import Kural from './component/kural';
import data from './assets/kuralname.json';
import Navbar from './component/navbar'

function App() {
    return (
        
        <div className="App">
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="*" element={<Notfound />} />
                <Route path="kural" element={<Reading data={data} />}>
                <Route path="" element={<Kural start={1} end={10} />} />
                    {data.map((item) => (
                        <Route
                            key={item.start}
                            path={`${item.start}`}
                            element={<Kural start={item.start} end={item.end} />}
                        />
                    ))}
                </Route>
            </Routes>
        </div>
    );
}

export default App;

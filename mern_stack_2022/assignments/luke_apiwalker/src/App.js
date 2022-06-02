import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import People from './views/People';
import Planet from './views/Planet';

function App() {
    
    return (
        <BrowserRouter>
            <h1>Luke APIWalker</h1>
            <Dashboard />
            <Routes>
                <Route path='/people/:id' element={<People />} />
                <Route path='/planets/:id' element={<Planet />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
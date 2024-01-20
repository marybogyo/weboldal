
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './Layout';
import Admin from './pages/Admin';
import NoPage from './pages/NoPage';
import Public from './pages/Public';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Admin />} />
          <Route path="public" element={<Public />} />
          <Route path="*" element={<NoPage/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

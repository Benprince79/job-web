// import logo from './logo.svg';
// import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Home from './jobs/home';
import Jobdetails from './jobs/jobdetails';
import Joblist from './jobs/joblist';
import Pages from './jobs/pages';
import Resume from './jobs/resume';


function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/jobdetails" element={<Jobdetails/>}/>
          <Route path="/joblist" element={<Joblist/>}/>
          <Route path="/pages" element={<Pages/>}/>
          <Route path="/resume" element={<Resume/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;

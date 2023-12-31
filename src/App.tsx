import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./Home/Home"

import Error from './Error';
import Dashboard from './Admin/Dashboard';
import Design from './Admin/Design';
import Members from './Admin/Members';
import Desk from './Teacher/Desk';

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/admin/dashboard" element={<Dashboard />} />
        <Route path="/admin/design" element={<Design />} />
        <Route path="/admin/members" element={<Members />} />

        <Route path="/teacher/desk" element={<Desk />} />

        <Route path="*" element={<Error />}/>
      </Routes>
    </Router>
  )
}

export default App

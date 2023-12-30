import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./Home/Home"

import Error from './Error';
import Dashboard from './Admin/Dashboard';

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin/dashboard" element={<Dashboard />} />
        {/* <Route path="/admin/design" element={<Admin />} /> */}
        {/* <Route path="/admin/members" element={<Admin />} /> */}

        <Route path="*" element={<Error />}/>
      </Routes>
    </Router>
  )
}

export default App

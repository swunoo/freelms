import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./Home/Home"

import Error from './Error';
import Dashboard from './Admin/Dashboard';
import Design from './Admin/Design';
import AdminMembers from './Admin/Members';
import TeacherMembers from './Teacher/Members';
import Desk from './Teacher/Desk';
import Class from './Teacher/Class';

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/admin/dashboard" element={<Dashboard />} />
        <Route path="/admin/design" element={<Design />} />
        <Route path="/admin/members" element={<AdminMembers />} />
        <Route path="/admin" element={<Dashboard />} />

        <Route path="/teacher/desk" element={<Desk />} />
        <Route path="/teacher/class/:id" element={<Class />} />
        <Route path="/teacher/members" element={<TeacherMembers />} />
        <Route path="/teacher" element={<Desk />} />

        <Route path="*" element={<Error />}/>
      </Routes>
    </Router>
  )
}

export default App

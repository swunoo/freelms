import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./Home/Home"

import Error from './Error';
import Dashboard from './Admin/Dashboard';
import Design from './Admin/Design';
import AdminMembers from './Admin/Members';
import TeacherMembers from './Teacher/Members';
import {Desk as TeacherDesk} from './Teacher/Desk';
import {Class as TeacherClass} from './Teacher/Class';
import {Desk as StudentDesk} from './Student/Desk';
import {Class as StudentClass} from './Student/Class';
import TeacherLogin from './Teacher/TeacherLogin';

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/admin/dashboard" element={<Dashboard />} />
        <Route path="/admin/design" element={<Design />} />
        <Route path="/admin/members" element={<AdminMembers />} />
        <Route path="/admin" element={<Dashboard />} />

        <Route path="/teacher/auth" element={<TeacherLogin />} />
        <Route path="/teacher/desk" element={<TeacherDesk />} />
        <Route path="/teacher/class/:id" element={<TeacherClass />} />
        <Route path="/teacher/members" element={<TeacherMembers />} />

        <Route path="/student/desk" element={<StudentDesk />} />
        <Route path="/student/class/:id" element={<StudentClass />} />

        <Route path="*" element={<Error />}/>
      </Routes>
    </Router>
  )
}

export default App

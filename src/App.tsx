import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./Home/Home"
import Admin from './Admin/Admin';
import Error from './Error';

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<Admin />} />

        <Route path="*" element={<Error />}/>
      </Routes>
    </Router>
  )
}

export default App

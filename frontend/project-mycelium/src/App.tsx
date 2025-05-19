import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from '../pages/Dashboard/Dashboard';
import Profile from '../pages/Profile/Profile';
import Governance from '../pages/Governance/Governance';
import Tasks from '../pages/Tasks/Tasks';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/governance" element={<Governance />} />
        <Route path="/tasks" element={<Tasks />} />
      </Routes>
    </Router >
  );
}

export default App;
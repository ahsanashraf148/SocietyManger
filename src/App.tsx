import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Homepage from './pages/homepage';
import LoginPage from './pages/login';
import SignupPage from './pages/signup';
import CreateSocietyPage from './pages/CreateSocietyPage';
import DashboardPage from './pages/DashboardPage';
import TeamsPage from './pages/Teams';
import MembersPage from './pages/Members';
import TasksPage from './pages/Tasks';
import EventsPage from './pages/Events';
import Navbar from './components/Navbar';

function App() {
  const location = useLocation();
  const isDashboard = location.pathname.startsWith('/dashboard');

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {!isDashboard && <Navbar />}
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/create-society" element={<CreateSocietyPage />} />
        <Route path="/dashboard" element={<DashboardPage />}>
          <Route path="teams" element={<TeamsPage />} />
          <Route path="members" element={<MembersPage />} />
          <Route path="tasks" element={<TasksPage />} />
          <Route path="events" element={<EventsPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}
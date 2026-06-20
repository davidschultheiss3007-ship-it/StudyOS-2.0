import { Outlet } from 'react-router-dom';
import { Sidebar } from '../components/navigation/Sidebar.jsx';
import './LearningLayout.css';

export function LearningLayout() {
  return (
    <div className="app-layout">
      <Sidebar />
      <main className="learning-layout__main">
        <Outlet />
      </main>
    </div>
  );
}

import { createBrowserRouter } from 'react-router-dom';
import { AppLayout } from '../layouts/AppLayout.jsx';
import { Home } from '../pages/Home.jsx';
import { Semester } from '../pages/Semester.jsx';
import { Module } from '../pages/Module.jsx';
import { Topic } from '../pages/Topic.jsx';
import { Quiz } from '../pages/Quiz.jsx';
import { Settings } from '../pages/Settings.jsx';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'semester/:semesterId', element: <Semester /> },
      { path: 'module/:moduleId', element: <Module /> },
      { path: 'topic/:moduleId/:topicId', element: <Topic /> },
      { path: 'quiz/:moduleId', element: <Quiz /> },
      { path: 'settings', element: <Settings /> },
    ],
  },
]);

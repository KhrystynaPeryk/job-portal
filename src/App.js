import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/Home';
import CandidateRegistration from './components/CandidateRegistration';
import CandidateList from './components/CandidateList';

const appContainerStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/candidate/registration',
    element: <CandidateRegistration />
  },
  {
    path: '/candidate/list',
    element: <CandidateList />
  },
])

function App() {
  return (
    <div className="appContainer" style={appContainerStyle}>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;

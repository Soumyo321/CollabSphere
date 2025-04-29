import React, { useState } from 'react';
import HomePage from './pages/Home';
import Discussion from './pages/Discussions';
import BrowseProjects from './pages/BrowseProjects';
import PostProject from './pages/PostProject';

export default function App() {
  const [view, setView] = useState('home');

  const navigate = (to) => {
    setView(to);
  };

  return (
    <>
      {view === 'home' && <HomePage onNavigate={navigate} />}
      {view === 'discussion' && <Discussion onNavigate={navigate} />}
      {view === 'browse' && <BrowseProjects onNavigate={navigate} />}
      {view === 'post' && <PostProject onNavigate={navigate} />}
    </>
  );
}

import React, { useState, useEffect } from 'react';
import './App.css';
import VideoPage from './components/VideoPage'
import Main from './components/Main'
import { Route, Switch } from 'react-router-dom'
import useRouter from './useRouter.js'
import { useTransition, animated } from 'react-spring'
import SelectionPage from './components/SelectionPage'


function App() {
  const [currentPage, setCurrentPage] = useState('main')
  const { location } = useRouter();
  const transitions = useTransition(location, location => location.pathname, {
    from: { opacity: 0, transform: 'translate3d(50%, 0, 0)' },
    enter: { opacity: 1, transform: 'translate3d(0%, 0, 0)' },
    leave: { opacity: 0, transform: 'translate3d(-50%, 0, 0)' },
})
  return (
    <div className="App">
      { currentPage !== "video" && <Main
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      /> }
      { currentPage !== 'main' && <SelectionPage
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      /> }
      { currentPage === 'video' && <VideoPage
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      /> }
    </div>
  );
}

export default App;

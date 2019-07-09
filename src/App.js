import React from 'react';
import './App.css';
import VideoPage from './components/VideoPage'
import Main from './components/Main'
import { Route, Switch } from 'react-router-dom'
import useRouter from './useRouter.js'
import { useTransition, animated } from 'react-spring'
import SelectionPage from './components/SelectionPage'


function App() {
  const { location } = useRouter();
  const transitions = useTransition(location, location => location.pathname, {
    from: { opacity: 0, transform: 'translate3d(50%, 0, 0)' },
    enter: { opacity: 1, transform: 'translate3d(0%, 0, 0)' },
    leave: { opacity: 0, transform: 'translate3d(-50%, 0, 0)' },
})
  return transitions.map(({ item, props, key }) => (
    <div className="App">
      <animated.div key={key} style={props}>
        <Switch location={item}>
          <Route path='/' exact component={Main} />
          <Route path='/select' component={SelectionPage}/>
          <Route path='/vid' component={VideoPage} />
        </Switch>
      </animated.div>
    </div>
  ));
}

export default App;

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import About from './components/About';
import Test from './components/Test';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Router>
    <div>
    <Route exact={true} path="/" component={Test} />
  <Route path="/about" component={About} />
    </div>
  </Router>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();

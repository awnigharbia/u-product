import React from 'react';
import {render} from 'react-dom';
import './styles/index.css';
import {Project} from './components/imports'
import {BrowserRouter as Router} from 'react-router-dom'
import registerServiceWorker from './registerServiceWorker';

render(
    <Router>
        <Project />
    </Router>,
document.getElementById('root'));
registerServiceWorker();

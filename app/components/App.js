'use strict';

import React from 'react';
import {RouteHandler} from 'react-router';


const App = React.createClass({
    render () {
        return (
          <div>
            <RouteHandler />
          </div>
        );
    }
});

export default App;

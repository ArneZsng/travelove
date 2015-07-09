'use strict';

import React from 'react';
import {RouteHandler} from 'react-router';

import Header from './layout/Header';
import Footer from './layout/Footer';

import from 'jquery';
import from 'materialize-css/bin/materialize.css';
import from 'materialize-css/bin/materialize.js';
import from '../../../assets/stylesheets/main.scss'

const Public = React.createClass({
    render () {
        return (
          <div>
            <Header />
            <RouteHandler />
            <Footer />
          </div>
        );
    }
});

export default Public;

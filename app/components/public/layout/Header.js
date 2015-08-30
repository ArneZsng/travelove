'use strict';

import React from 'react';
import Reflux from 'reflux';

import UserStore from '../../../stores/UserStore';

const Header = React.createClass({
    mixins: [Reflux.connect(UserStore, 'data')],
    render () {

        return(
            <span></span>
        );
    }
});

export default Header;

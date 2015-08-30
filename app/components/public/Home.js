'use strict';

import React from 'react';
import Reflux from 'reflux';

import UserActions from '../../actions/UserActions.js';
import UserStore from '../../stores/UserStore.js';

const Home = React.createClass({
        mixins: [Reflux.connect(UserStore, 'data')],
        contextTypes: {
          router: React.PropTypes.func
        },

        handleClickBeach: function() {
          UserActions.setType('shopping');
          this.context.router.transitionTo('week');
        },

        handleClickCulture: function() {
          UserActions.setType('culture');
          this.context.router.transitionTo('week');
        },

        render() {
            return (
                <div className="row section-type">
                    <div className="col s12 m6 l6 section-type__choice section-type__choice--beach">
                        <div onClick={this.handleClickBeach} className="section-type__choice__bg">
                            <h1>Shopping</h1>
                        </div>
                    </div>
                    <div className="col s12 m6 l6 section-type__choice section-type__choice--culture">
                        <div onClick={this.handleClickCulture} className="section-type__choice__bg">
                            <h1>Culture</h1>
                        </div>
                    </div>
                </div>
        );
    }
});

export default Home;

'use strict';

import React from 'react';
import Reflux from 'reflux';

import _ from 'lodash';

import UserActions from '../../actions/UserActions.js';
import UserStore from '../../stores/UserStore.js';

const Week = React.createClass({
        mixins: [Reflux.connect(UserStore, 'data')],

        contextTypes: {
          router: React.PropTypes.func
        },

        getInitialState: function () {
          return {
          };
        },

        handleClickFirst: function() {
            UserActions.setWeek('6.8 - 9.8');
            this.context.router.transitionTo('destination');
        },

        handleClickSecond: function() {
            UserActions.setWeek('13.8 - 16.8');
            this.context.router.transitionTo('destination');
        },

        render() {
            return (
                <div className="row section-type">
                    <div className="col s12 m6 l6 section-type__choice section-type__choice--pattern">
                        <div onClick={this.handleClickFirst} className="section-type__choice__bg section-type__choice__bg--purple">
                            <h1>6.8 - 9.8</h1>
                        </div>
                    </div>
                    <div className="col s12 m6 l6 section-type__choice section-type__choice--pattern">
                        <div onClick={this.handleClickSecond} className="section-type__choice__bg section-type__choice__bg--purple">
                            <h1>13.8 - 16.8</h1>
                        </div>
                    </div>
                </div>
        );
    }
});

export default Week;

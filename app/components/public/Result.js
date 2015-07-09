'use strict';

import React from 'react';
import Reflux from 'reflux';

import _ from 'lodash';

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

        handleClick: function() {
            this.context.router.transitionTo('home');
        },

        render() {
            return (
                <div className="row section-result">
                    <div className="card-panel">
                        <h3>
                            Ok, we are going to {this.state.data.destination} from {this.state.data.week}!
                        </h3>
                        <h5>Flights are booked!</h5>
                        <br />
                        <br />
                        <a onClick={this.handleClick} className="waves-effect waves-light btn">Restart</a>
                    </div>
                </div>
        );
    }
});

export default Week;

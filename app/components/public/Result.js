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
            var typeText = this.state.data.type === 'shopping' ? "stores around" : "culture of";

            return (
                <div className="row section-result">
                    <div className="card-panel">
                        <h3>
                            Awesome, we are going to explore the {typeText} {this.state.data.destination} from {this.state.data.week}!
                        </h3>
                        <h5>Hopefully. We are blind booking! <a href="https://www.germanwings.com/skysales/BlindBookingSearch.aspx">Let's go.</a></h5>
                        <br />
                        <br />
                        <a onClick={this.handleClick} className="waves-effect waves-light btn">Restart</a>
                    </div>
                </div>
        );
    }
});

export default Week;

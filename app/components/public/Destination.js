'use strict';

import React from 'react';
import Reflux from 'reflux';

import UserActions from '../../actions/UserActions.js';
import UserStore from '../../stores/UserStore.js';

const City = React.createClass({
    mixins: [Reflux.connect(UserStore, 'data')],

    contextTypes: {
      router: React.PropTypes.func
    },

    handleClick: function () {
        UserActions.setDestination(this.props.name);
        this.context.router.transitionTo('result');
    },

    render() {
      return (
          <div className="row section-list">
              <div className="col s12 m12 l12 section-list__item">
                  <div onClick={this.handleClick} className="section-list__item__bg">
                      <h3>{this.props.name}</h3>
                  </div>
              </div>
          </div>
      );
    }
});

const Destination = React.createClass({
    mixins: [Reflux.connect(UserStore, 'data')],

    getInitialState: function () {
      return {
      };
    },

    render() {
      var citiesCulture = [
        'Budapest',
        'Madrid',
        'Milan',
        'Paris',
        'Prague',
        'Venice',
        'Vienna'
      ];

      var citiesBeach = [
        'Amsterdam',
        'Madrid',
        'Milan',
        'Manchester',
        'Oslo',
        'Paris',
        'Stockholm',
        'Venice',
        'Vienna'
      ];

      var cityList = this.state.data.type === 'beach' ? citiesBeach : citiesCulture;

      var cities = cityList.map(city => {
         return <City name={city} />;
      });

      return (
          <span>
              {cities}
          </span>
      );
    }
});

export default Destination;

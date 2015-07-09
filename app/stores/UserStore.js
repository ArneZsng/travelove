'use strict';

/* global localStorage */

import React from 'react';
import Reflux from 'reflux';

import {constants} from '../constants/constants.js';
import rp from 'axios';

import UserActions from '../actions/UserActions.js';

const UserStore = Reflux.createStore({

    init: function () {
        this.listenTo(UserActions.setType, this.setType);
        this.listenTo(UserActions.setWeek, this.setWeek);
        this.listenTo(UserActions.setDestination, this.setDestination);

        this.data = {
            type: '',
            week: '',
            destination: ''
        };
    },

    getInitialState: function () {
        return this.data;
    },

    setType: function(type) {
        console.log(type);
        this.data.type = type;
        this.trigger(this.data);
    },

    setWeek: function(week) {
        console.log(week);
        this.data.week = week;
        this.trigger(this.data);
    },

    setDestination: function(destination) {
        console.log(destination);
        this.data.destination = destination;
        this.trigger(this.data);
    }
});

export default UserStore;

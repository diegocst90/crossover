'use strict';

/*
 * components/items/_item.js
 * Class definition for item
 *
 * (c) 2016 Diego Castillo
 * License: MIT
 */

function Item(data) {
    data = data || {};

    /*Object.reverseMerge(data, {
        name: "McLovin",
        age: 25,
        homeState: "Hawaii"
    }); use angular.extend */

    return {
        introduce: function() {
            return "Hi I'm " + I.name + " and I'm " + I.age;
        }
    };
}
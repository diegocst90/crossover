'use strict';

/*
 * common/dashboard.js
 *
 * (c) 2015 Diego Castillo ionic.cl
 * License: MIT
 */

angular.module('crossover.items')

.service('ItemsCollection', function(ItemObject, $http) {
    var ItemsCollection = {
        items: [],
        getItems: function() {
            return this.items;
        },
        setItems: function(items) {
            this.items = items;
        },
        addItem: function(item) {
            if (typeof this.items == 'undefined') this.items = [];
            this.items.push(item);
        },
        addItems: function(items) {
            for(var i=0 ; i < items.length; i++) {
                this.addItem(items[i]);
            }
        },
        getItem: function(item) {
            if (this.items.indexOf == 'function') {
                return this.items.indexOf(item);
            }

            //in case indexOf isn't available (IE <= 8)
            //let's check the code
            var index = -1;
            for(var i=0 ; i < this.items.length; i++) {
                if (item.data.id == this.items[i].data.id) {
                    index = i;
                    break;
                }
            }
            return index;
        },
        removeItem: function(item) {
            var index = this.getItem(item);
            if (index >= 0) this.items.splice(index, 1);
        },
        loadDemoData: function() {
            var self = this;
            self.setItems([]);

            return $http({
                method: 'GET',
                type: 'jsonp',
                url: 'items_data_source.js'
            });
        }
    };

    return ItemsCollection;
});
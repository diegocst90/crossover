'use strict';

/*
 * common/dashboard.js
 *
 * (c) 2015 Diego Castillo ionic.cl
 * License: MIT
 */

angular.module('components.items',[])

.service('ItemsCollection', ['$q', '$http', '$cacheFactory', '$state', '$stateParams',
function($q, $http, $cacheFactory, $state, $stateParams) {
    var _items = [];

    var ItemsCollection = {
        getItems: function() {
            return _items;
        },
        setItems: function(items) {
            _items = items;
        },
        addItem: function(item) {
            _items.push(item);
        },
        getItem: function(item) {
            if (_items.indexOf == 'function') {
                return _items.indexOf(item);
            }

            //in case indexOf isn't available (IE <= 8)
            //let's check the code
            var index = -1;
            for(var i=0 ; i < _items.length; i++) {
                if (item.code == _items[i].code) {
                    index = i;
                    break;
                }
            }
            return index;
        },
        removeItem: function(item) {
            var index = this.getItem(item.code);
            if (index >= 0) _items.splice(index, 1);
        }
    };

    return ItemsCollection;
}]);
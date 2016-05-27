'use strict';
'use strict';

/*
 * components/items/_item.js
 *
 * (c) 2015 diegocst90
 * License: MIT
 */

angular.module('components.services.items')
.factory('ItemObject',['$q', '$state',
    function($q, $state){
        var item = function (data) {
            this.data = angular.extend({
                id: '', //assuiming id is a PK as indentificator of an item
                type: '',
                code: '',
                owner: '',
                time_started: Number(new Date()),
                result_status: 0, //0 => Pending, 1 => Running, 2 => Finished (Completed or Accepted), 3 => Wrong (Fail or Rejected)
                measures: {
                    metrics: { progress: 0, failed: false },
                    build: { progress: 0, failed: false },
                    unit_test: { progress: 0, failed: false },
                    functional_test: { progress: 0, failed: false }
                }
            },data);
        };

        item.prototype.isBuild = function() {
            return (this.data.type == 'build');
        };

        item.prototype.isFirewall = function() {
            return (this.data.type == 'firewall');
        };

        item.prototype.isPending = function() {
            return (this.data.result_status == 0);
        };

        item.prototype.isFinished = function() {
            return (this.data.result_status == 2);
        };

        item.prototype.isFailedOrRejected = function() {
            return (this.data.result_status == 3);
        };

        item.prototype.getItemPicture = function() {
            return (this.isBuild())? 'computer-' + this.getColorClass() + '.svg' : 'wall-' + this.getColorClass() + '.svg';
        };

        item.prototype.getResultState = function() {
            if (this.data.result_status == 0) return 'Pending';
            if (this.data.result_status == 1) return 'Running';
            if (this.data.result_status == 2) return (this.isBuild())? 'Completed' : 'Accepted'; //Completed or Accepted
            if (this.data.result_status == 3) return (this.isBuild())? 'Failed' : 'Rejected'; //Failed or Rejected

            return '';
        };

        item.prototype.getColorClass = function() {
            if (this.data.result_status == 0) return 'gray';
            if (this.data.result_status == 1) return 'blue';
            if (this.data.result_status == 2) return 'green'; //Completed or Accepted
            if (this.data.result_status == 3) return 'red'; //Failed or Rejected

            return '';
        };

        return item;
    }]);
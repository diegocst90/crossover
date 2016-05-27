//HEAD 
(function(app) {
try { app = angular.module("crossover-html2"); }
catch(err) { app = angular.module("crossover-html2", []); }
app.run(["$templateCache", function($templateCache) {
"use strict";

$templateCache.put("components/directives/color-percent/color-percent.html","<span ng-class=\"'color-ok ' + extraClass\" ng-if=\"percent >= 0.75\">{{percent*100 | number : 0 }}%</span>\n" +
    "<span ng-class=\"'color-warning ' + extraClass\" ng-if=\"percent >= 0.5 && percent < 0.75\">{{percent*100 | number : 0 }}%</span>\n" +
    "<span ng-class=\"'color-danger ' + extraClass\" ng-if=\"percent < 0.5\">{{percent*100 | number : 0 }}%</span>")

$templateCache.put("components/directives/coverage-percent/coverage-percent.html","<div class=\"padded-left padded-right\">\n" +
    "    <div class=\"coverage-bar\">\n" +
    "        <div ng-style=\"{'width': (percent * 100) + '%'}\" class=\"pull-left filled\"></div>\n" +
    "        <div ng-style=\"{'width': ((1-percent) * 100) + '%'}\" class=\"pull-left unfilled\"></div>\n" +
    "        <p class=\"x-small text-center legend\">\n" +
    "            <strong><color-percent class-name=\"x-small\" percent=\"percent\"></color-percent></strong>\n" +
    "            <br/>\n" +
    "            code covered\n" +
    "        </p>\n" +
    "    </div>\n" +
    "</div>\n" +
    "")

$templateCache.put("components/directives/crossover-item/crossover-item.html","<div ng-controller=\"ItemCtrl\">\n" +
    "    <div class=\"item-field col-md-3 col-sm-6 col-xs-6\">\n" +
    "        <div ng-class=\"'sprite item-icon sprite-' + ((item.isBuild())? 'computer':'wall' ) + '-' + item.getColorClass() + '-25px'\"></div>\n" +
    "        <span style=\"vertical-align: top\">{{ item.data.code }}</span>\n" +
    "    </div>\n" +
    "    <div class=\"item-field col-md-1 col-sm-2 col-xs-6 text-center\">{{ item.data.owner }}</div>\n" +
    "    <div class=\"item-field col-md-3 col-sm-4 col-xs-6 text-center\">{{ item.data.time_started | date: 'MM/dd/yyyy h:mma' | lowercase }}</div>\n" +
    "    <div class=\"item-field col-md-1 col-sm-4 col-xs-6 text-left text-center-xs text-center-md text-center-lg\"><span class=\"visible-sm-inline visible-xs-inline\">State: </span>{{ item.getResultState() }}</div>\n" +
    "    <div ng-class=\"'item-field measure-content col-md-1 col-sm-2 col-xs-6 text-center ' + ((item.expanded)? 'hidden-xs':'')\">\n" +
    "        <measure-bar class=\"animate-hide\" ng-show=\"!item.expanded\" measure-data=\"item.data.measures.metrics\"></measure-bar>\n" +
    "    </div>\n" +
    "    <div ng-class=\"'item-field measure-content col-md-1 col-sm-2 col-xs-6 text-center ' + ((item.expanded)? 'hidden-xs':'')\">\n" +
    "        <measure-bar class=\"animate-hide\" ng-show=\"!item.expanded\" measure-data=\"item.data.measures.build\"></measure-bar>\n" +
    "    </div>\n" +
    "    <div ng-class=\"'item-field measure-content col-md-1 col-sm-2 col-xs-6 text-center ' + ((item.expanded)? 'hidden-xs':'')\">\n" +
    "        <measure-bar class=\"animate-hide\" ng-show=\"!item.expanded\" measure-data=\"item.data.measures.unit_test\"></measure-bar>\n" +
    "    </div>\n" +
    "    <div ng-class=\"'item-field measure-content col-md-1 col-sm-2 col-xs-6 text-center ' + ((item.expanded)? 'hidden-xs':'')\">\n" +
    "        <measure-bar class=\"animate-hide\" ng-show=\"!item.expanded\" measure-data=\"item.data.measures.functional_test\"></measure-bar>\n" +
    "    </div>\n" +
    "    <div uib-collapse=\"!item.expanded\" class=\"col-md-12 col-sm-12 col-xs-12\">\n" +
    "        <div class=\"row padded-top\">\n" +
    "            <div class=\"col-md-15 col-sm-6 col-xs-12\">\n" +
    "                <metrics-measurement stop-event item-metrics=\"item.data.measures.metrics\" uib-popover-template=\"'components/directives/crossover-item/popovers/_metrics-measurement.html'\" popover-trigger=\"outsideClick\"></metrics-measurement>\n" +
    "            </div>\n" +
    "            <div class=\"visible-xs-inline-block col-xs-12 padded-top\"></div>\n" +
    "            <div class=\"col-md-15 col-sm-6 col-xs-12\">\n" +
    "                <build-measurement stop-event item-build=\"item.data.measures.build\" uib-popover-template=\"'components/directives/crossover-item/popovers/_build-measurement.html'\" popover-trigger=\"outsideClick\"></build-measurement>\n" +
    "            </div>\n" +
    "            <div class=\"visible-sm-inline-block visible-xs-inline-block col-sm-12 col-xs-12 padded-top\"></div>\n" +
    "            <div class=\"col-md-15 col-sm-4 col-xs-12\">\n" +
    "                <test-measurement stop-event title=\"Unit Test\" item=\"item\" measurement-index=\"unit_test\" uib-popover-template=\"'components/directives/crossover-item/popovers/_unit-test-measurement.html'\" popover-trigger=\"outsideClick\"></test-measurement>\n" +
    "            </div>\n" +
    "            <div class=\"visible-xs-inline-block col-xs-12 padded-top\"></div>\n" +
    "            <div class=\"col-md-15 col-sm-4 col-xs-12\">\n" +
    "                <test-measurement stop-event title=\"Functional Test\" item=\"item\" measurement-index=\"functional_test\" uib-popover-template=\"'components/directives/crossover-item/popovers/_functional-test-measurement.html'\" popover-trigger=\"outsideClick\"></test-measurement>\n" +
    "            </div>\n" +
    "            <div class=\"visible-xs-inline-block col-xs-12 padded-top\"></div>\n" +
    "            <div class=\"col-md-15 col-sm-4 col-xs-12\">\n" +
    "                <div class=\"padded-left padded-right\">\n" +
    "                    <p class=\"text-center color-black\">Result</p>\n" +
    "                    <div class=\"results\">\n" +
    "                        <execution-result item=\"item\"></execution-result>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>")

$templateCache.put("components/directives/measure-bar/measure-bar.html","<uib-progressbar\n" +
    "        ng-if=\"!measureData.failed\"\n" +
    "        value=\"(measureData.progress >= 0)? measureData.progress*100 : 0\"\n" +
    "        uib-tooltip=\"{{(measureData.progress)? measureData.progress*100 : 0 | number : 0 }}%\">\n" +
    "</uib-progressbar>\n" +
    "\n" +
    "<uib-progressbar\n" +
    "        class=\"failed\"\n" +
    "        ng-if=\"measureData.failed\"\n" +
    "        value=\"100\"\n" +
    "        uib-tooltip=\"Failed!\">\n" +
    "</uib-progressbar>")

$templateCache.put("components/directives/crossover-item/popovers/_build-measurement.html","<h4 class=\"color-black\">Build Information</h4>\n" +
    "<p class=\"color-black\"> Here's included all the information related Build</p>")

$templateCache.put("components/directives/crossover-item/popovers/_functional-test-measurement.html","<h4 class=\"color-black\">Functional Test Information</h4>\n" +
    "<p class=\"color-black\"> Here's included all the information related Functional Test</p>")

$templateCache.put("components/directives/crossover-item/popovers/_metrics-measurement.html","<h4 class=\"color-black\">Metrics Information</h4>\n" +
    "<p class=\"color-black\"> Here's included all the information related Metrics</p>")

$templateCache.put("components/directives/crossover-item/popovers/_unit-test-measurement.html","<h4 class=\"color-black\">Unit Test Information</h4>\n" +
    "<p class=\"color-black\"> Here's included all the information related Unit Test</p>")

$templateCache.put("components/directives/crossover-item/item_directives/build-measurement/build-measurement.html","<div class=\"measure_block padded-left padded-right\">\n" +
    "    <h5>Build</h5>\n" +
    "    <div class=\"row extra-margin\">\n" +
    "        <div class=\"col-md-6 col-sm-6 col-xs-6 text-center\" ng-if=\"itemBuild.categories.debug\">\n" +
    "            <div class=\"build-critery sprite sprite-computer-blue-60px\"></div>\n" +
    "            <p>Debug</p>\n" +
    "        </div>\n" +
    "        <div class=\"col-md-6 col-sm-6 col-xs-6 text-center\" ng-if=\"itemBuild.categories.release\">\n" +
    "            <div class=\"build-critery sprite sprite-computer-blue-60px\"></div>\n" +
    "            <p>Release</p>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div class=\"flow-bottom text-center\">\n" +
    "        {{ itemBuild.last_update | date: 'MM/dd/yyyy h:mma' | lowercase }}\n" +
    "    </div>\n" +
    "</div>")

$templateCache.put("components/directives/crossover-item/item_directives/execution-result/execution-result.html","<div ng-if=\"item.isFirewall()\" class=\"text-center\">\n" +
    "    <div ng-if=\"item.isFinished()\">\n" +
    "        <p class=\"color-warning no-padding no-margin\">Change Accepted</p>\n" +
    "        <p class=\"x-large color-warning\">Auto-Merged</p>\n" +
    "        <button stop-event type=\"button\" class=\"btn btn-primary\"><i class=\"glyphicon glyphicon-search\"></i>&nbsp;Merged Build</button>\n" +
    "    </div>\n" +
    "    <div ng-if=\"item.isFailedOrRejected()\">\n" +
    "        <p class=\"color-danger no-padding no-margin\">Change Rejected</p>\n" +
    "        <p class=\"x-large color-danger padded-bottom line-height-x-large\">Metrics Reduction</p>\n" +
    "        <button stop-event type=\"button\" class=\"btn btn-primary\">Find Issues</button>\n" +
    "    </div>\n" +
    "    <div ng-if=\"!item.isFinished() && !item.isFailedOrRejected()\">\n" +
    "        <p class=\"color-black\">{{ (item.isPending())? 'Waiting for execution' : 'Executing ...'}}</p>\n" +
    "    </div>\n" +
    "</div>\n" +
    "<div ng-if=\"item.isBuild()\" class=\"text-center\">\n" +
    "    <div ng-if=\"item.isFinished()\">\n" +
    "        <p class=\"x-large color-green no-padding no-margin padded-bottom\">Complete</p>\n" +
    "        <button stop-event type=\"button\" class=\"btn btn-primary\">Deploy</button>\n" +
    "        <p class=\"no-padding no-margin color-black\">to</p>\n" +
    "        <div class=\"btn-group\" uib-dropdown keyboard-nav>\n" +
    "            <button stop-event id=\"{{ 'deployment-env-' + item.data.id }}\" type=\"button\" class=\"btn btn-primary\" uib-dropdown-toggle>\n" +
    "                Select ENV <span class=\"caret\"></span>\n" +
    "            </button>\n" +
    "            <ul class=\"dropdown-menu\" uib-dropdown-menu role=\"menu\" aria-labelledby=\"{{ 'deployment-env-' + item.data.id }}\">\n" +
    "                <li role=\"menuitem\"><a stop-event href=\"#\">Stage</a></li>\n" +
    "                <li role=\"menuitem\"><a stop-event href=\"#\">QA</a></li>\n" +
    "                <li role=\"menuitem\"><a stop-event href=\"#\">Production</a></li>\n" +
    "            </ul>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div ng-if=\"item.isFailedOrRejected()\">\n" +
    "        <p class=\"no-padding no-margin x-large color-danger\">Failed</p>\n" +
    "        <p></p>\n" +
    "        <button stop-event type=\"button\" class=\"btn btn-primary\"><i class=\"glyphicon glyphicon-folder-open\"></i>&nbsp;&nbsp;Check Log Files</button>\n" +
    "    </div>\n" +
    "    <div ng-if=\"!item.isFinished() && !item.isFailedOrRejected()\">\n" +
    "        <p class=\"color-black no-margin no-padding\">{{ (item.isPending())? 'Waiting for execution' : 'Executing ...'}}</p>\n" +
    "    </div>\n" +
    "</div>")

$templateCache.put("components/directives/crossover-item/item_directives/metrics-measurement/metrics-measurement.html","<div class=\"measure_block padded-left padded-right\">\n" +
    "    <h5>Metrics</h5>\n" +
    "    <div class=\"row\">\n" +
    "        <div class=\"col-md-5 col-sm-6 col-xs-6 text-center ellipsis-overflow\">\n" +
    "            <div ng-class=\"'metric-critery sprite sprite-arrow-' + ((itemMetrics.categories.test.tendency == '+')? 'up':'down' ) + '-' + ((itemMetrics.categories.test.tendency == '+')? 'green':'red' ) + '-60px'\">\n" +
    "                <span class=\"color-white\">{{itemMetrics.categories.test.percent * 100 | number: 0}}</span>\n" +
    "            </div>\n" +
    "            <p>Test</p>\n" +
    "        </div>\n" +
    "        <div class=\"col-md-7 col-sm-6 col-xs-6 text-center ellipsis-overflow\">\n" +
    "            <div ng-class=\"'metric-critery sprite sprite-arrow-' + ((itemMetrics.categories.maintainability.tendency == '+')? 'up':'down' ) + '-' + ((itemMetrics.categories.maintainability.tendency == '+')? 'green':'red' ) + '-60px'\">\n" +
    "                <span class=\"color-white\">{{itemMetrics.categories.maintainability.percent * 100 | number: 0}}</span>\n" +
    "            </div>\n" +
    "            <p>Maintainability</p>\n" +
    "        </div>\n" +
    "        <div class=\"col-md-5 col-sm-6 col-xs-6 text-center ellipsis-overflow\">\n" +
    "            <div ng-class=\"'metric-critery sprite sprite-arrow-' + ((itemMetrics.categories.security.tendency == '+')? 'right':'left' ) + '-' + ((itemMetrics.categories.security.tendency == '+')? 'yellow':'red' ) + '-60px'\">\n" +
    "                <span ng-class=\"'color-' + ((itemMetrics.categories.security.tendency == '+')? 'black':'white')\">{{itemMetrics.categories.maintainability.percent * 100 | number: 0}}</span>\n" +
    "            </div>\n" +
    "            <p>Security</p>\n" +
    "        </div>\n" +
    "        <div class=\"col-md-7 col-sm-6 col-xs-6 text-center ellipsis-overflow\">\n" +
    "            <div ng-class=\"'metric-critery sprite sprite-arrow-' + ((itemMetrics.categories.workmanship.tendency == '+')? 'right':'left' ) + '-' + ((itemMetrics.categories.workmanship.tendency == '+')? 'yellow':'red' ) + '-60px'\">\n" +
    "                <span ng-class=\"'color-' + ((itemMetrics.categories.workmanship.tendency == '+')? 'black':'white')\">{{itemMetrics.categories.workmanship.percent * 100 | number: 0}}</span>\n" +
    "            </div>\n" +
    "            <p>Workmanship</p>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>")

$templateCache.put("components/directives/crossover-item/item_directives/test-measurement/test-measurement.html","<div class=\"measure_block padded-left padded-right\">\n" +
    "    <h5>{{ title ? title : 'Test' }}</h5>\n" +
    "    <div class=\"row\">\n" +
    "        <div class=\"text-center\">\n" +
    "            <canvas id=\"{{measurementIndex + '-' + item.data.id}}\"\n" +
    "                    height=\"90\" width=\"180\"\n" +
    "                    class=\"chart chart-pie\"\n" +
    "                    chart-data=\"[passed, failed]\" chart-labels=\"['Passed', 'Failed']\" chart-colours=\"['#72ac4d', '#eb7d3b']\">\n" +
    "            </canvas>\n" +
    "        </div>\n" +
    "        <div class=\"col-md-6 col-md-offset-6 col-sm-5 col-sm-offset-7 col-xs-4 col-xs-offset-8 text-center aligned-to-graphic\">\n" +
    "            <color-percent extra-class=\"(passed < tests_total)? 'x-large' : 'x-medium'\" percent=\"passed/tests_total\"></color-percent>\n" +
    "            <p class=\"text-center x-small color-black\">tests passed</p>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div class=\"flow-bottom text-center\">\n" +
    "        <coverage-percent percent=\"(item.data.measures[measurementIndex].covered_code)? item.data.measures[measurementIndex].covered_code : 0\"></coverage-percent>\n" +
    "    </div>\n" +
    "</div>")
}]);
})();
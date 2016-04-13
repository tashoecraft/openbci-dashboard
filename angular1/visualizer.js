
angular.module('openbciVisualizer', ['chart.js'])
    .config(function (ChartJsProvider) {
        ChartJsProvider.setOptions({
            chartColors: ['#F7464A', '#46BFBD','#FDB45C', '#949FB1','#4D5360', '#803690','#00ADF9', '#FF0000'],
            responsive: false,
            pointDot: false,
            datasetFill: false,
            scaleOverride: true,
            scaleStartValue: -2,
            scaleStepWidth: 1,
            scaleSteps: 6
        });
    });
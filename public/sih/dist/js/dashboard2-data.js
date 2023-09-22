/*Dashboard3 Init*/

"use strict";
$(document).ready(function() {
    /*Toaster Alert*/
    $.toast({
        heading: 'Oh snap!',
        text: '<p>Change a few things and try submitting again.</p>',
        position: 'bottom-right',
        loaderBg: '#00acf0',
        class: 'jq-toast-danger',
        hideAfter: 3500,
        stack: 6,
        showHideTransition: 'fade'
    });
});

/*ApexCharts Start*/
window.Apex = {
    stroke: {
        width: 3
    },
    markers: {
        size: 0
    },
    tooltip: {
        fixed: {
            enabled: true,
        }
    }
};

var randomizeArray = function(arg) {
    var array = arg.slice();
    var currentIndex = array.length,
        temporaryValue, randomIndex;

    while (0 !== currentIndex) {

        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

// data for the sparklines that appear below header area
var sparklineData = [47, 45, 54, 38, 56, 24, 65, 31, 37, 39, 62, 51, 35, 41, 35, 27, 93, 53, 61, 27, 54, 43, 19, 46];
var spark1 = {
    chart: {
        type: 'area',
        height: 60,
        sparkline: {
            enabled: true
        },
    },
    colors: ['#00acf0'],
    stroke: {
        curve: 'straight',
        colors: ['#00acf0'],
    },
    fill: {
        opacity: 0.3,
        colors: ['#00acf0'],
    },
    series: [{
        data: randomizeArray(sparklineData)
    }],
    xaxis: {
        crosshairs: {
            width: 1
        },
    },
    yaxis: {
        min: 0
    }
}
var spark2 = {
    chart: {
        type: 'area',
        height: 60,
        sparkline: {
            enabled: true
        },
    },
    colors: ['#ffbf36'],
    stroke: {
        curve: 'straight',
        colors: ['#ffbf36'],
    },
    fill: {
        opacity: 0.3,
        colors: ['#ffbf36'],
    },
    series: [{
        data: randomizeArray(sparklineData)
    }],
    xaxis: {
        crosshairs: {
            width: 1
        },
    },
    yaxis: {
        min: 0
    }
}
var spark1 = new ApexCharts(document.querySelector("#spark1"), spark1);
spark1.render();
var spark2 = new ApexCharts(document.querySelector("#spark2"), spark2);
spark2.render();

var optionsCircle4 = {
    chart: {
        type: 'radialBar',
        width: 390,
        height: 445,
    },
    plotOptions: {
        radialBar: {
            size: undefined,
            inverseOrder: true,
            hollow: {
                margin: 8,
                size: '30%',
                background: 'transparent',

            },
            track: {
                show: false,
            },
            startAngle: -180,
            endAngle: 720

        },
    },
    stroke: {
        lineCap: 'round'
    },
    colors: ["#00acf0", '#ffbf36', '#22af47','#22af35','#ffaf45'],
    series: [8,12,24,26,30],
    labels: ['Age', 'Caste', 'Gender','Area','School'],
    legend: {
        show: true,
        floating: true,
        position: 'right',
        offsetX: 70,
        offsetY: 240
    },
}

var chartCircle4 = new ApexCharts(document.querySelector('#e_chart_3'), optionsCircle4);
chartCircle4.render();
/*ApexCharts End*/

/*****Resize function start*****/
var echartResize;
$(window).on("resize", function() {
    /*E-Chart Resize*/
    clearTimeout(echartResize);
    echartResize = setTimeout(echartsConfig, 200);
}).resize();
/*****Resize function end*****/

/*****Function Call start*****/
echartsConfig();
/*****Function Call end*****/
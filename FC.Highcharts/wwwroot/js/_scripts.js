
import '/_content/FC.Highcharts/js/highcharts.js';
import '/_content/FC.Highcharts/js/exporting.js';
import '/_content/FC.Highcharts/js/export-data.js';
import '/_content/FC.Highcharts/js/accessibility.js';

window.ChartContent = {

    scatter: function (male, female, title, subtitle) {

        setTimeout(() => {

            Highcharts.chart('container', {
                chart: {
                    type: 'scatter',
                    zoomType: 'xy'
                },
                title: {
                    text: title //local variable
                },
                subtitle: {
                    text: subtitle //local variable
                },
                xAxis: {
                    title: {
                        enabled: true,
                        text: 'Height (cm)'
                    },
                    startOnTick: true,
                    endOnTick: true,
                    showLastLabel: true
                },
                yAxis: {
                    title: {
                        text: 'Weight (kg)'
                    }
                },
                legend: {
                    layout: 'vertical',
                    align: 'left',
                    verticalAlign: 'top',
                    x: 100,
                    y: 70,
                    floating: true,
                    backgroundColor: Highcharts.defaultOptions.chart.backgroundColor,
                    borderWidth: 1
                },
                plotOptions: {
                    scatter: {
                        marker: {
                            radius: 5,
                            states: {
                                hover: {
                                    enabled: true,
                                    lineColor: 'rgb(100,100,100)'
                                }
                            }
                        },
                        states: {
                            hover: {
                                marker: {
                                    enabled: false
                                }
                            }
                        },
                        tooltip: {
                            headerFormat: '<b>{series.name}</b><br>',
                            pointFormat: '{point.x} cm, {point.y} kg'
                        }
                    }
                },
                series: [{
                    name: 'Female',
                    color: 'rgba(223, 83, 83, .5)',
                    data: female //local variable

                }, {
                    name: 'Male',
                    color: 'rgba(119, 152, 191, .5)',
                    data: male //local variable
                }]
            });

        }, 150);
    }
}
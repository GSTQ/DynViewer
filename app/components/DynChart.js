import React, { Component } from 'react';
import { Scatter } from 'react-chartjs-2';
import { getDynamogramm } from '../db.js'

const options = {
    responsive: true,
    animation: {
        duration: 0, // general animation time
    },
    hover: {
        animationDuration: 0, // duration of animations when hovering an item
    },
    responsiveAnimationDuration: 0, // animation duration after a resize
    legend: {
        display: false
    },
    tooltips: {
        callbacks: {
            label: function (tooltipItem, data) {
                return 'Ход: ' + tooltipItem.xLabel + ' мм, Нагрузка: ' + tooltipItem.yLabel + ' кгс';
            }
        }
    },
    scales: {
        yAxes: [{
            scaleLabel: {
                display: true,
                labelString: "Нагрузка, кгс"
            }
        }],
        xAxes: [{
            scaleLabel: {
                display: true,
                labelString: "Ход, мм"
            }
        }]
    }
};

export default class DynChart extends Component {

    componentWillMount() {
        this.setState({ chart_data: {}, chart_title: null });
    }

    async componentWillReceiveProps(nextProps) {
        if (nextProps.selected_dyn != null) {
            await getDynamogramm(nextProps.selected_dyn).then(data => this.setupChart(data));
        }
    }

    setupChart(data) {
        var position = data.position_data.split(';').map(function (item) {
            return parseFloat(item);
        });
        var load = data.load_data.split(';').map(function (item) {
            return parseFloat(item);
        });
        var series_data = position.map(function (e, i) {
            return { 'x': e, 'y': load[i] };
        });
        var chart_data = this.getChartData(series_data);
        this.setState({ chart_data: chart_data });
        this.setState({ chart_title: 'Динамограмма на ' + data.dt });
    };

    getChartData(series_data) {
        return {
            labels: ['Scatter'],
            datasets: [
                {
                    label: 'Dynamogramm',
                    fill: false,
                    showLine: true,
                    backgroundColor: 'rgba(66, 133, 244, 0.4)',
                    borderColor: 'rgba(66, 133, 244, 0.4)',
                    pointBorderColor: 'rgba(66, 133, 244, 0.4)',
                    pointBackgroundColor: '#fff',
                    pointBorderWidth: 1,
                    pointHoverRadius: 5,
                    pointHoverBackgroundColor: 'rgba(66, 133, 244, 1)',
                    pointHoverBorderColor: 'rgba(66, 133, 244, 1)',
                    pointHoverBorderWidth: 2,
                    pointRadius: 1,
                    pointHitRadius: 10,
                    data: series_data
                }
            ]
        }
    }

    render() {
        return (
            <div>
                <h4 className="text-center">{this.state.chart_title}</h4>
                <Scatter data={this.state.chart_data} options={options} />
            </div>);
    }
}
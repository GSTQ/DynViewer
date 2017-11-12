import React, { Component } from 'react';
import { Scatter } from 'react-chartjs-2';
import { getDynamogramm } from '../db.js'

const options = {
    responsive: true,
    legend: {
        display: false
    }
};

export default class DynChart extends Component {

    componentWillMount() {
        this.setState({ chart_data: {} });
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
    };

    getChartData(series_data) {
        return {
            labels: ['Scatter'],
            datasets: [
                {
                    label: 'My First dataset',
                    fill: false,
                    showLine: true,
                    backgroundColor: 'rgba(75,192,192,0.4)',
                    borderColor: 'rgba(75,192,192,0.4)',
                    pointBorderColor: 'rgba(75,192,192,1)',
                    pointBackgroundColor: '#fff',
                    pointBorderWidth: 1,
                    pointHoverRadius: 5,
                    pointHoverBackgroundColor: 'rgba(75,192,192,1)',
                    pointHoverBorderColor: 'rgba(220,220,220,1)',
                    pointHoverBorderWidth: 2,
                    pointRadius: 1,
                    pointHitRadius: 10,
                    data: series_data
                }
            ]
        }
    }

    render() {
        return (<Scatter data={this.state.chart_data} options={options} />);
    }
}
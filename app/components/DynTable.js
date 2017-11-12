import React, { Component } from 'react'
import { Table } from 'react-bootstrap'
import { getClassifierData } from '../db.js'

export default class DynTable extends Component {

    componentWillMount() {
        this.setState({ dyn_items: [], selected_dyn: null });
    }

    async componentWillReceiveProps(nextProps) {
        if (nextProps.selected_dyn != null) {
            await getClassifierData(nextProps.selected_dyn, this.props.classifier_id)
                .then(data => {
                    this.setState({ dyn_items: data })
                    this.setState({ max_item: Math.max.apply(Math, data.map(function (o) { return o.value; })) })
                });
        }
    }

    render() {
        console.log('class=' + this.props.classifier_id + ' value=' + this.state.max_item);
        var table_items = this.state.dyn_items.map((dyn_item) => {
            return (
                <tr className={dyn_item.value == this.state.max_item ? "success" : ""}>
                    <td>{dyn_item.class_name}</td>
                    <td>{dyn_item.value}</td>
                </tr>
            );
        });
        return (
            <div>
                <h4>Результаты классификатора {this.props.classifier_id}</h4>
                <Table bordered condensed>
                    <thead>
                        <tr>
                            <th>Класс</th>
                            <th>Уверенность</th>
                        </tr>
                    </thead>
                    <tbody>
                        {table_items}
                    </tbody>
                </Table>
            </div>
        );
    }
}
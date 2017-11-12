import React, { Component } from 'react'
import { ListGroup, ListGroupItem } from 'react-bootstrap'
import { getDynamogrammList } from '../db.js'

export default class DynamogrammList extends Component {

    componentWillMount() {
        this.setState({ dyn_items: [], selected_dyn: null });
    }

    componentWillReceiveProps(nextProps) {
        getDynamogrammList(nextProps.selected_well).then(data => {
            this.setState({ dyn_items: data });
        });
    }

    render() {
        var dynItems = this.state.dyn_items.map((dyn_item) => {
            return (
                <ListGroupItem
                    active={this.state.selected_dyn == dyn_item.dyn_id}
                    onClick={() => this.onSelectedDynChange(dyn_item)}>
                    {dyn_item.dt}
                </ListGroupItem>);
        });
        return (<ListGroup>{dynItems}</ListGroup>)
    }

    onSelectedDynChange(dyn_item) {
        this.setState({ selected_dyn: dyn_item.dyn_id })
        this.props.OnSelectDyn(dyn_item);
    }
}
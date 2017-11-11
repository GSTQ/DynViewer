import React, {Component}  from 'react'
import {ListGroup, ListGroupItem} from 'react-bootstrap'
import {getWellList} from '../db.js'

export default class WellList extends Component {

    componentWillMount(){
        this.setState({well_items: [], selected_item: null});
        getWellList().then(data => {
            this.setState({well_items: data});
        });
    }

    render() {
        var wellItems = this.state.well_items.map((well_item) => {
            return (<ListGroupItem active={this.state.selected_item == well_item.well_id} onClick={() => this.setState({selected_item: well_item.well_id})}>Скв. {well_item.well_id}</ListGroupItem>);
        });
        return (<ListGroup>{wellItems}</ListGroup>)
    }
}
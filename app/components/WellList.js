import React, {Component}  from 'react'
import {ListGroup, ListGroupItem} from 'react-bootstrap'
import {db} from '../db.js'

export default class WellList extends Component {

    componentWillMount()
    {
        var well_items = [];
        this.setState({well_items: well_items});
        var that = this;
        db.each("SELECT well_id as well_name, count(dyn_id) as count FROM dynamograms group by well_id", 
            function(err, row) {
                var well_item = {
                    well_id: row.well_name,
                    dyn_count: row.count
                };
                well_items.push(well_item);
            },
            function(){ 
                that.setState({well_items: well_items});
        });
    }

    render() {
        var wellItems = this.state.well_items.map((well_item) => {
            return (<ListGroupItem>Скв. {well_item.well_id}</ListGroupItem>);
        });
        return (<ListGroup>{wellItems}</ListGroup>)
    }
}
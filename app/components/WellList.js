import React, {Component}  from 'react'
import {ListGroup, ListGroupItem} from 'react-bootstrap'
import {getWellList} from '../db.js'

export default class WellList extends Component {
    componentWillMount(){
        this.setState({well_items: [], selected_well: null});
        getWellList().then(data => {
            this.setState({well_items: data});
        });
    }

    render() {
        var wellItems = this.state.well_items.map((well_item) => {
            return (
                <ListGroupItem 
                    active = {this.state.selected_well == well_item.well_id}
                    onClick = {() =>  this.onChangeSelectedWellChange(well_item)}>
                        Скв. {well_item.well_id}
                        <span className="badge badge-default badge-pill">{well_item.count}</span>
                </ListGroupItem>);
        });
        return (<ListGroup>{wellItems}</ListGroup>)
    }

    onChangeSelectedWellChange(well_item){
        this.setState({selected_well : well_item.well_id})
        this.props.OnSelectWell(well_item.well_id);
    }
}
import React, {Component}  from 'react'
import {ListGroup, ListGroupItem} from 'react-bootstrap'
import {getDynamogrammList} from '../db.js'

export default class DynamogrammList extends Component {

    componentWillMount(){
        this.setState({dyn_items: []});
    }
    
    componentWillReceiveProps(nextProps)
    {
        getDynamogrammList(nextProps.selected_well).then(data => {
            this.setState({dyn_items: data});
        });
    }

    render() {
        var dynItems = this.state.dyn_items.map((dyn_item) => {
            return (
                <ListGroupItem >
                    {dyn_item.dt}
                </ListGroupItem>);
        });
        return (<ListGroup>{dynItems}</ListGroup>)
    }
}
import React, { Component } from 'react';
import WellList from '../components/WellList'
import DynamogrammList from '../components/DynamogrammList'
import DynamogrammCard from '../components/DynamogrammCard'
import { Grid, Row, Col } from 'react-bootstrap';

export default class App extends Component {

  componentWillMount() {
    this.setState({ selected_well: null, selected_dyn: null });
  }

  render() {
    return (
      <Grid fluid={true}>
        <Row className="content">
          <Col sm={3}><h4>Список скважин</h4><WellList OnSelectWell={this.OnSelectWell.bind(this)} /></Col>
          <Col sm={3}><h4>Список динамограмм</h4><DynamogrammList selected_well={this.state.selected_well} OnSelectDyn={this.OnSelectDyn.bind(this)}/></Col>
          <Col sm={6}><DynamogrammCard selected_dyn={this.state.selected_dyn}/></Col>
        </Row>
      </Grid>
    );
  }

  OnSelectWell(well_item) {
    this.setState({ selected_well: well_item });
  }

  OnSelectDyn(dyn_item){
    this.setState({ selected_dyn: dyn_item.dyn_id});
  }
}

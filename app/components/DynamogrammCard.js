import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import DynChart from '../components/DynChart';
import DynTable from '../components/DynTable'


export default class DynamogrammCard extends Component {

  render() {
    return (
      <div>
        <DynChart selected_dyn={this.props.selected_dyn} />
          <Row>
            <Col sm={6}><DynTable classifier_id = {1} selected_dyn={this.props.selected_dyn}/></Col>
            <Col sm={6}><DynTable classifier_id = {2} selected_dyn={this.props.selected_dyn}/></Col>
          </Row>
      </div>
    );
  }
}

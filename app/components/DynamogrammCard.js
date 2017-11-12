import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import DynChart from '../components/DynChart.js';


export default class DynamogrammCard extends Component {

  render() {
    return (
      <div>
        <DynChart selected_dyn={this.props.selected_dyn} />
        <Grid>
          <Row>
            <Col sm={6}><h4>Таблица 1</h4></Col>
            <Col sm={6}><h4>Таблица 2</h4></Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

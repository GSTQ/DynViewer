import React, { Component } from 'react';
import WellList from '../components/WellList.js'
import { Grid, Row, Col} from 'react-bootstrap';

export default class App extends Component {
  render() {
    return (
            <Grid>
                <Row>
                    <Col sm={3}><h4>Список скважин</h4><WellList/></Col>
                    <Col sm={3}><h4>Список динамограмм</h4></Col>
                    <Col sm={6}><h4>Графики и прочая хрень</h4></Col>
                </Row>
            </Grid>
    );
  }
}

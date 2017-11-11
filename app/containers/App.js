import React, { Component } from 'react';
import WellList from '../components/WellList.js'
import DynamogrammList from '../components/DynamogrammList.js'
import { Grid, Row, Col} from 'react-bootstrap';

export default class App extends Component {
  componentWillMount(){
    this.setState({selected_well: null});
  }
  render() {
    return (
            <Grid>
                <Row>
                    <Col sm={3}><h4>Список скважин</h4><WellList OnSelectWell = {this.OnSelectWell.bind(this)}/></Col>
                    <Col sm={3}><h4>Список динамограмм</h4><DynamogrammList selected_well={this.state.selected_well}/></Col>
                    <Col sm={6}><h4>Графики и прочая хрень</h4></Col>
                </Row>
            </Grid>
    );
  }

  OnSelectWell(well_item)
  {
    this.setState({selected_well: well_item});
  }
}

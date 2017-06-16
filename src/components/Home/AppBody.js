import React from 'react';
import { createHashHistory } from 'history'
import {withRouter} from "react-router-dom";
import PropTypes from "prop-types";
import { Paper, RaisedButton,Card, CardTitle, CardMedia ,CardText ,CardActions} from 'material-ui'
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import { connect } from 'react-redux'
import 'bootstrap/dist/css/bootstrap.css';
import {Row, Col, Grid, Image} from 'react-bootstrap';
import { browserHistory } from 'react-router'
import { onCategorySelect } from '../../actions'


export const history = createHashHistory()

const AppBody = ({categories, onCategorySelect}) => {

const cards = categories.map((category,index) => {
  return(
    <Col md="4">
      <Card>
        <CardMedia><Image width={200} height={200} src={category.img} rounded /></CardMedia>
        <Row>
          <Col md="6">
            <CardTitle title={category.title} subtitle={category.subtitle}/>
          </Col>
          <Col md="6">
            <CardActions>
              <RaisedButton primary={true} className="start-button" onClick={() => {
                console.log("button click "+category.id);
                onCategorySelect(category.id)
              }} label="Take Quiz"></RaisedButton>
            </CardActions>
          </Col>
        </Row>
      </Card>
    </Col>
  )
});

  return(
    <div className="App-body">
      <div id="popular-skills" className="content-block">
		    <h1 className="heading1">Select a Skill </h1>
         <div className="card_grid">
          <Row>
            {cards}
          </Row>
         </div>
	    </div>
    </div>
  )
}

const stateProps =(state) =>{
  return{
    categories : state.categories.categories
  }
}

const dispatchProps = (dispatch) =>{
  return{
    onCategorySelect: (category_id)  => dispatch(onCategorySelect(category_id)),
  }
}

AppBody.propTypes = {
  categories : PropTypes.array,
}

AppBody.contextTypes={
  store : React.PropTypes.object,
}

const appBody = connect(stateProps,dispatchProps)(AppBody)

export default appBody;

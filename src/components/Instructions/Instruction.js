import React, { Component } from 'react';
import './Instruction.css';
import { Paper, RaisedButton, AppBar } from 'material-ui'
import PropTypes from 'prop-types';
import { createHashHistory } from 'history'
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import {Row , Col} from 'react-bootstrap'
export const history = createHashHistory()

class Instruction extends React.Component {
  static contextTypes = {
    router: PropTypes.object
  }

  constructor(props, context) {
     super(props, context);
  }

  getChildContext() {
    return { muiTheme: getMuiTheme(baseTheme) };
  }

  onClick =() =>{
    this.context.router.history.push('/quiz');
  }

  render(){
    return (
      <div>
        <AppBar titleStyle={{fontSize:'18px'}} title="TechQuiz"/>
        <div className="Instruction">
  		  <div id="content">
  			<div className="headline_area">
  					<h1>Instructions</h1>
  			</div>
  			<div className="format_text">
            <ul className="instruction-ul">
  							<li>By taking this quiz, you agree not to post the questions shown here.</li>
  							<li>The duration of the quiz is 10 mins. Timing would be clearly shown.</li>
  							<li>Once you start the quiz, the timer would not stop, irrespective of any client side issues.</li>
  							<li>Questions can have single or multiple correct answers. They will be shown accordingly.</li>
  							<li>Your total score and the time left at any point in the quiz would be displayed on the top.</li>
  							<li>The scoring for each attempt of a question, would be visible to you in a separate section.</li>
  						</ul>
        </div>
        <Row>
          <Col className="col-md-12 centered">
            <RaisedButton className="btn_start_quiz" secondary={true} onClick={this.onClick} label="Start Quiz"></RaisedButton>
          </Col>
        </Row>
      </div>
    </div>
    </div>
    );
  }
}
Instruction.childContextTypes={
  muiTheme: React.PropTypes.object.isRequired,
};

export default Instruction;

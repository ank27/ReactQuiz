import React, { Component } from 'react';
import QuestionCount from '../../container/QuestionCount';
import Question from '../../container/Question';
import AnswerOption from '../../container/AnswerOption';
import Score from '../../container/Score';
import Timer from '../../container/Timer';
import {Row,Col,Grid} from 'react-bootstrap'
import './Quiz.css'
import { Card, CardTitle, CardMedia ,CardText ,CardActions, AppBar} from 'material-ui'

const Quiz =() => {
    return (
      <div>
        <AppBar titleStyle={{fontSize:'18px'}} title="Android Skill Test"/>
        <div className="content-area">
          <div className="question-area"></div>
          <div className="coading-area">
            <Row className="row_default">
              <Col md="12">
                <Card>
                  <QuestionCount />
                  <Question />
                  <AnswerOption />
                  <Score />
                </Card>
              </Col>
            </Row>
          </div>
        <div className="timer-area">
          <Timer />
        </div>
      </div>
    </div>
    );
}

export default Quiz;

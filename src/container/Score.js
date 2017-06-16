import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {Row, Col, Grid, Image} from 'react-bootstrap';

const Score = ({ state, quizcomplete,calculateScore }) => {
  if (quizcomplete) {
    function calculateScore() {
        let score= 0;
        state.answer.map((answer)=> answer.isAnswerCorrect === true ? score++ : score)
        console.log("score = "+score);
        return score;
    }

    return (
      <div>
        <Row>
          <Col md="4">
            <Image width={200} height={200} src="../images/android.png" rounded />
          </Col>
          <Col md="8">
            <h1>Quiz completed successfully</h1>
          </Col>
        </Row>
        <Row>
          <Col md="12">
            <div className="div_score">Your score = {calculateScore()} / {state.question.questions.length}</div>
          </Col>
        </Row>
      </div>
      )
  }else {
    return null
  }
}

const stateProps = (state) => {
  return{
    state : state,
    quizcomplete : state.quizcomplete
  }
}

const score = connect(stateProps,null)(Score)

Score.propTypes = {
  state : PropTypes.object,
  quizcomplete : PropTypes.bool
}

export default score

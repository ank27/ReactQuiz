import React from 'react'

const Timer =()=>{
  return(
    <div id="timer_widget">
      <div className="widget-block text-center">
        <div>
          <span id="remainSideBar" className="time_remaining">00:29:08</span>
          <small>time remaining</small>
        </div>
      </div>

      <div class="widget-block text-center">
        <div id="pending-attempt">
          <span class="big">0/25</span>
          <small>Questions Attempted</small>
        </div>
      </div>
  </div>
  )
}

export default Timer;

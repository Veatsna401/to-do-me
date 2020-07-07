import React from 'react';

const StatusTracker = ({
  amount,
  taskDone
  }) => {

  const width = ((taskDone / 100) * 10000) / amount;

  return (
    <div className={amount > 0 ? "tracker-container" : "hidden"}>
      <span className="task-counter">
        <strong style={{ margin:"0 4px" }}>{taskDone}</strong>  of  <strong style={{ margin:"0 4px" }}>{amount}</strong>  completed
      </span>
      <span className="progress-bar">
        <div className="task-done-bar" style={{ width:`${width}` + `%` }}>done</div>
      </span>
    </div>
  );
}

export default StatusTracker;

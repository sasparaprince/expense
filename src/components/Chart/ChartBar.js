import React from "react";
import "./ChartBar.css";

const ChartBar = (props) => {

    if (props.max > 0) {
        barFillHeight = Math.round((props.value / props.maxValue) * 100) + '%' ;
    }
  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div className="chart-bar__fill" style={{height: barFillHeight}}>
          <div className="chart-bar__lable">{props.lable}</div>
        </div>
      </div>
    </div>
  );
};

export default ChartBar;

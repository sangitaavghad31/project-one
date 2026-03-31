import React from "react";
import "./ChartBar.css"

const ChartBar = (props) =>{
    console.log(props);
    let fillheight = '0%';
    if(props.maxValue>0){
        fillheight = Math.round((props.value/props.maxValue)*100)+'%';
    }
    console.log(fillheight);

    return<div>
    <div className="chart-bar">
            <div className="chart-bar__inner">
                <div className="chart-bar__fill" style={{height:fillheight}}></div>
            </div>
            <div className="chart-bar__label">{props.label}</div>
        </div>
    </div>
    
}

export default ChartBar;
import React from 'react';

function SliderBar(props) {
    let { barWidth, slideBarLabel1, slideBarLabel2 } = props;
    console.log(barWidth);

    if (barWidth === undefined) {
        return "";
    } else {
        if (barWidth === "100") {
            barWidth = "95";
        }
        
        return (
            <div className='slider-bar'>
                <div style={{left: `${barWidth}%`}} className="slider-bar-x">X</div>
                <div className='slider-bar-labels'><span className="label-left">{slideBarLabel1}</span><span className="label-right">{slideBarLabel2}</span></div>
            </div>
        )
    }
}

export default SliderBar;
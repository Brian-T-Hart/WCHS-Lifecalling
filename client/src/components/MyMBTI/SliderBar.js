import React from 'react';

function SliderBar(props) {
    let { barWidth } = props;
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
                {/* <div style={{width: `${barWidth}%`}} className="slider-bar-inner"></div> */}
                <div className='slider-bar-labels'><span className="label-left">Introvert</span><span className="label-right">Extrovert</span></div>
            </div>
        )
    }
}

export default SliderBar;
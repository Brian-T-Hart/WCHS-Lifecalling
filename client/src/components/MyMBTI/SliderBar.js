import React from 'react';

function SliderBar(props) {
    const { barWidth } = props;
    console.log(barWidth);

    if (barWidth === undefined) {
        return "";
    } else {
        return (
            <div className='slider-bar'>
                <div style={{width: `${barWidth}%`}} className="slider-bar-inner"></div>
                <div className='slider-bar-labels'><span className="label-left">Introvert</span><span className="label-right">Extrovert</span></div>
            </div>
        )
    }
}

export default SliderBar;
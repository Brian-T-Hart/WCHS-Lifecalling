import React from 'react';

function Slider(props) {
    const { sliderId, sliderLabel1, sliderLabel2, sliderValue, myMbti } = props;

    if (myMbti === undefined || sliderId === undefined) {
        return "";
    } else {
        const defaultValue = sliderValue === undefined ? "0" : sliderValue;

        return (
            <div className="form-group">
                <label className='slider-label' htmlFor={sliderId}>{"Where are you on the " + sliderId + " scale?"}</label>
                <input
                    type="range"
                    defaultValue={defaultValue}
                    className="slider"
                    id={sliderId}
                    list={sliderId + "-markers"}
                    min="0"
                    max="100"
                    name="mbti-slider"
                    step="20"
                />
                <datalist className="markers" id={sliderId + "-markers"}>
                    <option value="0" label={sliderLabel1}></option>
                    <option value="20" label=""></option>
                    <option value="40" label=""></option>
                    <option value="60" label=""></option>
                    <option value="80" label=""></option>
                    <option value="100" label={sliderLabel2}></option>
                </datalist>
            </div>
        )
    }
}

export { Slider }
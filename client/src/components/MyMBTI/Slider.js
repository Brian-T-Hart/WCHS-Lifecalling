import React from 'react';

function Slider(props) {
    const { myMbti } = props;

    if (myMbti === undefined) {
        return "";
    } else {
        const sliderValue = myMbti[4] === undefined ? "0" : myMbti[4];

        return (
            <div className="form-group">
                <label htmlFor="mbti-slider">Where are you on the Introvert/Extrovert Scale?</label>
                <input
                    type="range"
                    defaultValue={sliderValue}
                    className="slider"
                    id="mbti-slider"
                    list="mbti-markers"
                    min="0"
                    max="100"
                    name="mbti-slider"
                    step="20"
                />
                <datalist className="markers" id="mbti-markers">
                    <option value="0" label="Introvert"></option>
                    <option value="20" label=""></option>
                    <option value="40" label=""></option>
                    <option value="60" label=""></option>
                    <option value="80" label=""></option>
                    <option value="100" label="Extrovert"></option>
                </datalist>
            </div>
        )
    }
}

export { Slider }
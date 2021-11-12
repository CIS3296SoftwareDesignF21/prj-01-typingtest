import React from 'react'
import '../stylesheets/ToggleSwitch.css'

const ToggleSwitch = ({countdownToggleChecked, onToggle}) => {

    const blah = (e) => {
        console.log("Actual: " + e.target.checked)
        onToggle(e.target.checked)
        console.log("Reality: " + countdownToggleChecked)
    }
    return (
        <div className="cd-switch-wrapper">
            <div>
                Countdown
            </div>
            <div className="countdown-switch">
                <div className="text">
                    Off
                </div>
                <div>
                    <label class="switch">
                        <input 
                            type="checkbox"
                            checked={countdownToggleChecked}
                            onChange={e => blah(e)}
                            />
                        <span class="slider"></span>
                    </label>
                </div>
                <div className="text">
                    On
                </div>
            </div>
        </div>
    )
}

export default ToggleSwitch

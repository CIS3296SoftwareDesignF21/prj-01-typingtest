import React from 'react'
import '../stylesheets/TaskBar.css'
import {MdAccountCircle} from "react-icons/md"

const TaskBar = () => {
    return (
        <div className="tb-wrapper">
            <div className="top-group">
                <MdAccountCircle className='tb-button'/>
                <MdAccountCircle className="tb-button"/>
                <MdAccountCircle className='tb-button'/>
                <MdAccountCircle className="tb-button"/>

            </div>
            <div className="bottom-group">
                <MdAccountCircle className="tb-button"/>
            </div>
        </div>
    )
}

export default TaskBar

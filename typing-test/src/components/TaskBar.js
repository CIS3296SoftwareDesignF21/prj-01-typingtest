import React from 'react'
import '../stylesheets/TaskBar.css'
import {MdAccountCircle} from "react-icons/md"

const TaskBar = ({page, setPage}) => {
    return (
        <div className="tb-wrapper">
            <div className="top-group">
                <MdAccountCircle onClick={() => setPage(0)} style={page === 0 ? { color: '#50E3C2', filter: 'drop-shadow(0px 0px 8px #50E3C2)'} : null} className='tb-button'/>
                <MdAccountCircle onClick={() => setPage(1)} style={page === 1 ? { color: '#50E3C2', filter: 'drop-shadow(0px 0px 8px #50E3C2)'} : null} className="tb-button"/>
                <MdAccountCircle onClick={() => setPage(2)} style={page === 2 ? { color: '#50E3C2', filter: 'drop-shadow(0px 0px 8px #50E3C2)'} : null} className='tb-button'/>
                <MdAccountCircle onClick={() => setPage(3)} style={page === 3 ? { color: '#50E3C2', filter: 'drop-shadow(0px 0px 8px #50E3C2)'} : null} className="tb-button"/>

            </div>
            <div className="bottom-group">
                <MdAccountCircle onClick={() => setPage(4)} style={page === 4 ? { color: '#50E3C2', filter: 'drop-shadow(0px 0px 8px #50E3C2)'} : null} className="tb-button"/>
            </div>
        </div>
    )
}

export default TaskBar

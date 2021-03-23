import React from 'react';
import { AiOutlineDelete, FiMonitor, RiEdit2Line } from 'react-icons/all';
import { BsShieldLock } from "react-icons/bs";
function ReadmeFileHeader({ lines, length }) {
    return (
        <div className="readme_file__header">
            <div className="readme_file__header_info">
                <span> <BsShieldLock size={15} />  lines {lines}</span>
                <span>{`(sloc ${lines})`}</span>
                <span>{length}</span>
            </div>
            <div className="readme_file__header_action">
                <div className="repo___action_box_btn_act">

                    <span className='span_title'>Raw</span>

                    <span className='counter'>Blame</span>
                </div>
                <FiMonitor size={18} />
                <RiEdit2Line size={18} />
                <AiOutlineDelete size={18} />
            </div>
        </div>
    )
}

export default ReadmeFileHeader

import React from 'react';
import { AiOutlineStar, BiCaretDown, BiGitRepoForked, BiShow } from "react-icons/all";
function RespositoryHeaderActionsBox() {
    return (
        <div className="repo___action_box">
            <div className="repo___action_box_btn_act">
                <BiShow size={18} />
                <span className='span_title'>unwatch</span>
                <BiCaretDown size={15} />
                <span className='counter'>1</span>
            </div>
            <div className="repo___action_box_btn_act">
                <AiOutlineStar size={18} />
                <span className='span_title'>Star</span>

                <span className='counter'>0</span>
            </div>
            <div className="repo___action_box_btn_act">
                <BiGitRepoForked size={18} />
                <span className='span_title'>Fork</span>

                <span className='counter'>0</span>
            </div>



        </div>
    )
}

export default RespositoryHeaderActionsBox
{/** <span className='repo___action_box_btn_act_drop_box'></span> */ }
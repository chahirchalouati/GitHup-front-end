import React from 'react'
import { BiCaretDown } from 'react-icons/bi'
import { GoPlus } from 'react-icons/go'
import { VscBell } from 'react-icons/vsc'

function ProfileBox() {
    return (
        <div className="nav_box_profile">

            <div className="nav_box_profile__item">
                <VscBell size={20} onClick={e => { }} />
                <div className="nav_box_profile__item_drop">

                </div>
            </div>
            <div className="nav_box_profile__item">
                <GoPlus size={20} onClick={e => { }} />
                <BiCaretDown />
                <div className="nav_box_profile__item_drop">

                </div>
            </div>
            <div className="nav_box_profile__item">
                <img src="https://images.pexels.com/photos/428364/pexels-photo-428364.jpeg?cs=srgb&dl=pexels-spencer-selover-428364.jpg&fm=jpg" alt="" />
                <BiCaretDown />
                <div className="nav_box_profile__item_drop">

                </div>
            </div>

        </div>
    )
}

export default ProfileBox

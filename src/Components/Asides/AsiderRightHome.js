import React from 'react'
import { AiOutlineStar, CgArrowLongRight } from "react-icons/all";
import { Link } from 'react-router-dom';
const ExploredRepository = ({ value }) => {
    return <div className='explored__repository'>

        <div className="explored__repository__header">
            <h5>Lorem/ipsum</h5>
        </div>

        <div className="explored__repository__body">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio unde assumenda voluptates? Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero ullam placeat atis?</p>
        </div>

        <div className="explored__repository__footer">
            <div className="explored__repository__footer__items">
                <span className='rounded_color'></span>
                <span className="language">JavaScript</span>
            </div>
            <div className="explored__repository__footer__items">
                <AiOutlineStar size={16} className='icons__starts'></AiOutlineStar>
                <span className="count">{Math.floor(Math.random() * Math.floor(100))}</span>
            </div>
        </div>

    </div>
}


function AsiderRightHome() {
    return (
        <div className='aside_right_info'>
            <div className="aside_right_info__header">
                <h4>Explore repositories</h4>
            </div>
            {[0, 1, 2, 3, 4].map((value, key) => <ExploredRepository key={key} value={value} />)}
            <Link className='explore_more_link' size={15} to={"/explore"}><span>explore more</span>  <CgArrowLongRight /></Link>
        </div>
    )
}

export default AsiderRightHome

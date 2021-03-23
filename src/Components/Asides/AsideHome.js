import React from 'react';
import { IoMdBookmarks } from "react-icons/io";
import { Link } from 'react-router-dom';
import AsideLinkRepo from '../Links/AsideLinkRepo';
function AsideHome({ listRepository }) {

    return (
        <aside>
            <div className="aside_header">

                <div className="title">Repositories</div>
                <div className="btn_primary"><IoMdBookmarks /><span>new</span></div>

            </div>

            <div className="search_box">
                <input type="text" placeholder='Find a repository…' />
            </div>
            <div className="aside_body">
                {
                    listRepository.map((repo, index) =>
                        <AsideLinkRepo
                            key={index}
                            className={"nav_link_aside_repo"}
                            repository={repo}
                            to={`/repository/${repo.name}/code`} />)
                }
            </div>

            <div className="aside_footer">
                <h3>Working with a team?</h3>
                <p>GitHub is built for collaboration. Set up an organization to improve the way your team works together, and get access to more features.</p>
                <Link className='btn_light_blue' to='/organisation'>Create an organisation</Link>
            </div>



        </aside>
    )
}

export default AsideHome

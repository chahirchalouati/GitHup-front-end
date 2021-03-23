import React from 'react'
import { RiGitRepositoryLine } from 'react-icons/ri'
import { Link } from 'react-router-dom'
import LinkDivider from '../../Utils/LinkDivider'

function RespositoryHeaderNameBox({ isPrivate, name }) {
    return (
        <div className="repo___name_box">
            <RiGitRepositoryLine fill={"gray"} size={20} />
            <Link
                to={`/repository/${name}`}
                className={"repo_page__header_link"}>
                <span className="username">{name}</span>

                <LinkDivider />
                <span className="reponame"> {name}</span>
            </Link>
            <div className="access_type">
                {isPrivate ? "Private" : "Public"}
            </div>


        </div>
    )
}

export default RespositoryHeaderNameBox
